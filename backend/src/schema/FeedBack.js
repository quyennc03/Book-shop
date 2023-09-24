import joi from "joi"

export const feedBackSchema = joi.object({
    userId: joi.string().required(),
    productId: joi.string().required(),
    comment: joi.string().required(),
    status: joi.number(),
})