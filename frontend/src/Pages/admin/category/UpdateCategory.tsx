import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { categoryForm, categorySchema } from '../../../Schemas/category/category'
import { yupResolver } from '@hookform/resolvers/yup'
import { useAddCategoryMutation, useFetOneCategoryQuery, useUpdateCategoryMutation } from '../../../stores/toolkit/category/category.service'
import { Dispatch } from 'redux'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { RootState } from '../../../stores/toolkit'
import { useEffect } from "react"
const UpdateCategory = () => {
    const dispatch: Dispatch<any> = useDispatch()
    const { id } = useParams()
    // const categoryState = useSelector((state: RootState) => state)
    const { data: getOneCategory } = useFetOneCategoryQuery(id)
    const [onUpdate] = useUpdateCategoryMutation()
    const navigate = useNavigate()
    // const [onAdd] = useAddCategoryMutation()
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors }
    } = useForm<categoryForm>(
        {
            resolver: yupResolver(categorySchema)
        }
    )
    useEffect(() => {
        if (getOneCategory) {
            setValue("name", getOneCategory.name)
        }
    }, [setValue, getOneCategory])
    const onAddCategory = async (category: categoryForm) => {
        try {
            if (id) {
                await onUpdate({ id, ...category })
                alert("update thành công")
                navigate("/admin/category")
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="">
            <Link
                to={"/admin/category"}
                className="px-5 py-4 font-medium text-white bg-green-500 rounded-lg shadow-lg shadow-green-500/50"
            >
                List category
            </Link>
            <h1 className="mb-10 text-3xl font-medium text-center text-white">
                Thông tin danh mục
            </h1>
            <form onSubmit={handleSubmit(onAddCategory)}>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label
                            htmlFor="name"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Tên danh mục
                        </label>
                        <input
                            {...register("name")}
                            type="text"
                            id="name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Tai nghe airpod"
                        />
                        <p className='text-red-600 italic pt-2'>{errors ? errors.name?.message : ''}</p>
                    </div>
                    {/* <div>
                        <label
                            htmlFor="image"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Ảnh danh mục
                        </label>
                        <input
                            type="text"
                            id="image"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    </div> */}
                </div>
                {/* <div className="mb-6">
                    <label
                        htmlFor="message"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Mô tả
                    </label>
                    <textarea
                        id="description_long"
                        className="block p-2.5 h-52 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Write your thoughts here..."
                    ></textarea>
                </div> */}
                <button
                    type="submit"
                    className="w-full px-5 py-3 text-sm font-medium text-center text-white bg-yellow-700 rounded-lg hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 sm:w-auto dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
                >
                    Update category
                </button>
            </form>
        </div>
    )
}

export default UpdateCategory
