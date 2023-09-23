import * as yup from "yup"

export const orderSchema = yup.object({
    fullName: yup.string().required("Trường name là bắt buộc"),
    email: yup.string().email().required("Trường email là bắt buộc"),
    phoneNumber: yup.string().required("Trường số điện thoại là bắt buộc"),
    address: yup.string().required("Trường địa chỉ là bắt buộc"),
    note: yup.string().required("Trường ảnh là bắt buộc"),
    userId: yup.string()
})

export type formOrder = yup.InferType<typeof orderSchema>