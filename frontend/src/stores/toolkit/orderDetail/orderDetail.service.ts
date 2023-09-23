import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { formOrder } from "../../../Schemas/order/order"
import { IOrderDetail } from "./orderDetail.interface"

const orderDetailApi = createApi({
    reducerPath: "orders",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080/api"
    }),
    tagTypes: ["orderDetail"],
    endpoints: (builer) => ({
        fetchOneOrderDetail: builer.query({
            query: (id) => "/orderDetail/" + id,
            providesTags: ["orderDetail"]
        }),
        addOrderDetail: builer.mutation<formOrder[], formOrder>({
            query: (orderDetail) => ({
                url: "/orderDetail",
                method: "POST",
                body: orderDetail
            }),
            invalidatesTags: ["orderDetail"]
        }),
    })
})

export const { useFetchOneOrderDetailQuery, useAddOrderDetailMutation } = orderDetailApi

export default orderDetailApi