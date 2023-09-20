import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { productForm, productSchema } from '../../../Schemas/product/product'
import { yupResolver } from '@hookform/resolvers/yup/src/yup.js'
import { Dispatch } from 'redux'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { RootState } from '../../../stores/toolkit'
import { useFetchListCategoryQuery } from '../../../stores/toolkit/category/category.service'
import { listCategorySlice } from '../../../stores/toolkit/category/categorySlice'
import { useAddProductMutation, useFetchOneProductQuery, useUpdateProductMutation } from '../../../stores/toolkit/product/product.service'
const UpdateProduct = () => {
    const dispatch: Dispatch<any> = useDispatch()
    const { id } = useParams()
    const { data: categories, isSuccess } = useFetchListCategoryQuery()
    const [onUpdate] = useUpdateProductMutation()
    const categoryState = useSelector((state: RootState) => state.categorySlice)
    const navigate = useNavigate();
    const { data: fetOneProduct } = useFetchOneProductQuery(id)
    useEffect(() => {
        if (isSuccess) {
            dispatch(listCategorySlice(categories))
        }
    }, [isSuccess])
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors }
    } = useForm<productForm>({
        resolver: yupResolver(productSchema)
    })
    const onUpdateProduct = async (product: productForm) => {
        try {
            if (id) {
                await onUpdate({ id, ...product })
                alert("cap nhat thanh cong san pham")
                navigate("/admin")
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        if (fetOneProduct) {
            setValue("name", fetOneProduct.name)
            setValue("price", fetOneProduct.price)
            setValue("discount", fetOneProduct.discount)
            setValue("image", fetOneProduct.image)
            setValue("author", fetOneProduct.author)
            setValue("thumbnail", fetOneProduct.thumbnail)
            setValue("description", fetOneProduct.description)
            setValue("categoryId", fetOneProduct.categoryId?._id)
        }
    }, [setValue, fetOneProduct])


    return (
        <div className="">
            <Link
                to={"/admin/product"}
                className="px-5 py-4 font-medium text-white bg-green-500 rounded-lg shadow-lg shadow-green-500/50"
            >
                List product
            </Link>
            <h1 className="mb-10 text-3xl font-medium text-center text-white">
                Thông tin sản phẩm
            </h1>
            <form onSubmit={handleSubmit(onUpdateProduct)}>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label
                            htmlFor="name"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Tên sản phẩm
                        </label>
                        <input
                            {...register("name")}
                            type="text"
                            id="name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Tên sản phẩm"
                        />
                        <p className='text-red-600 italic'>{errors ? errors.name?.message : ""}</p>
                    </div>
                    <div>
                        <label
                            htmlFor="image"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Ảnh sản phẩm
                        </label>
                        <input
                            {...register("image")}
                            type="text"
                            id="image"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                        <p className='text-red-600 italic'>{errors ? errors.image?.message : ""}</p>

                    </div>
                    <div>
                        <label
                            htmlFor="price"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Price
                        </label>
                        <input
                            {...register("price")}
                            type="number"
                            id="price"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Price"
                        />
                        <p className='text-red-600 italic'>{errors ? errors.price?.message : ""}</p>
                    </div>
                    <div>
                        <label
                            htmlFor="price"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Discount
                        </label>
                        <input
                            {...register("discount")}
                            type="number"
                            id="price"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Discount"
                        />
                        <p className='text-red-600 italic'>{errors ? errors.discount?.message : ""}</p>
                    </div>
                    <div>
                        <label
                            htmlFor="price"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Author
                        </label>
                        <input
                            {...register("author")}
                            type="text"
                            id="Author"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Author"
                        />
                        <p className='text-red-600 italic'>{errors ? errors.author?.message : ""}</p>
                    </div>
                    <div>
                        <label
                            htmlFor="price"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Thumbnail
                        </label>
                        <input
                            {...register("thumbnail")}
                            type="text"
                            // onChange={(e) => setImage(e.target.files[0])}
                            id="Thumbnail"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Thumbnail"
                        />
                        <p className='text-red-600 italic'>{errors ? errors.thumbnail?.message : ""}</p>
                    </div>
                    <div>
                        <label
                            htmlFor="origin"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Danh mục
                        </label>
                        <select
                            {...register("categoryId")}
                            id="categoryId"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                            <option>Choose a category</option>
                            {categoryState?.categories?.map((category, index) => (
                                <option key={index} value={category._id}>{category.name}</option>
                            ))}
                        </select>
                        <p className='text-red-600 italic'>{errors ? errors.categoryId?.message : ""}</p>
                    </div>
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="message"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Description
                    </label>
                    <textarea
                        {...register("description")}
                        id="description"
                        className="block p-2.5 h-52 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="description..."
                    ></textarea>
                    <p className='text-red-600 italic'>{errors ? errors.description?.message : ""}</p>
                </div>
                <button
                    type="submit"
                    className="w-full px-5 py-3 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 sm:w-auto dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                    Update product
                </button>
            </form>
        </div>
    )
}

export default UpdateProduct
