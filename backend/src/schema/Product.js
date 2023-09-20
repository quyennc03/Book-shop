import joi from 'joi'

export const productSchema = joi.object({
    name: joi.string().required().messages(
        {
            "string.empty": "Ten khong duoc bo trong",
            "any.required": "Truong ten bat buoc nhap"
        }
    ),
    price: joi.number().min(1).required().messages(
        {
            "string.empty": "price khong duoc bo trong",
            "any.required": "Truong price bat buoc nhap",
            "string.min": "price phai lon hon hoac bang 1",
        }
    ),
    discount: joi.number().min(1).messages({
        "string.empty": "discount khong duoc bo trong",
        "any.required": "Truong discount bat buoc nhap",
        "string.min": "discount phai lon hon hoac bang 1",
    }),
    description: joi.string().min(10).required().messages({
        "string.empty": "description khong duoc bo trong",
        "any.required": "Truong description bat buoc nhap",
        "string.min": "description phai lon hon hoac bang 10",
    }),
    author: joi.string().required().messages({
        "string.empty": "author khong duoc bo trong",
        "any.required": "Truong author bat buoc nhap"
    }),
    image: joi.string().required().messages({
        "string.empty": "image khong duoc bo trong",
        "any.required": "Truong image bat buoc nhap"
    }),
    thumbnail: joi.string().required().messages({
        "string.empty": "thumbnail khong duoc bo trong",
        "any.required": "Truong thumbnail bat buoc nhap"
    }),
    // thumbnail: joi.array().items
    //     (
    //         joi.string().required()
    //     ).required().messages({
    //         "string.empty": "thumbnail khong duoc bo trong",
    //         "any.required": "Truong thumbnail bat buoc nhap"
    //     }),
    categoryId: joi.string().required().messages({
        "string.empty": "categoryId khong duoc bo trong",
        "any.required": "Truong categoryId bat buoc nhap"
    }),
    createdAt: joi.date().default(() => new Date()),
    updatedAt: joi.date().default(() => new Date()),
    deletedAt: joi.date().default(null),
    deleted: joi.boolean().default(false),
})