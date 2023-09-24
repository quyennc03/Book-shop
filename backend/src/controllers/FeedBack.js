import FeedBack from "../models/FeedBack";
import { feedBackSchema } from "../schema/FeedBack";

export const getAll = async (req, res) => {
    try {
        const feedBack = await FeedBack.find()
        if (!feedBack) {
            return res.status(404).json({
                message: "feedBack not found"
            })
        }
        return res.status(200).json(
            feedBack,
        );
    } catch (error) {
        console.log(error);
    }
}

export const addFeedBack = async (req, res) => {
    try {
        const { error } = feedBackSchema.validate(req.body)
        if (error) {
            return res.status(404).json({
                message: error.details[0].message
            })
        }
        const feedBack = await FeedBack.create(req.body);
        return res.status(201).json({
            message: "Tao thanh cong feedback",
            feedBack
        })
    } catch (error) {
        console.log(error);
    }
}
export const updateFeedBack = async (req, res) => {
    try {
        const { error } = feedBackSchema.validate(req.body)
        if (error) {
            return res.status(404).json({
                message: error.details[0].message
            })
        }
        const feedBack = await FeedBack.findByIdAndUpdate({ _id: req.params.body }, req.body, { new: true });
        if (!feedBack) {
            return res.status(404).json({
                message: "khong tim thay feedback nay"
            })
        }
        return res.status(201).json({
            message: "cap nhat thanh cong",
            feedBack
        })
    } catch (error) {
        console.log(error);
    }
}
export const deleteFeedBack = async (req, res) => {
    try {
        const feedBack = await FeedBack.findByIdAndDelete(req.params.id);
        if (!feedBack) {
            return res.status(404).json({
                message: "khong tim thay feedback nay"
            })
        }
        return res.status(201).json({
            message: "xoa thanh cong feedback"
        })
    } catch (error) {
        console.log(error);
    }
}