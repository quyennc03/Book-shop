import mongoose from "mongoose"
const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    userVouchers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "UserVoucher"
        }
    ],
    role: {
        type: String,
        default: "member"
    },

}, { timestamps: true, versionKey: false })

export default mongoose.model("User", userSchema)