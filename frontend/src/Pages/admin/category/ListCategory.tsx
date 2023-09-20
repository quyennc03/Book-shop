import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useFetchListProductQuery } from '../../../stores/toolkit/product/product.service'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { RootState } from '../../../stores/toolkit'
import { listProductSlice } from '../../../stores/toolkit/product/productSlice'
import { Dispatch } from 'redux'
import { useDeleteCategoryMutation, useFetchListCategoryQuery } from '../../../stores/toolkit/category/category.service'
import { deleteCategorySlice, listCategorySlice } from '../../../stores/toolkit/category/categorySlice'

const ListCategory = () => {
    const dispatch: Dispatch<any> = useDispatch()
    const { id } = useParams()
    const [onRemove] = useDeleteCategoryMutation()
    const { data: listProduct, isLoading, isError, isSuccess } = useFetchListProductQuery()
    const { data: listCategory, isSuccess: isSuccessCategory } = useFetchListCategoryQuery()
    // const productState = useSelector((state: RootState) => state.productSlice.products)
    const categoryState = useSelector((state: RootState) => state.categorySlice.categories)
    useEffect(() => {
        // if (isSuccess) {
        //     dispatch(listProductSlice(listProduct))
        // }
        if (isSuccessCategory) {
            dispatch(listCategorySlice(listCategory))
        }
    }, [isSuccess, isSuccessCategory])
    if (isError) {
        return <>...isError</>
    }
    if (isLoading) {
        return <>...isLoading</>
    }

    const removeCategory = async (id: string) => {
        try {
            if (id) {
                await onRemove(id)
                dispatch(deleteCategorySlice(id))
                alert("Xóa thành công!")
            }
        } catch (error) {
            console.log(error);

        }
    }

    return (
        <div>
            <div className="flex items-center justify-between mb-5">
                <form className="w-[40%]" >
                    <label
                        htmlFor="default-search"
                        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                    >
                        Search
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg
                                aria-hidden="true"
                                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                ></path>
                            </svg>
                        </div>
                        <input
                            type="search"
                            id="name"
                            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search Mockups, Logos..."
                            required
                        />
                        <button
                            type="submit"
                            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Search
                        </button>
                    </div>
                </form>
                <Link
                    to={"/admin/add-category"}
                    className="px-5 py-4 font-medium text-white bg-indigo-500 rounded-lg shadow-lg shadow-indigo-500/50"
                >
                    Add Category
                </Link>
            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            {/* <th scope="col" className="px-6 py-3">
                                <span className="sr-only">Image</span>
                            </th> */}
                            <th scope="col" className="px-6 py-3">
                                ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {categoryState?.map((cate, index) => {
                            return <tr
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                                key={index}
                            >
                                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                    {index + 1}
                                </td>
                                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                    {cate.name}
                                </td>
                                <td className="px-6 py-4">
                                    <Link
                                        to={`/admin/update-category/${cate._id!}`}
                                        className="px-4 py-2 font-medium text-white rounded-md bg-cyan-500 shadow-cyan-500/50"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        onClick={() => removeCategory(cate._id!)}
                                        className="px-3 py-2 ml-3 font-medium text-white bg-red-500 rounded-md shadow-red-500/50"
                                    >
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListCategory
