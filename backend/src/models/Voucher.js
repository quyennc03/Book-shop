import mongoose from "mongoose";

const voucherSchema = new mongoose.Schema(
    {
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product"
        },
        title: {
            type: String,
            required: true
        },
        voucherPrice: {
            type: Number,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },
        expiration_date: {
            type: Date,
            default: Date.now
        }
    }
)

export default mongoose.model("Voucher", voucherSchema)