import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { formOrder } from "../../../Schemas/order/order"
import { IOrderDetail } from "./orderDetail.interface"
import { formOrderDetail } from "../../../Schemas/orderDetail/orderDetail"

const orderDetailApi = createApi({
    reducerPath: "orderDetails",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080/api"
    }),
    tagTypes: ["orderDetail"],
    endpoints: (builer) => ({
        fetchOneOrderDetail: builer.query({
            query: (id) => "/orderDetail/" + id,
            providesTags: ["orderDetail"]
        }),
        fetchAllOrderDetail: builer.query<IOrderDetail[], void>({
            query: () => "/orderDetail",
            providesTags: ["orderDetail"]
        }),
        addOrderDetail: builer.mutation<IOrderDetail[], IOrderDetail>({
            query: (orderDetail) => ({
                url: "/orderDetail",
                method: "POST",
                body: orderDetail
            }),
            invalidatesTags: ["orderDetail"]
        }),
    })
})

export const { useFetchOneOrderDetailQuery, useAddOrderDetailMutation, useFetchAllOrderDetailQuery } = orderDetailApi

export default orderDetailApi