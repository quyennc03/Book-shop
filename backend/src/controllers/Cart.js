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