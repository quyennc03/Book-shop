import React from 'react'
import { Link } from 'react-router-dom'
import { useFetchListOrderQuery } from '../../../stores/toolkit/order/order.service'
import { Dispatch } from 'redux'
import { useDispatch } from 'react-redux'
import { useEffect } from "react"
import { listOrderSlice } from '../../../stores/toolkit/order/orderSlice'
import { useSelector } from 'react-redux'
import { RootState } from '../../../stores/toolkit'
const ListOrder = () => {
    const dispatch: Dispatch<any> = useDispatch()
    const { data: listOrder, isSuccess: isSuccessOrder } = useFetchListOrderQuery()
    const orderState = useSelector((state: RootState) => state.orderSlice.orders)

    useEffect(() => {
        if (isSuccessOrder) {
            dispatch(listOrderSlice(listOrder))
        }
    }, [isSuccessOrder])
    const OrderStatus = (status: number): string => {
        let tt: string = ""
        switch (status) {
            case 0:
                tt = "Hủy"
                break
            case 1:
                tt = "Chờ xác nhận"
                break
            case 2:
                tt = "Đang chuẩn bị hàng"
                break
            case 3:
                tt = "Đang giao hàng"
                break
            case 4:
                tt = "Đã nhận hàng"
                break
        }
        return tt
    }
    return (
        <div>
            <div className="flex items-center justify-between mb-5">
                <form className="w-[40%]">
                    <label
                        htmlFor="default-search"
                        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                    >
                        Search
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg
                                aria-hidden="true"
                                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                ></path>
                            </svg>
                        </div>
                        <input
                            type="search"
                            id="default-search"
                            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search Mockups, Logos..."
                            required
                        />
                        <button
                            type="submit"
                            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Search
                        </button>
                    </div>
                </form>
            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Tên khách hàng
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Số điện thoại
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Địa chỉ
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Tổng tiền
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Trạng thái
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {orderState?.map((order, index) => {
                            return <tr key={index}
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                            >
                                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                    {order.fullName}
                                </td>
                                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                    {order.phoneNumber}
                                </td>
                                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                    {order.address}
                                </td>
                                <td className="px-6 py-4 max-w-[350px] whitespace-nowrap overflow-hidden text-ellipsis">
                                    {order.totalMoney}đ
                                </td>
                                <td className="px-6 py-4">{OrderStatus(order.status)}</td>
                                {/* <td className="px-6 py-4">{showOrderDetails(order._id)}</td> */}
                                {/* <td className="px-6 py-4">{order.origin}</td> */}
                                <td className="px-6 py-4">
                                    <Link
                                        to={`/admin/updateOrder/${order._id}`}
                                        className="px-4 py-2 font-medium text-white rounded-md bg-cyan-500 shadow-cyan-500/50"
                                    >
                                        View
                                    </Link>

                                </td>
                            </tr>
                        })}

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListOrder
