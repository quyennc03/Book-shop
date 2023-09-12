import Voucher from "../models/Voucher"
import Product from "../models/product";
import { voucherSchema } from "../schema/Voucher"
export const create = async (req, res) => {
    try {
        const { error } = voucherSchema.validate(req.body);
        if (error) {
            res.json({
                message: error.details[0].message
            })
        }
        const voucher = await Voucher.create(req.body)
        await Product.findByIdAndUpdate(voucher.productId, {
            $addToSet: {
                vouchers: voucher._id
            }
        })
        return res.status(201).json({
            message: "created voucher",
            voucher
        })
    } catch (error) {
        console.log(error);
    }
}
export const update = async (req, res) => {
    try {
        const { error } = voucherSchema.validate(req.body);
        if (error) {
            res.json({
                message: error.details[0].message
            })
        }
        const voucher = await Voucher.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
        await Product.findByIdAndUpdate(voucher.productId, {
            $addToSet: {
                vouchers: voucher._id
            }
        })
        return res.status(201).json({
            message: "updated voucher",
            voucher
        })
    } catch (error) {
        console.log(error);
    }
}
export const getAll = async (req, res) => {
    try {
        const voucher = await Voucher.find()
        return res.status(201).json({
            message: "found vouchers",
            voucher
        })
    } catch (error) {
        console.log(error);
    }
}