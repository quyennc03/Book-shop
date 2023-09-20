import React from 'react'
import { Link } from "react-router-dom"
const Checkout = () => {
    return (
        <div className='container'>
            <form className="flex gap-[28px]">
                <div className="">
                    <Link
                        to="/"
                        className="text-3xl block text-primary font-semibold mb-5 mt-5"
                    >
                        Tea House
                    </Link>
                    <div className="flex gap-[28px]">
                        <div>
                            <div className="flex items-center gap-32 mb-3">
                                <h3 className="text-lg font-bold">Thông tin nhận hàng</h3>
                                <Link to="/signin" className="text-primary font-semibold">
                                    Đăng nhập
                                </Link>
                            </div>
                            <div>
                                <div className="mb-3">
                                    <input
                                        type="email"
                                        id="email"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                                        placeholder="Email"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        id="fullName"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                                        placeholder="Họ và tên"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        id="phoneNumber"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                                        placeholder="Số điện thoại"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        id="address"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                                        placeholder="Địa chỉ"
                                        required
                                    />

                                </div>
                                <div className="mb-3">
                                    <textarea
                                        id="note"
                                        rows={4}
                                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary focus:border-primary"
                                        placeholder="Ghi chú ..."
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="mb-6">
                                <div className="mb-3">
                                    <h3 className="text-lg font-bold">Vận chuyển</h3>
                                </div>
                                <div>
                                    <div className="flex w-[350px] justify-between mb-3 bg-gray-50 border border-gray-300 text-gray-900 p-3 text-sm rounded-lg focus:ring-primary focus:border-primary">
                                        <div className="flex gap-3 items-center">
                                            <input
                                                type="radio"
                                                className="bg-gray-50 border border-gray-300 text-primary text-sm rounded-full focus:ring-primary focus:border-primary block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                                                required
                                            />
                                            Giao hàng tận nơi
                                        </div>
                                        <span>40.000₫</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-l-[1px] py-5 pl-5 w-[410px]">
                    <h1 className="text-xl font-bold mb-5">Đơn hàng 1 sản phẩm</h1>
                    <div className="pt-7 border-t-[1px] border-b-[1px] pb-2">
                        <div className="mb-4 flex justify-between items-center">
                            <div className="flex gap-3 items-center">
                                <div className="border rounded-lg relative w-[55px] h-[55px]">
                                    <img src="../../public/images/sanpham1.jpg" className="w-[50px] h-[50px] rounded-lg" />
                                    <p className="w-5 h-5 bg-main absolute top-[-5px] right-[-5px] flex justify-center items-center text-sm text-white font-semibold rounded-full">
                                        1
                                    </p>
                                </div>
                                <h3 className="font-bold">Boku no hero</h3>
                            </div>
                            <p className="font-medium">12345₫</p>
                        </div>
                    </div>
                    <div className="py-5 flex gap-3 border-b-[1px]">
                        <input
                            type="text"
                            className="p-3 border rounded-lg w-full"
                            placeholder="Nhập mã giảm giá"
                        />
                        <button className="p-3 rounded-lg bg-main text-white font-medium min-w-[102px]">
                            Áp dụng
                        </button>
                    </div>
                    <div className="pt-7 pb-5 border-b-[1px]">
                        <div className="flex justify-between mb-4">
                            <span>Tạm tính:</span>
                            <span className="font-medium">179.000 <sup>đ</sup></span>
                        </div>
                        <div className="flex justify-between">
                            <span>Phí vận chuyển:</span>
                            <span className="font-medium">40.000₫</span>
                        </div>
                    </div>
                    <div className="flex justify-between mb-4 items-center pt-5">
                        <span className="text-lg font-semibold">Tổng cộng:</span>
                        <span className="text-primary text-2xl font-bold">170.000 <sup>đ</sup></span>
                    </div>
                    <div className="flex justify-between">
                        <Link
                            to="/cart"
                            className="text-primary font-medium text-sm flex items-center"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-4 h-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 19.5L8.25 12l7.5-7.5"
                                />
                            </svg>
                            <span>Quay về giỏ hàng</span>
                        </Link>
                        <button className=" bg-main text-white uppercase bg-primary px-4 py-3 rounded-lg min-w-[120px]">
                            Đặt hàng
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Checkout
