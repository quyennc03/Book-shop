import * as yup from "yup"

export const categorySchema = yup.object({
    name: yup.string().min(1).trim("Trường tên không được để trống").required("Tên bắt buộc phải nhập")
})

export type categoryForm = yup.InferType<typeof categorySchema>