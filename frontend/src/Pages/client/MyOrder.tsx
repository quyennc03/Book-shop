import React from 'react'

const MyOrder = () => {
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
                        <tr className="bg-white border-b" >
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium whitespace-nowrap text-blue-500"
                            >
                                aaaaa
                            </th>
                            <td className="px-6 py-4">123</td>
                            <td className="px-6 py-4">Bac Ninh</td>
                            <td className="px-6 py-4">234</td>
                            <td className="px-6 py-4 text-yellow-500">
                                <button
                                    type="submit"
                                    className="w-full mx-5 px-5 py-3 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                </button>
                                <button
                                    type="submit"
                                    className="w-full mx-5 px-5 py-3 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Đã nhận hàng
                                </button>
                            </td>
                            {/* { order.status == 1 && <td className="px-6 py-4 text-yellow-500">Hủy</td> } */}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div >
    )
}

export default MyOrder
