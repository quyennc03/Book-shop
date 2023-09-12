import joi from "joi"

export const UserVoucherSchema = joi.object(
    {
        UserId: joi.string().required(),
        VoucherId: joi.string().required(),
    }
)