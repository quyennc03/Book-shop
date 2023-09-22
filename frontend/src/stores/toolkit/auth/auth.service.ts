import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IUser } from "./auth.interface"
import { signinForm, signupForm } from "../../../Schemas/auth/Auth"

const authApi = createApi({
    reducerPath: "auth",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080/api"
    }),
    tagTypes: ["user"],
    endpoints: (builer) => ({
        singup: builer.mutation<signupForm[], signupForm>({
            query: (user) => ({
                method: "POST",
                url: "/signup",
                body: user
            })
        }),
        signin: builer.mutation<signinForm[], signinForm>({
            query: (user) => ({
                method: "POST",
                url: "/signin",
                body: user
            })
        }),
        getListUser: builer.query<IUser[], void>({
            query: () => "/users"
        })
    })
})
export const { useSingupMutation, useSigninMutation, useGetListUserQuery } = authApi
export default authApi