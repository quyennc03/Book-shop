import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useFetchListOrderQuery } from '../../stores/toolkit/order/order.service'
import { useEffect, useState } from "react"
import { listOrderSlice } from '../../stores/toolkit/order/orderSlice'
import { Dispatch } from 'redux'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { RootState } from '../../stores/toolkit'
import { useFetchListCartQuery } from '../../stores/toolkit/cart/cart.service'
import { listCartSlice } from '../../stores/toolkit/cart/cartSlice'
import { useFetchListProductQuery } from '../../stores/toolkit/product/product.service'
import { listProductSlice } from '../../stores/toolkit/product/productSlice'
import { useAddOrderDetailMutation } from '../../stores/toolkit/orderDetail/orderDetail.service'
import { IOrderDetail } from '../../stores/toolkit/orderDetail/orderDetail.interface'
const Billconfirm = () => {
    const dispatch: Dispatch<any> = useDispatch()
    const { data: listOrder, isSuccess: isSuccessOrder } = useFetchListOrderQuery()
    const { data: listCart, isSuccess: isSuccessCart } = useFetchListCartQuery()
    const { data: listProduct, isSuccess } = useFetchListProductQuery()
    const [onAddOrderDetail] = useAddOrderDetailMutation()
    const orderState = useSelector((state: RootState) => state.orderSlice.orders)
    const cartState = useSelector((state: RootState) => state.cartSlice.carts)
    const navigate = useNavigate()
    const productState = useSelector((state: RootState) => state.productSlice.products)
    const [total, setTotal] = useState<number>(0)
    useEffect(() => {
        if (isSuccessOrder) {
            dispatch(listOrderSlice(listOrder))
        }
        if (isSuccessCart) {
            dispatch(listCartSlice(listCart))
        }
        if (isSuccess) {
            dispatch(listProductSlice(listProduct))
        }
    }, [isSuccessOrder, isSuccessCart, isSuccess])
    useEffect(() => {
        let count = 0
        cartState.map((cart) => {
            count += cart.price * cart.quantity
        })
        setTotal(count)
    }, [orderState])
    const addOrderDetail = () => {
        const lastOrder = orderState?.[orderState.length - 1]
        console.log(lastOrder);

        if (lastOrder) {
            const orderId = lastOrder?._id
            if (orderId) {
                cartState?.map(async (cart, index) => {
                    const orderDetail: IOrderDetail = {
                        orderId: orderId,
                        productId: cart.productId,
                        price: cart.price,
                        quantity: cart.quantity,
                    }
                    await onAddOrderDetail(orderDetail)
                    navigate("/myOrder")
                })
            }
        }
    }
    return (
        <div className="container">
            <Link
                to="/"
                className="text-3xl font-semibold text-primary mt-7 mb-7 block"
            >
                Tea House
            </Link>
            <div className="flex gap-[42px]">
                <React.Fragment>
                    <div className='bg-white p-4'>
                        <div className="flex gap-5 mb-7 items-center ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="72px" height="72px">
                                <g fill="none" stroke="#8EC343" strokeWidth="2">
                                    <circle
                                        cx="36"
                                        cy="36"
                                        r="35"
                                        style={{
                                            strokeDasharray: "240px, 240px",
                                            strokeDashoffset: "480px",
                                        }}
                                    ></circle>
                                    <path
                                        d="M17.417,37.778l9.93,9.909l25.444-25.393"
                                        style={{
                                            strokeDasharray: "50px, 50px",
                                            strokeDashoffset: "0px",
                                        }}
                                    ></path>
                                </g>
                            </svg>
                            <div>
                                <h2 className="text-lg font-bold mb-2">Cảm ơn bạn đã đặt hàng</h2>
                                <p className="mb-1">
                                    Một email xác nhận đã được gửi tới {orderState[orderState.length - 1]?.email}
                                </p>
                                <p>Xin vui lòng kiểm tra email của bạn</p>
                            </div>
                        </div>
                        <div className="border p-5">
                            <div className="flex gap-[90px] mb-7">
                                <div>
                                    <h2 className="text-2xl font-medium mb-2">
                                        Thông tin mua hàng
                                    </h2>
                                    <p className="mb-3">{orderState[orderState.length - 1]?.fullName}</p>
                                    <p className="mb-3">{orderState[orderState.length - 1]?.email}</p>
                                    <p><span className='text-black font-bold'>Note</span>:{orderState[orderState.length - 1]?.note}</p>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-medium mb-2">Thông tin nhận hàng</h2>
                                    <p className="mb-3">{orderState[orderState.length - 1]?.fullName}</p>
                                    <p className="mb-3">
                                        {orderState[orderState.length - 1]?.address}
                                    </p>
                                    <p>{orderState[orderState.length - 1]?.phoneNumber}</p>

                                </div>
                            </div>
                            <div className="flex gap-[90px]">
                                <div>
                                    <h2 className="text-2xl font-medium mb-2">
                                        Phương thức thanh toán
                                    </h2>
                                    <p className="">Thanh toán khi giao hàng (COD)</p>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-medium mb-2">
                                        Phương thức vận chuyển
                                    </h2>
                                    <p className="">Giao hàng tận nơi</p>
                                </div>
                            </div>
                            <div></div>
                        </div>
                    </div>
                    {/* Các phần còn lại của mã bạn muốn hiển thị cho mỗi order */}
                </React.Fragment>

                <div className="shadow-lg bg-white rounded-lg w-[470px] p-5">
                    <span className="font-semibold mb-5 block">Đơn hàng #1042 (3)</span>

                    {cartState.map((cart, index) => {
                        return <div key={index}>
                            {productState?.map((product, index) =>
                                product._id == cart.productId ?
                                    <div key={index}>
                                        <div className="mb-4 border-b-[1px] pb-4 flex justify-between items-center relative">
                                            <div className="flex gap-3 items-center" >
                                                <div className="border rounded-lg relative w-[55px] h-[55px]">
                                                    <img src={product.image} className="w-[50px] h-[50px] rounded-lg relative" />
                                                    <p className='px-2 py-1 bg-[#ccc] absolute text-white rounded-[50%] top-[-10px] right-[-10px]'>{cart.quantity}</p>
                                                </div>
                                                <div className="flex flex-col">
                                                    <div className="font-bold relative">{product.name}</div>
                                                    <p className="w-5 h-5 bg-primary flex justify-center items-center text-sm text-black rounded-full ml-4">
                                                        {product.price}
                                                    </p>
                                                </div>
                                            </div>
                                            <p className="font-medium">{cart.price}₫</p>
                                        </div>
                                    </div>
                                    : ""
                            )}
                        </div>
                    })}

                    <div className="border-b-[1px]">
                        <div className="mb-4 flex justify-between">
                            <span>Tạm tính:</span>
                            <span className="font-semibold">{total}đ</span>
                        </div>
                        <div className="mb-4 flex justify-between">
                            <span>Phí vận chuyển:</span>
                            <span className="font-semibold">40.000₫</span>
                        </div>
                    </div>
                    <div className="flex justify-between mt-5">
                        <span className="text-xl font-semibold">Tổng cộng:</span>
                        <span className="text-2xl font-semibold text-primary">
                            {total + 40000}đ
                        </span>
                    </div>
                </div>
            </div>
            <div className="mt-3">
                <button onClick={() => addOrderDetail()} className="text-white uppercase bg-main p-4 rounded-lg min-w-[120px]">
                    Trang chủ
                </button>
                <button onClick={() => addOrderDetail()} className="text-white uppercase bg-main p-4 rounded-lg min-w-[120px] ml-3">
                    Đơn hàng của bạn
                </button>
            </div>
            {/* <button onClick={addOrderDetail}>Đơn hàng của bạn</button>
            <button onClick={addOrderDetail}>Trang chủ</button> */}
        </div>
    )
}

export default Billconfirm
