import React, { Suspense, useEffect } from 'react'
import ProductRelative from '../../components/ProductRelative'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Reviews from '../../components/Reviews'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import { useFetchOneProductQuery } from '../../stores/toolkit/product/product.service';
import { useAddCartMutation, useFetchListCartQuery } from '../../stores/toolkit/cart/cart.service';
import { useState } from "react"
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';
import { addCartSlice, listCartSlice } from '../../stores/toolkit/cart/cartSlice';
import { useForm } from "react-hook-form"
import { feedBackForm, feedBackSchema } from '../../Schemas/feedBack/feedback';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAddFeedBackMutation, useListFeedBackQuery } from '../../stores/toolkit/feedBack/feedBack.service';
import { addFeedBackSlice, fetchListFeedBackSlice } from '../../stores/toolkit/feedBack/feedBackSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../stores/toolkit';
import { IFeedBack } from '../../stores/toolkit/feedBack/feedBack.interface';
const ProductDetail = () => {
    const dispatch: Dispatch<any> = useDispatch()
    const { id } = useParams()
    const { data: getOneProduct } = useFetchOneProductQuery(id)
    const [quantity, setQuantiy] = useState<number>(1)
    const { data: listcomment, isSuccess: isSuccessFeedBack, isLoading, isError } = useListFeedBackQuery()
    const feedBackState = useSelector((state: RootState) => state.feedBackSlice.feedBacks)
    const { data: listCart, isSuccess } = useFetchListCartQuery()
    const cartState = useSelector((state: RootState) => state.cartSlice.carts)
    const [addCart] = useAddCartMutation()
    const [addFeedBack] = useAddFeedBackMutation()
    const navigate = useNavigate()
    const userLocal = JSON.parse(localStorage.getItem("user")!)

    const addToCart = async (id: string) => {
        try {
            if (userLocal && id) {
                const cartId = cartState?.filter((cart) =>
                    cart.productId === getOneProduct?._id
                )
                if (cartId[0]?.quantity + quantity > getOneProduct?.quantity) {
                    alert("Sản phẩm đã vượt quá số lượng tồn kho!")
                } else {
                    await addCart({
                        userId: userLocal?._id,
                        productId: id,
                        price: getOneProduct?.price * quantity,
                        quantity: quantity,
                    }).then(() =>
                        dispatch(addCartSlice({
                            userId: userLocal?._id,
                            productId: id,
                            price: getOneProduct?.price * quantity,
                            quantity: quantity,
                        })))
                }
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        if (isSuccess && listCart) {
            dispatch(listCartSlice(listCart))
        }

    }, [isSuccess])
    useEffect(() => {
        if (isSuccessFeedBack) {
            const listCommentFilter = listcomment?.filter((comment) => comment.productId == id)
            dispatch(fetchListFeedBackSlice(listCommentFilter))
        }
    }, [isSuccessFeedBack, dispatch])
    const increment = () => {
        if (quantity > 1) {
            setQuantiy(quantity - 1)
        }
    }
    const decrement = () => {
        console.log(1);

        setQuantiy(quantity + 1)
    }
    const navigateSignin = () => {
        alert("Cần phải đăng nhập!")
        navigate("/signin")
    }

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors }
    } = useForm<feedBackForm>({
        resolver: yupResolver(feedBackSchema)
    })
    useEffect(() => {
        if (userLocal && getOneProduct) {
            setValue("productId", getOneProduct?._id)
            setValue("userId", userLocal?._id)
            setValue("status", 1)
        }
    }, [setValue, userLocal, getOneProduct])
    const onAddComment = async (comment: feedBackForm) => {
        try {
            await addFeedBack(comment)
                .then(() => { dispatch(addFeedBackSlice({ userId: userLocal._id, productId: getOneProduct._id, status: 1, comment: comment.comment })) });
        } catch (error) {
            console.log(error);
        }
    }
    if (isLoading) {
        return <>isLoading...</>
    }
    if (isError) {
        return <>isError...</>
    }
    return (
        <div className='relative'>
            <div className='container bg-white'>
                <div className="my-4 px-4 py-10 rounded-lg  flex">
                    <div className="w-[40%]">
                        <div className="flex">
                            <div className="flex flex-col w-[20%] max-h-[400px] overflow-hidden">
                                <img className="w-full h-[100px] object-cover hover:border hover:border-1" src={getOneProduct?.thumbnail} alt="" />
                            </div>
                            <Swiper
                                modules={[Navigation, Pagination, Scrollbar, A11y]}
                                spaceBetween={0}
                                slidesPerView={1}
                                navigation
                                onSwiper={(swiper) => console.log(swiper)}
                                className='w-[70%]'
                            >
                                <SwiperSlide className='relative group hover:shadow-lg'>
                                    <img className='w-full h-[450px] object-cover' src={getOneProduct?.image} alt="" />
                                </SwiperSlide>
                            </Swiper>
                        </div>

                    </div>
                    <div className="w-[60%] p-4">
                        <div className="">
                            <h1 className='text-[24px]'>{getOneProduct?.name}</h1>
                            <div className="flex justify-between mt-5 w-[500px]">
                                <div className="">
                                    <p className="">Nhà cung cấp: <span className='ml-1 uppercase font-bold'>quyennc</span></p>
                                    <p className="mt-1">Nhà xuất bản: <span className='ml-1 uppercase font-bold'>quyennc</span></p>
                                    <p className='text-yellow-500 my-2 font-bold'>5 sao (6 đánh giá)</p>
                                </div>
                                <p className="">Tác giả: <span className='ml-1 uppercase font-bold'>{getOneProduct?.author}</span></p>
                            </div>
                        </div>
                        <div className="flex font-semibold py-10 items-center">
                            <p className='text-main text-[24px]'>{getOneProduct?.price?.toLocaleString('vi-VN')} <sup>đ</sup></p>
                            <p className='text-[16px] font-normal ml-2'><del>{getOneProduct?.discount.toLocaleString('vi-VN')} <sup>đ</sup></del></p>
                            <div className="p-1 ml-2 text-[16px] rounded-lg bg-main text-white">
                                {getOneProduct?.price < getOneProduct?.discount ? ((getOneProduct?.discount - getOneProduct?.price) / getOneProduct?.discount * 100)?.toFixed(0) : 0}%
                            </div>
                        </div>
                        <div className="flex items-center">
                            <p className='font-bold text-[16px]'>Số lượng: </p>
                            <div className="flex items-center ml-3">
                                <button
                                    type="button"

                                    className="px-3 py-1 bg-gray-200 text-gray-700 rounded-l"
                                    onClick={() => increment()}
                                >
                                    -
                                </button>
                                <input
                                    type="number"
                                    className="px-3 py-1 bg-white border-t border-b border-gray-200 w-[50px] appearance-none text-center border-none"
                                    value={quantity}
                                    defaultValue={quantity}
                                    onChange={(e) => setQuantiy(Number(e.target.value))}
                                />
                                <button
                                    type="button"
                                    className="px-3 py-1 bg-gray-200 text-gray-700 rounded-r"
                                    onClick={() => decrement()}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                        <div className="flex mt-5">
                            <div className="flex my-4 border boder-1 w-[200px] justify-center items-center py-2 border-main text-main text-center  text-[16px] hover:bg-main hover:text-white transition-all ease-linear group rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#C92127" className="w-6 h-6 group-hover:stroke-white">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                </svg>
                                {userLocal ?
                                    <button onClick={() => addToCart(getOneProduct?._id)} className='ml-1 font-bold'>Thêm vào giỏ hàng</button> :
                                    <button onClick={() => navigateSignin()} className='ml-1 font-bold'>Thêm vào giỏ hàng</button>
                                }
                            </div>
                            <div className="flex ml-4 my-4 border boder-1 px-4 py-2 w-[200px] justify-center items-center border-main text-white text-center bg-main  text-[16px] hover:bg-red-600 hover:text-white transition-all ease-linear group rounded-lg">
                                <button className='ml-1 font-bold'>Mua ngay</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {getOneProduct &&
                <ProductRelative id={id} getOneProduct={getOneProduct}></ProductRelative>
            }
            <div className="bg-white container">
                <div className="mt-3 p-4">
                    <h1 className='font-bold uppercase text-lg'>Thông tin sản phẩm</h1>
                    <div className="mt-4 text-[14px]">
                        <p className='w-[400px] flex text-[#888888] mt-2'>Mã hàng: <span className='text-right flex-1 inline-block text-black'>0909</span></p>
                        <p className='w-[400px] flex text-[#888888] mt-2'>Tên nhà cung cấp: <span className='inline-block flex-1 mr-0 text-right text-black font-bold'>First New</span></p>
                        <p className='w-[400px] flex text-[#888888] mt-2'>Tác giả: <span className='inline-block flex-1 mr-0 text-right text-black font-bold'>{getOneProduct?.author}</span></p>
                        <p className='w-[400px] flex text-[#888888] mt-2'>Năm xuất bản: <span className='inline-block flex-1 mr-0 text-right text-black'>2020</span></p>
                        <p className='w-[400px] flex text-[#888888] mt-2'>Ngôn ngữ: <span className='inline-block flex-1 mr-0 text-right text-black'>Tiếng Việt</span></p>
                    </div>
                    <hr className='my-4 border border-2-[#000]' />
                    <h1 className='font-bold uppercase text-lg'>Mô tả sản phẩm</h1>
                    <p className='mt-4 leading-6 text-[14px]'>{getOneProduct?.description}</p>
                </div>
            </div>
            <div className="bg-white container">
                <div className="mt-3 p-4">
                    <h1 className='font-bold uppercase text-lg'>Đánh giá sản phẩm</h1>
                    {userLocal ?
                        <div className="flex mx-auto items-center justify-center shadow-lg  mb-4 w-full">
                            <form onSubmit={handleSubmit(onAddComment)} className="w-full bg-white rounded-lg px-4 pt-2">
                                <div className="flex flex-wrap -mx-3 mb-6">
                                    <h2 className="px-4 pt-3 pb-2 text-gray-800 text-lg">Bình luận</h2>
                                    <div className="w-full md:w-full px-3 mb-2 mt-2">
                                        <textarea {...register("comment")} className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full  px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" name="comment" placeholder='Nhấn vào để bình luận ...'></textarea>
                                    </div>
                                    <div className="w-full flex items-start md:w-full px-3">
                                        <div className="-mr-1">
                                            <button className="bg-blue-600 cursor-pointer text-white font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-blue-700" >Post Comment</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        : <div className='mt-4'>Bạn phải đăng nhập mới có thể hãy <Link to="" className='font-bold text-blue-500'>Đăng nhập</Link> hoặc <Link to="" className='font-bold text-blue-500'>Đăng kí</Link></div>}
                    <hr className='my-4' />
                    {feedBackState?.slice().reverse().map((feedBack) =>
                        <Reviews productId={getOneProduct?._id} feedBack={feedBack}></Reviews>
                    )}
                </div>
            </div>
        </div >

    )
}

export default ProductDetail
