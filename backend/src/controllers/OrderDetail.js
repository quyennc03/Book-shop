import User from "../models/User";
import { orderDetailSchema } from "../schema/OrderDetail"
import OrderDetail from "../models/OrderDetail"
import Order from "../models/Order"
import product from "../models/product";
export const create = async (req, res) => {
    try {
        const { error } = orderDetailSchema.validate(req.body);
        if (error) {
            res.json({
                message: error.details[0].message,
            });
        }
        const orderDetail = await OrderDetail.create(req.body);
        if (!orderDetail) {
            return res.status(404).json({
                message: "OrderDefault not found",
            });
        }
        await Order.findByIdAndUpdate(orderDetail.orderId, {
            $addToSet: {
                orderDetails: orderDetail._id,
            },
        });
        await product.findByIdAndUpdate(orderDetail.productId, {
            $addToSet: {
                orderDetails: orderDetail._id
            }
        })
        return res.status(200).json({
            message: "Order created successfully",
            orderDetail,
        });
    } catch (error) {
        return res.status(500).json({
            message: error,
        });
    }
};
export const getById = async (req, res) => {
    try {
        // const order = await Order.findById(req.params.id)
        // if (!order) {
        //     return res.status(404).json({
        //         message: "Khong tim thay order",
        //     });
        // }
        const orderDetail = await OrderDetail.findById({ _id: req.params.id });
        if (!orderDetail) {
            return res.status(404).json({
                message: "OrderDefault not found",
            });
        }
        return res.status(200).json({
            message: "Order found",
            orderDetail,
        });
    } catch (error) {
        return res.status(500).json({
            message: error,
        });
    }
};