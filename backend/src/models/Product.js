import mongoose from "mongoose"
import mongoosePaginate from "mongoose-paginate-v2";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    discount: {
        type: Number
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    vouchers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Voucher"
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    deletedAt: {
        type: Date,
        default: null,
    },
    deleted: {
        type: Boolean,
        default: false,
    },

}, { timestamps: true, versionKey: false })
productSchema.plugin(mongoosePaginate);

export default mongoose.model("Product", productSchema)