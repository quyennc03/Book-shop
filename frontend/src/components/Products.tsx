import React, { useState } from 'react'
import { useEffect } from "react"
import { useFetchListCategoryQuery } from '../stores/toolkit/category/category.service'
import { Dispatch } from 'redux'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { RootState } from '../stores/toolkit'
import { listCategorySlice } from '../stores/toolkit/category/categorySlice'
import { useFetchListProductQuery } from '../stores/toolkit/product/product.service'
import { listProductCateSlice, listProductFilter } from '../stores/toolkit/product/productSlice'
import { Link } from 'react-router-dom'
const Products = () => {

    const dispatch: Dispatch<any> = useDispatch()
    const { data: listCategory, isSuccess: isSuccessCategory, isLoading } = useFetchListCategoryQuery()
    const { data: listProduct, isSuccess } = useFetchListProductQuery()
    const [listProductCate, setListProductCate] = useState<string>(listProduct ? listProduct[0].categoryId : "")
    const categoryState = useSelector((state: RootState) => state.categorySlice.categories)
    const productState = useSelector((state: RootState) => state.productCategorySlice.products)
    useEffect(() => {
        if (isSuccessCategory) {
            dispatch(listCategorySlice(listCategory))
        }
        if (isSuccess) {
            dispatch(listProductCateSlice(listProduct))
        }
    }, [isSuccessCategory, isSuccess])
    const handleCategory = (id: string) => {
        if (id && listProduct) {
            dispatch(listProductFilter({ categoryTerm: id, products: listProduct }))
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
                <div className="bg-white flex px-4 py-3 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                    </svg>
                    <h1 className='font-bold uppercase text-lg ml-3'>Danh mục sản phẩm</h1>
                </div>
                <div className="bg-white overflow-hidden">
                    <div className="flex px-4 py-3 border-b-2">
                        {categoryState.map((cate, index) => {
                            return <div onClick={() => handleCategory(cate._id!)} key={index} className="text-[16px] ml-3 category px-4 border border-1 cursor-pointer py-2 active">{cate.name}</div>
                        })}
                        {/* <div className="text-[16px] category px-4 border border-1 cursor-pointer py-2 ml-3">Hoạt hình</div>
                        <div className="text-[16px] category px-4 border border-1 cursor-pointer py-2 ml-3">Thiếu Nhi</div>
                        <div className="text-[16px] category px-4 border border-1 cursor-pointer py-2 ml-3">Tình cảm</div> */}
                    </div>
                    <div className="grid grid-cols-5 max-h-[732px] overflow-hidden px-10 py-4 gap-5 min-h-[380px]">
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
                    <button className='my-4 border boder-1 border-main text-main text-center ml-[50%] translate-x-[-50%] px-10 py-2 text-[16px] hover:bg-main hover:text-white transition-all ease-linear'><Link to="/all-category">Xem thêm</Link></button>
                </div>
            </div>
        </div>
    )
}

export default Products
