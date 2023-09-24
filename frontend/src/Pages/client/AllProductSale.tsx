import React, { useState } from 'react'
import { useEffect } from "react"
import { Dispatch } from 'redux'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useFetchListCategoryQuery } from '../../stores/toolkit/category/category.service'
import { useFetchListProductQuery } from '../../stores/toolkit/product/product.service'
import { RootState } from '../../stores/toolkit'
import { listCategorySlice } from '../../stores/toolkit/category/categorySlice'
import { listProductCateSlice, listProductFilter, listProductSearchSlice } from '../../stores/toolkit/product/productSlice'
const AllProductSale = () => {

    const dispatch: Dispatch<any> = useDispatch()
    const { data: listCategory, isSuccess: isSuccessCategory, isLoading } = useFetchListCategoryQuery()
    const { data: listProduct, isSuccess } = useFetchListProductQuery()
    const [listProductCate, setListProductCate] = useState<string>(listProduct ? listProduct[0].categoryId : "")
    const categoryState = useSelector((state: RootState) => state.categorySlice.categories)
    const productState = useSelector((state: RootState) => state.productCategorySlice.products)
    const nameStore = JSON.parse(localStorage?.getItem("nameSearch")!)

    useEffect(() => {
        if (isSuccessCategory) {
            dispatch(listCategorySlice(listCategory))
        }

        if (isSuccess) {
            const listProductFilterSale = listProduct.filter((product) => product.discount !== 0)
            dispatch(listProductCateSlice(listProductFilterSale))
        }
    }, [isSuccessCategory, isSuccess])
    useEffect(() => {
        if (nameStore && isSuccess) {
            dispatch(listProductSearchSlice({ searchTerm: nameStore, products: listProduct }))
        }
    }, [nameStore, isSuccess])
    const handleCategory = (id: string) => {
        if (id && listProduct) {
            localStorage.removeItem("nameSearch")
            dispatch(listProductFilter({ categoryTerm: id, products: listProduct }))
        }
    }
    const allProduct = () => {
        if (listProduct) {
            dispatch(listProductFilter({ categoryTerm: "", products: listProduct }))
        }
    }
    useEffect(() => {
        const category = document.querySelectorAll(".category")
        category.forEach((cate) => {
            cate.addEventListener("click", () => {
                document.querySelector(".category.active")?.classList.remove("border-[#F7931E]", "text-[#F7931E]", "font-semibold")
                cate.classList.add("border-[#F7931E]", "text-[#F7931E]", "font-semibold")
            })
        });
    }, [])
    return (
        <div className='container'>
            <div className="mt-3">
                <div className="bg-[#FCDAB0] flex px-4 py-3 items-center">
                    <img className='w-[30px] h-[30px]' src="../../public/images/sale.png" alt="" />
                    <h1 className='font-bold uppercase text-lg ml-3'>Sản phẩm đang giảm giá</h1>

                </div>
                <div className="bg-white overflow-hidden">
                    <div className="flex px-4 py-3 border-b-2">
                        <button onClick={allProduct} className='text-[16px] ml-3 category px-4 border border-1 cursor-pointer py-2 active'>Tất cả</button>
                        {categoryState.map((cate, index) => {
                            return <div onClick={() => handleCategory(cate._id!)} key={index} className="text-[16px] ml-3 category px-4 border border-1 cursor-pointer py-2 active">{cate.name}</div>
                        })}
                    </div>
                    <p className='text-center text-[18px] my-3'> {nameStore ? <p>Kết quả tìm kiếm của bạn là:{nameStore}</p> : ""}</p>
                    <div className="grid grid-cols-5 px-10 py-4 gap-5 min-h-[380px]">

                        {productState.map((product, index) => {
                            return <Link to={`/productDetail/${product._id}`} className='relative group hover:shadow-lg' key={index}>
                                <div className="h-[230px] overflow-hidden">
                                    <img className='w-full h-full object-cover group-hover:scale-110 transition-all ease-linear' src={product.image} alt="" />
                                </div>
                                <div className="p-3 flex flex-col justify-between h-[110px]">
                                    <h1 className='text-[14px] line-clamp-2'>{product.name}</h1>
                                    <div className="flex text-[16px] font-semibold py-2">
                                        <span className='text-red-600'>{product.price.toLocaleString("vi-VN")} <sup>đ</sup></span>
                                        <span className='text-[14px] font-normal  text-[#888888] ml-2'><del>{product.discount.toLocaleString("vi-VN")}</del> <sup>đ</sup></span>
                                    </div>
                                    <div className="rounded-lg font-bold">0 đã bán</div>
                                </div>
                                <div className="absolute top-2 left-2 rounded-[50%] py-2 px-2 font bg-main">
                                    <p className='text-white'>{product.price < product.discount ? ((product?.discount - product?.price) / product?.discount * 100).toFixed(0) : 0}%</p>
                                </div>
                            </Link>

                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllProductSale
