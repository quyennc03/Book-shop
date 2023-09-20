import Product from "../models/product";
import Category from "../models/Category";
import { productSchema } from "../schema/Product";

export const create = async (req, res) => {
    try {
        const { error } = productSchema.validate(req.body)
        if (error) {
            res.json({
                message: error.details[0].message
            })
        }
        const product = await Product.create(req.body)
        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            })
        }
        await Category.findByIdAndUpdate(product.categoryId, {
            $addToSet: {
                products: product._id
            }
        });
        return res.status(200).json({
            message: "Product created successfully",
            data: product,
        });
    } catch (error) {
        console.log(error);
    }
}
export const update = async (req, res) => {
    try {
        const { error } = productSchema.validate(req.body)
        if (error) {
            res.json({
                message: error.details[0].message
            })
        }
        const product = await Product.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            })
        }
        await Category.findByIdAndUpdate(product.categoryId, {
            $addToSet: {
                products: product._id
            }
        });
        return res.status(200).json({
            message: "Product updated successfully",
            data: product,
        });
    } catch (error) {
        console.log(error);
    }
}
export const remove = async (req, res) => {
    try {
        const product = await Product.findOneAndDelete({ _id: req.params.id })
        await Category.findByIdAndUpdate(product.categoryId, {
            $addToSet: {
                products: product._id
            }
        });
        return res.status(200).json({
            message: "Product removed successfully",
        });
    } catch (error) {
        console.log(error);
    }
}
export const getAll = async (req, res) => {
    const {
        _page = 1,
        _litmit = 100,
        _sort = "createAt",
        _order = "desc",
        _search
    } = req.query
    const searchQuery = {};
    if (_search) {
        searchQuery.name = { $regex: _search, $options: "i" };
    }
    const options = {
        page: _page,
        litmit: _litmit,
        sort: {
            [_sort]: _order === "desc" ? "-1" : "1"
        }
    }
    try {
        const { docs: products } = await Product.paginate(searchQuery, options)
        if (!products) {
            return res.status(404).json({
                message: "Product not found"
            })
        }
        return res.status(200).json(
            products,
        );
    } catch (error) {
        console.log(error);
    }
}
export const getOne = async (req, res) => {
    try {
        const product = await Product.findById({ _id: req.params.id }).populate("categoryId", "vouchers")
        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            })
        }
        return res.status(200).json(
            product,
        );
    } catch (error) {
        console.log(error);
    }
}