import joi from "joi"

export const cartSchema = joi.object(
    {
        userId: joi.string(),
        productId: joi.string().required(),
        price: joi.number().required(),
        quantity: joi.number().required(),
        totalMoney: joi.number().required(),
    }
)