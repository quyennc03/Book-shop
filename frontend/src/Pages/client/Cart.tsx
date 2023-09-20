import React from 'react'
import { Link } from "react-router-dom"
const Cart = () => {
    return (
        <div className='container'>
            <h1 className="uppercase mt-11 text-lg">Giỏ hàng của bạn</h1>
            <div className="bg-white flex justify-between px-2 py-3 rounded-lg font-bold">
                <p className='font-bold'>(2 Sản phẩm)</p>
                <div></div>
                <div className=""></div>
                <div className=""></div>
                <p className='mr-5'>Số lượng</p>
                <p className='mr-5'>Thành tiền</p>
                <div className=""></div>
            </div>
            <div className="my-3 bg-white px-3 py-1 rounded-lg flex flex-col">
                <form className='flex flex-col'>
                    <div className="px-3 py-5 flex justify-between items-center border-gray-200">
                        <Link to={`/productDetail`}>
                            <img src="../../public/images/sanpham1.jpg" className="w-[98px] h-[98px]" />
                        </Link>
                        <div>
                            <h2 className="mb-2 text-[16px]">Thay Đổi Cuộc Sống Với Nhân Số Học</h2>
                            <p className="text-primary font-bold text-[14px]">173.600 <sup>đ</sup> <del className='ml-2 font-normal text-[12px] text-[#888888]'>248.000 <sup>đ</sup></del></p>
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
                                value={2}
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
                            <p className="text-primary font-bold text-main">173.600 <sup>đ</sup></p>
                        </div>
                        <button type="button">
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
                    <div className="items-baseline  py-4 flex-1 text-right border-t-2">
                        <span className="text-[16px] mr-3">Tổng tiền:</span>
                        <span className="text-main text-[20px] font-bold float-right">173.600đ</span>
                    </div>
                </form>
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
