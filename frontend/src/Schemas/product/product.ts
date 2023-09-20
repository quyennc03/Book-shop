import * as yup from "yup"

export const productSchema = yup.object({
    name: yup.string().min(1).trim().required("Trường name bắt buộc nhập"),
    categoryId: yup.string().min(1).trim().required("Trường categoryId bắt buộc nhập"),
    price: yup.number().default(1).min(1).required("Trường price bắt buộc nhập"),
    discount: yup.number().default(0).min(0),
    author: yup.string().min(1).required("Trường author bắt buộc nhập"),
    description: yup.string().min(1).required("Trường description bắt buộc nhập"),
    image: yup.string().min(1).required("Trường image bắt buộc nhập"),
    thumbnail: yup.string().required("Trường thumbnail là bắt buộc"),
})

export type productForm = yup.InferType<typeof productSchema>