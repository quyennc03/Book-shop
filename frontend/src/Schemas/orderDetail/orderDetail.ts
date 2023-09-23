import * as yup from "yup"

export const orderDetailSchema = yup.object({
    orderId: yup.string().required(),
    productId: yup.string().required(),
    price: yup.number().required(),
    quantity: yup.number().required(),
    totalMoney: yup.number().required()
})

export type formOrderDetail = yup.InferType<typeof orderDetailSchema>