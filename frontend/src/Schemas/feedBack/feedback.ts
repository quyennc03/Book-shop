import * as yup from "yup"

export const feedBackSchema = yup.object({
    userId: yup.string().required("Trường userId là bắt buộc"),
    productId: yup.string().required("Trường productId là bắt buộc"),
    comment: yup.string().required("Trường comment là bắt buộc"),
    status: yup.number().required(),
})

export type feedBackForm = yup.InferType<typeof feedBackSchema>