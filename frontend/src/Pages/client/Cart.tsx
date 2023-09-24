import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { useFetchCartByUserQuery, useFetchListCartQuery, useRemoveCartMutation } from '../../stores/toolkit/cart/cart.service'
import { Dispatch } from 'redux'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { RootState } from '../../stores/toolkit'
import { deleteCartSlice, listCartSlice } from '../../stores/toolkit/cart/cartSlice'
import { useFetchListProductQuery, useFetchOneProductQuery } from '../../stores/toolkit/product/product.service'
import { listProductSlice } from '../../stores/toolkit/product/productSlice'
import { ICart } from '../../stores/toolkit/cart/cart.interface'
const Cart = () => {
    const dispatch: Dispatch<any> = useDispatch()
    const cartState = useSelector((state: RootState) => state.cartSlice.carts)
    console.log(cartState);

    const { data: listCart, isSuccess } = useFetchListCartQuery()
    const productState = useSelector((state: RootState) => state.productSlice.products)
    const { data: listProduct, isSuccess: isSuccessProduct } = useFetchListProductQuery()
    const [onRemove] = useRemoveCartMutation()
    const [carts, setCarts] = useState<ICart[]>([])
    const [totalMoney, setTotalMoney] = useState<number>(0)
    const user = JSON.parse(localStorage.getItem("user")!)
    useEffect(() => {
        if (isSuccess && listCart) {
            dispatch(listCartSlice(listCart))
        }

        if (isSuccessProduct) {
            dispatch(listProductSlice(listProduct))
        }
    }, [isSuccess, isSuccessProduct])

    // useEffect(() => {
    //     handleCartInfo()
    // }, [cartState])
    const removeCart = async (id: string) => {
        try {
            if (id) {
                const isConfirm = window.confirm("Ban co chac chan muon xoa khong?");
                if (isConfirm) {
                    await onRemove(id).then(() => dispatch(deleteCartSlice(id)))
                    alert("Xoa thanh cong!")
                }
            }
        } catch (error) {
            console.log(error);

        }
    }
    useEffect(() => {
        let total = 0
        cartState.map((cart) => {
            total += cart.price * cart.quantity
        })
        setTotalMoney(total)
    }, [cartState])
    return (
        <div className='container'>
            <h1 className="uppercase mt-11 text-lg">Giỏ hàng của bạn</h1>
            <div className="bg-white flex justify-between px-2 py-3 rounded-lg font-bold">
                <p className='font-bold'>({cartState?.length} Sản phẩm)</p>
                <div></div>
                <div className=""></div>
                <div className=""></div>
                <p className='mr-5'>Số lượng</p>
                <p className='mr-5'>Thành tiền</p>
                <div className=""></div>
            </div>
            <div className="my-3 bg-white px-3 py-1 rounded-lg flex flex-col">
                <form className='flex flex-col'>
                    {cartState ? cartState?.map((cart, index) => {
                        return <>
                            {listProduct?.map((product, index) =>
                                product._id == cart.productId ?
                                    <>
                                        <div key={index} className="px-3 py-5 flex justify-between items-center border-gray-200">
                                            <Link to={`/productDetail`}>
                                                <img src={product.image} className="w-[98px] h-[98px] shrink-0" />
                                            </Link>
                                            <div className='w-[350px]'>
                                                <h2 className="mb-2 text-[16px]">{product.name}</h2>
                                                <p className="text-primary font-bold text-[14px]">{product.price}<sup>đ</sup> <del className='ml-2 font-normal text-[12px] text-[#888888]'>{product.discount}<sup>đ</sup></del></p>
                                            </div>
                                            <div className="flex items-center ml-3">
                                                <button
                                                    type="button"
                                                    className="px-3 py-1 bg-gray-200 text-gray-700 rounded-l"
                                                >
                                                    -
                                                </button>
                                                <input
                                                    type="number"
                                                    className="px-3 py-1 bg-white border-t border-b border-gray-200 w-[50px] appearance-none text-center border-none"
                                                    value={cart.quantity}
                                                />
                                                <button
                                                    type="button"
                                                    className="px-3 py-1 bg-gray-200 text-gray-700 rounded-r"
                                                >
                                                    +
                                                </button>
                                            </div>
                                            {/* thanh tien */}
                                            <div>
                                                <p className="text-primary font-bold text-main">{product.price * cart.quantity} <sup>đ</sup></p>
                                            </div>
                                            <button onClick={() => removeCart(cart._id!)} type="button">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="4"
                                                    stroke="currentColor"
                                                    className="w-5 h-5 text-gray-500"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M6 18L18 6M6 6l12 12"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </> : ""
                            )}

                        </>
                    }) : ""}

                    <div className="items-baseline  py-4 flex-1 text-right border-t-2">
                        <span className="text-[16px] mr-3">Tổng tiền:</span>
                        <span className="text-main text-[20px] font-bold float-right">{totalMoney}đ</span>
                    </div>
                </form>
                {/* button */}
                <div className="flex-1 ml-auto my-8">
                    <div className="flex items-center">
                        <Link
                            to=""
                            className="bg-primary rounded-full text-main flex items-center border gap-1 py-3 px-5 font-bold hover:text-main hover:bg-white hover:border-main"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
                                />
                            </svg>
                            Tiếp tục mua hàng
                        </Link>
                        <Link
                            to="/checkout"
                            className="bg-primary rounded-full text-main flex items-center border gap-1 ml-5 py-3 px-5 font-bold hover:text-main hover:bg-white hover:border-main"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M4.5 12.75l6 6 9-13.5"
                                />
                            </svg>
                            Tiến hành thanh toán
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
