import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IOrder } from "./order.interface"
import { formOrder } from "../../../Schemas/order/order"

const orderApi = createApi({
    reducerPath: "orders",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080/api"
    }),
    tagTypes: ["order"],
    endpoints: (builer) => ({
        fetchListOrder: builer.query<IOrder[], IOrder>({
            query: () => "/orders",
            providesTags: ["order"]
        }),
        fetchOneOrder: builer.query({
            query: (id) => "/orders/" + id,
            providesTags: ["order"]
        }),
        fetchAllUserOrder: builer.query({
            query: (id) => "/user_orders/" + id,
            providesTags: ["order"]
        }),
        addOrder: builer.mutation<formOrder[], formOrder>({
            query: (order) => ({
                url: "/orders",
                method: "POST",
                body: order
            }),
            invalidatesTags: ["order"]
        }),
        updateOrder: builer.mutation<IOrder[], IOrder>({
            query: ({ _id, ...order }) => ({
                url: "/orders/" + _id,
                method: "PATCH",
                body: order
            }),
            invalidatesTags: ["order"]
        }),
    })
})

export const { useFetchListOrderQuery, useAddOrderMutation, useUpdateOrderMutation } = orderApi

export default orderApi