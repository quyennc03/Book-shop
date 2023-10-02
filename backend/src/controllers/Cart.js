import Cart from "../models/Cart";
import User from "../models/User";
import { cartSchema } from "../schema/Cart"
export const create = async (req, res) => {
    try {
        const { error } = cartSchema.validate(req.body);
        if (error) {
            res.json({
                message: error.details[0].message,
            });
        }
        const cart = await Cart.create(req.body);
        if (!cart) {
            return res.status(404).json({
                message: "Order not found",
            });
        }
        await User.findByIdAndUpdate(cart.userId, {
            $addToSet: {
                carts: cart._id,
            },
        });
        return res.status(200).json({
            message: "cart created successfully",
            cart,
        });
    } catch (error) {
        return res.status(500).json({
            message: error,
        });
    }
};
// export const update = async (req, res) => {
//     try {
//         const { error } = cartSchema.validate(req.body);
//         if (error) {
//             res.json({
//                 message: error.details[0].message,
//             });
//         }
//         const cart = await Cart.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true });
//         if (!cart) {
//             return res.status(404).json({
//                 message: "Order not found",
//             });
//         }
//         await User.findByIdAndUpdate(cart.userId, {
//             $addToSet: {
//                 carts: cart._id,
//             },
//         });
//         return res.status(200).json({
//             message: "cart updated successfully",
//             cart,
//         });
//     } catch (error) {
//         return res.status(500).json({
//             message: error,
//         });
//     }
// };
export const remove = async (req, res) => {
    try {
        const cart = await Cart.findByIdAndDelete({ _id: req.params.id });
        if (!cart) {
            return res.status(404).json({
                message: "Order not found",
            });
        }
        await User.findByIdAndUpdate(cart.userId, {
            $addToSet: {
                carts: cart._id,
            },
        });
        return res.status(200).json({
            message: "cart removed successfully",
        });
    } catch (error) {
        return res.status(500).json({
            message: error,
        });
    }
};
export const getAll = async (req, res) => {
    try {
        const cart = await Cart.find();
        if (!cart) {
            return res.status(404).json({
                message: "Order not found",
            });
        }
        return res.status(200).json(
            cart,
        );
    } catch (error) {
        return res.status(500).json({
            message: error,
        });
    }
};
export const getById = async (req, res) => {
    try {
        const cart = await Cart.findById({ _id: req.params.id });
        if (!cart) {
            return res.status(404).json({
                message: "Order not found",
            });
        }
        return res.status(200).json(
            cart,
        );
    } catch (error) {
        return res.status(500).json({
            message: error,
        });
    }
};
export const update = async (req, res) => {
    try {
        const cart = await Cart.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
        if (!cart) {
            return res.status(404).json({
                message: "Order not found",
            });
        }
        return res.status(200).json(
            cart,
        );
    } catch (error) {
        return res.status(500).json({
            message: error,
        });
    }
};
export const getByUser = async (req, res) => {
    try {
        const user = await User.findById({ _id: req.params.id });
        if (!user) {
            return res.status(404).json({
                message: "user not found",
            });
        }
        const carts = await Cart.find({ userId: user._id })
        return res.status(200).json(
            carts,
        );
    } catch (error) {
        return res.status(500).json({
            message: error,
        });
    }
};

