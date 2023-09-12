import joi from "joi"

export const voucherSchema = joi.object(
    {
        productId: joi.string().required(),
        title: joi.string().required(),
        voucherPrice: joi.number().required(),
        quantity: joi.number().required()
    }
)