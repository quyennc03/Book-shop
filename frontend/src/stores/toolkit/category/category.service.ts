import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { ICategory } from "./category.interface"
import { categoryForm } from "../../../Schemas/category/category"

const categoryAPI = createApi({
    reducerPath: "categories",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080/api"
    }),
    tagTypes: ["category"],
    endpoints: (builer) => ({
        fetchListCategory: builer.query<ICategory[], void>({
            query: () => `/categories`,
            providesTags: ["category"]
        }),
        fetOneCategory: builer.query({
            query: (id) => `/categories/` + id,
            providesTags: ["category"]
        }),
        addCategory: builer.mutation({
            query: (category) => ({
                url: "/categories",
                method: "POST",
                body: category
            }),
            invalidatesTags: ["category"]
        }),
        deleteCategory: builer.mutation({
            query: (id) => ({
                url: "/categories/" + id,
                method: "DELETE",
            }),
            invalidatesTags: ["category"]
        }),
        updateCategory: builer.mutation({
            query: ({ id, ...category }) => ({
                url: `/categories/${id}`,
                method: "PUT",
                body: category
            }),
            invalidatesTags: ["category"]
        }),
    })
})

export const { useFetchListCategoryQuery, useFetOneCategoryQuery, useAddCategoryMutation, useDeleteCategoryMutation, useUpdateCategoryMutation } = categoryAPI
export default categoryAPI