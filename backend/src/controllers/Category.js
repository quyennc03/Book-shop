import Product from "../models/product";
import Category from "../models/Category";
import { productSchema } from "../schema/Product";
import { categorySchema } from "../schema/Category";

export const create = async (req, res) => {
    try {
        const { error } = categorySchema.validate(req.body)
        if (error) {
            res.json({
                message: error.details[0].message
            })
        }
        const category = await Category.create(req.body)
        if (!category) {
            return res.status(404).json({
                message: "Category not found"
            })
        }
        return res.status(200).json({
            message: "Category created successfully",
            category,
        });
    } catch (error) {
        console.log(error);
    }
}
export const getOne = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id).populate("products")
        if (!category) {
            return res.status(404).json({
                message: "Category not found"
            })
        }
        return res.status(200).json(category);
    } catch (error) {
        console.log(error);
    }
}
export const getAll = async (req, res) => {
    try {
        const category = await Category.find()
        if (!category) {
            return res.status(404).json({
                message: "Category not found"
            })
        }
        return res.status(200).json(
            category);
    } catch (error) {
        console.log(error);
    }
}
export const remove = async (req, res) => {
    try {
        const category = await Category.findByIdAndDelete({ _id: req.params.id })
        if (!category) {
            return res.status(404).json({
                message: "Category not found"
            })
        }
        return res.status(200).json({
            message: "removed category"
        });
    } catch (error) {
        console.log(error);
    }
}
export const update = async (req, res) => {
    try {
        const category = await Category.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
        if (!category) {
            return res.status(404).json({
                message: "Category not found"
            })
        }
        return res.status(200).json({
            message: "updated category",
            category
        });
    } catch (error) {
        console.log(error);
    }
}