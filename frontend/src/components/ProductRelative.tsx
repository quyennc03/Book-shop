import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { useFetOneCategoryQuery } from '../stores/toolkit/category/category.service';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '../stores/toolkit';
import { listProductSlice } from '../stores/toolkit/product/productSlice';
const ProductRelative = (props: any) => {
    const dispatch: Dispatch<any> = useDispatch()
    const { data: category, isSuccess } = useFetOneCategoryQuery(props?.getOneProduct?.categoryId?._id)
    const productState = useSelector((state: RootState) => state.productSlice.products)

    useEffect(() => {
        if (isSuccess && category) {
            dispatch(listProductSlice(category.products))
        }
    }, [isSuccess])
    return (
        <div>
            <div className="bg-white flex px-4 py-3 container border-b-2 flex-col">
                <h1 className='font-bold uppercase text-lg'>Sản phẩm liên quan</h1>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={30}
                    slidesPerView={5}
                    navigation
                    onSwiper={(swiper) => console.log(swiper)}
                    className='p-2 grid grid-cols-5 max-h-[732px] overflow-hidden py-4 gap-5'
                >
                    {productState?.map((product, index) => {
                        return <SwiperSlide className='relative group hover:shadow-lg' key={index}>
                            <a href={`/productDetail/${product._id}`}>
                                <div className="h-[200px] overflow-hidden">
                                    <img className='w-full h-full object-cover group-hover:scale-110 transition-all ease-linear' src={product.image} alt="" />
                                </div>
                                <div className="p-3">
                                    <h1 className='text-[14px] line-clamp-2'>{product.name}</h1>
                                    <div className="flex text-[16px] items-center font-semibold py-2">
                                        <span className='text-red-600'>{product.price.toLocaleString("vi-VN")} <sup>đ</sup></span>
                                        <span className='text-[14px] font-normal ml-1 text-[#888888]'><del>{product.discount.toLocaleString("vi-VN")}</del> <sup>đ</sup></span>
                                    </div>
                                    <div className="rounded-lg font-bold">0 đã bán</div>
                                </div>
                                <div className="absolute top-2 left-2 rounded-[50%] py-2 px-2 font bg-main">
                                    <p className='text-white'>{product.price < product.discount ? ((product?.discount - product?.price) / product?.discount * 100).toFixed(0) : 0}%</p>
                                </div>
                            </a>
                        </SwiperSlide>
                    })}
                </Swiper>
                <button className='my-4 w-[250px] border boder-1 border-main text-main text-center ml-[50%] translate-x-[-50%] px-10 py-2 text-[16px] hover:bg-main hover:text-white transition-all ease-linear'>Xem thêm</button>
            </div>
        </div>
    )
}

export default ProductRelative
