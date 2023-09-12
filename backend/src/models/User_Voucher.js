import mongoose from "mongoose";

const voucherSchema = new mongoose.Schema(
    {
        userId: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            },
        ],
        voucherId: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Voucher"
            },
        ],
        save_date: {
            type: Date,
            default: Date.now
        }
    }
)

export default mongoose.model("UserVoucher", voucherSchema)