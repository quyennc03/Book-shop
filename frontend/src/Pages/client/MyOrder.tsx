import React, { useEffect } from 'react'
import { useFetchAllUserOrderQuery, useFetchListOrderQuery, useUpdateOrderMutation } from '../../stores/toolkit/order/order.service'
import { Dispatch } from 'redux'
import { useDispatch } from 'react-redux'
import { listOrderById, listOrderSlice } from '../../stores/toolkit/order/orderSlice'
import { useSelector } from 'react-redux'
import { RootState } from '../../stores/toolkit'

const MyOrder = () => {
    const dispatch: Dispatch<any> = useDispatch()
    const userStore = JSON.parse(localStorage.getItem("user")!)
    const { data: listOrderUser, isSuccess: isSuccessOrder } = useFetchAllUserOrderQuery(userStore?._id)
    const orderState = useSelector((state: RootState) => state.orderSlice.orders)
    const [onUpdateOrder] = useUpdateOrderMutation()

    useEffect(() => {
        if (isSuccessOrder) {
            dispatch(listOrderSlice(listOrderUser))
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
    const remove = (id?: string) => {
        const cf = confirm('Bạn xác nhận muốn hủy đơn hàng này ?')
        if (cf == true) {
            try {
                const order = {
                    status: 0
                }
                dispatch(onUpdateOrder({ id: id, order: order }))
                alert("Đã hủy đơn hàng");
            } catch (error) {
                console.log(error);
            }
        }
    }
    const update = (id?: string) => {
        const cf = confirm('Bạn đã nhận được hàng chưa ?')
        if (cf == true) {
            try {
                const order = {
                    status: 4
                }
                dispatch(onUpdateOrder({ id: id, order: order }))
                alert("Đã nhận đơn hàng");
            } catch (error) {
                console.log(error);
            }
        }
    }
    return (
        <div className="container">
            <h1 className="uppercase mt-10 text-xl font-semibold">
                Đơn hàng của bạn
            </h1>
            <div className="mt-7 relative mb-10 overflow-x-auto">

                <table className="w-full text-sm font-medium border text-left text-gray-500 ">
                    <thead className="text-xs bg-primary text-white uppercase">
                        <tr className='bg-main'>

                            <th scope="col" className="px-6 py-3">
                                Người nhận
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Số điện thoại
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Địa chỉ
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Giá trị đơn hàng
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Trạng thái thanh toán
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {orderState.map((order, index) => {
                            return <tr key={index} className="bg-white border-b" >
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium whitespace-nowrap text-blue-500"
                                >
                                    {order.fullName}
                                </th>
                                <td className="px-6 py-4">{order.phoneNumber}</td>
                                <td className="px-6 py-4">{order.address}</td>
                                <td className="px-6 py-4 text-red-600">{order.totalMoney}đ</td>
                                <td className="px-6 py-4 text-yellow-500">
                                    {order.status == 1 && <button
                                        type="button"
                                        onClick={() => remove(order._id)}
                                        className="w-full mx-5 px-5 py-3 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        Hủy đơn hàng
                                    </button>}
                                    {order.status == 3 && <button
                                        type="button"
                                        onClick={() => update(order._id)}
                                        className="w-full buttonStatus mx-5 px-5 py-3 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        {OrderStatus(order.status)}
                                    </button>}
                                    {order.status != 3 && <button
                                        type="button"
                                        disabled={order.status != 3}
                                        className="w-full buttonStatus mx-5 px-5 py-3 text-sm font-medium text-center text-white bg-red-700 rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        {OrderStatus(order.status)}
                                    </button>}


                                </td>
                                {/* { order.status == 1 && <td className="px-6 py-4 text-yellow-500">Hủy</td> } */}
                            </tr>
                        })}

                    </tbody>
                </table>
            </div>
        </div >
    )
}

export default MyOrder
