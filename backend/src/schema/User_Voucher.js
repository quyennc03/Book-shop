import joi from "joi"

export const UserVoucherSchema = joi.object(
    {
        userId: joi.string().required(),
        voucherId: joi.string().required(),
    }
)