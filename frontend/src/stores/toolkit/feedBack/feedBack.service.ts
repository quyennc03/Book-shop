import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IFeedBack } from "./feedBack.interface"
import { feedBackForm } from "../../../Schemas/feedBack/feedback"

const feedBackApi = createApi({
    reducerPath: "feedBacks",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080/api"
    }),
    tagTypes: ["feedBack"],
    endpoints: (builer) => ({
        listFeedBack: builer.query<IFeedBack[], void>({
            query: () => "/feedBack",
            providesTags: ["feedBack"]
        }),
        deleteFeedBack: builer.mutation({
            query: (id) => ({
                method: "DELETE",
                url: "/feedBack/" + id
            }),
            invalidatesTags: ["feedBack"]
        }),
        addFeedBack: builer.mutation<feedBackForm[], feedBackForm>({
            query: (feedBack) => ({
                method: "POST",
                url: "/feedBack",
                body: feedBack
            }),
            invalidatesTags: ["feedBack"]
        }),
        updateFeedBack: builer.mutation({
            query: ({ id, ...feedBack }) => ({
                method: "PATCH",
                url: "/feedBack/" + id,
                body: feedBack
            }),
            invalidatesTags: ["feedBack"]
        }),
    })
})
export const { useListFeedBackQuery, useDeleteFeedBackMutation, useUpdateFeedBackMutation, useAddFeedBackMutation } = feedBackApi

export default feedBackApi