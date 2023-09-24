import Order from "../models/Order";
import User from "../models/User";
import { orderSchema } from "../schema/Order"
export const create = async (req, res) => {
    try {
        const { error } = orderSchema.validate(req.body);
        if (error) {
            res.json({
                message: error.details[0].message,
            });
        }
        const order = await Order.create(req.body);
        if (!order) {
            return res.status(404).json({
                message: "Order not found",
            });
        }
        await User.findByIdAndUpdate(order.userId, {
            $addToSet: {
                orders: order._id,
            },
        });

        return res.status(200).json({
            message: "Order created successfully",
            data: order,
        });
    } catch (error) {
        return res.status(500).json({
            message: error,
        });
    }
};
export const getAll = async (req, res) => {
    try {
        const order = await Order.find();
        if (!order) {
            return res.status(404).json({
                message: "Order not found",
            });
        }
        return res.status(200).json(
            order
        );
    } catch (error) {
        return res.status(500).json({
            message: error,
        });
    }
};
export const getByUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({
                message: "user not found",
            });
        }
        const orders = await Order.find({ userId: user._id })
        console.log(orders);
        // if (orders == 0) {
        //     return res.status(404).json({
        //         message: "Khong co don hang nao",
        //     });
        // }
        return res.status(200).json(
            orders
        );
    } catch (error) {
        return res.status(500).json({
            message: error,
        });
    }
};
export const getById = async (req, res) => {
    try {
        const order = await Order.findById({ _id: req.params.id });
        if (!order) {
            return res.status(404).json({
                message: "order not found",
            });
        }
        return res.status(200).json(
            order,
        );
    } catch (error) {
        return res.status(500).json({
            message: error,
        });
    }
};
export const update = async (req, res) => {
    try {
        const order = await Order.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true });
        if (!order) {
            return res.status(404).json({
                message: "order not found",
            });
        }
        return res.status(200).json({
            message: "updated order",
            order,
        });
    } catch (error) {
        return res.status(500).json({
            message: error,
        });
    }
};