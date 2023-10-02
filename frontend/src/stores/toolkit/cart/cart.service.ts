import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { ICart } from "./cart.interface"

const cartApi = createApi({
    reducerPath: "carts",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080/api"
    }),
    tagTypes: ["cart"],
    endpoints: (builer) => ({
        fetchListCart: builer.query<ICart[], void>({
            query: () => `/carts`,
            providesTags: ["cart"]
        }),
        fetchCartByUser: builer.query<ICart[], void>({
            query: (id) => `/getByUser/${id}`,
            providesTags: ["cart"]
        }),
        addCart: builer.mutation({
            query: (cart) => ({
                method: "POST",
                url: "/carts",
                body: cart
            }),
            invalidatesTags: ["cart"]
        }),
        removeCart: builer.mutation({
            query: (id) => ({
                method: "DELETE",
                url: "/carts/" + id,
            }),
            invalidatesTags: ["cart"]
        }),
        fetchOneCart: builer.query<ICart[], ICart>({
            query: (id) => ({
                method: "GET",
                url: "/carts/" + id,
            }),
            providesTags: ["cart"]
        }),
        updateCart: builer.mutation({
            query: ({ id, ...cart }) => ({
                method: "PATCH",
                url: "carts/" + id,
                body: cart,

            }),
            invalidatesTags: ["cart"]
        })
    })
})


export const { useAddCartMutation, useRemoveCartMutation, useFetchListCartQuery, useFetchOneCartQuery, useFetchCartByUserQuery, useUpdateCartMutation } = cartApi

export default cartApi