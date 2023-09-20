import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IProduct } from "./product.interface"
import { productForm } from "../../../Schemas/product/product"
export const productApi = createApi({
    reducerPath: "products",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/api" }),
    tagTypes: ["product"],
    endpoints: (builer) => ({
        fetchListProduct: builer.query<IProduct[], void>({
            query: () => `/products`,
            providesTags: ["product"]
        }),
        fetchOneProduct: builer.query({
            query: (id) => `/products/` + id,
            providesTags: ["product"]
        }),
        removeProduct: builer.mutation({
            query: (id) => ({
                url: "/products/" + id,
                method: "DELETE",
            }),
            invalidatesTags: ["product"]
        }),
        addProduct: builer.mutation<productForm[], productForm>({
            query: (product) => ({
                url: "/products",
                method: "POST",
                body: product
            }),
            invalidatesTags: ["product"]
        }),
        updateProduct: builer.mutation({
            query: ({ id, ...product }) => ({
                url: "/products/" + id,
                method: "PUT",
                body: product
            }),
            invalidatesTags: ["product"]
        }),
    })
})

export const { useFetchListProductQuery, useAddProductMutation, useUpdateProductMutation, useRemoveProductMutation, useFetchOneProductQuery } = productApi
export default productApi