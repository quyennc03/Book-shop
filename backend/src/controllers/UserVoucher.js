import User from "../models/User";
import UserVoucher from "../models/User_Voucher"
import Product from "../models/product";
import { UserVoucherSchema } from "../schema/User_Voucher"
export const create = async (req, res) => {
    try {
        const { error } = UserVoucherSchema.validate(req.body);
        if (error) {
            res.json({
                message: error.details[0].message
            })
        }
        const userVoucher = await UserVoucher.create(req.body)
        await User.findByIdAndUpdate(userVoucher.userId, {
            $addToSet: {
                userVouchers: userVoucher._id
            }
        })
        return res.status(201).json({
            message: "created userVoucher",
            userVoucher
        })
    } catch (error) {
        console.log(error);
    }
}
export const update = async (req, res) => {
    try {
        const { error } = UserVoucherSchema.validate(req.body);
        if (error) {
            res.json({
                message: error.details[0].message
            })
        }
        const userVoucher = await UserVoucher.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
        await User.findByIdAndUpdate(userVoucher.userId, {
            $addToSet: {
                userVouchers: userVoucher._id
            }
        })
        return res.status(201).json({
            message: "updated voucher",
            userVoucher
        })
    } catch (error) {
        console.log(error);
    }
}
export const getAll = async (req, res) => {
    try {
        const userVoucher = await UserVoucher.find()
        return res.status(201).json({
            message: "found userVouchers",
            userVoucher
        })
    } catch (error) {
        console.log(error);
    }
}