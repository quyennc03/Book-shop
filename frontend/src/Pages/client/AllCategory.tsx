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
import { InputNumber, List, Slider } from 'antd'
const AllCategory = () => {
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
            dispatch(listProductCateSlice(listProduct))
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
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);


    const handleResetPrice = () => {
        setMinPrice(0);
        setMaxPrice(0);
    };
    const handlePriceFilter = (min: number, max: number) => {
        setMinPrice(min);
        setMaxPrice(max);
    };
    const filteredProducts = productState.filter((product: any) => {
        // Lọc theo danh mục đã chọn
        // if (selectedCategories.length > 0 && !selectedCategories.includes(product.categoryId._id)) {
        //     return false;
        // }
        // Lọc theo giá
        // const productPrice = product.discount || 0;
        const productPrice = (product.discount === 0 ? product.price : product.discount);
        if ((minPrice > 0 && productPrice < minPrice) || (maxPrice > 0 && productPrice > maxPrice)) {
            return false;
        }
        return true;
    });
    const sortedProducts = [...filteredProducts];

    const [sortOption, setSortOption] = useState<Number>(1);
    switch (sortOption) {
        case 1:
            // Mới nhất
            sortedProducts.sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
            break;
        case 2:
            // Cũ nhất
            sortedProducts.sort((a: any, b: any) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
            break;
        case 3:
            // Giá: Tăng dần
            sortedProducts.sort((a: any, b: any) => a.discount - b.discount);
            break;
        case 4:
            // Giá: Giảm dần
            sortedProducts.sort((a: any, b: any) => b.discount - a.discount);
            break;
        case 5:
            // Tên: A - Z
            sortedProducts.sort((a: any, b: any) => a.title.localeCompare(b.title));
            break;
        case 6:
            // Tên: Z - A
            sortedProducts.sort((a: any, b: any) => b.title.localeCompare(a.title));
            break;
        default:
            break;
    }
    return (
        <div className='container'>
            <div className="overflow-hidden float-left rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
                <summary
                    className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition"
                >
                    <span className="text-sm font-medium"> Lọc theo giá </span>
                </summary>
                <div className="border-t border-gray-200 bg-white">
                    <header className="flex items-center justify-between p-4">
                        <span className="text-sm text-gray-700">Giá cao nhất 1,000,000đ</span>
                        <button
                            type="button"
                            className="text-sm text-gray-900 underline underline-offset-4"
                            onClick={handleResetPrice}
                        >
                            Reset
                        </button>
                    </header>
                    <ul className="space-y-1 border-t border-gray-200 p-4">
                        <li>
                            <label htmlFor="FilterPrice" className="inline-flex items-center gap-2">
                                <input
                                    name="FilterPrice"
                                    type="radio"
                                    id="FilterPrice"
                                    className="h-5 w-5 rounded border-gray-300"
                                    onChange={() => handlePriceFilter(0, 150000)}
                                    checked={minPrice >= 0 && maxPrice === 150000}
                                />

                                <span className="text-sm font-medium text-gray-700">
                                    0đ - 150,000đ
                                </span>
                            </label>
                        </li>
                        <li>
                            <label htmlFor="FilterPrice" className="inline-flex items-center gap-2">
                                <input
                                    name="FilterPrice"
                                    type="radio"
                                    id="FilterPrice"
                                    className="h-5 w-5 rounded border-gray-300"
                                    onChange={() => handlePriceFilter(150000, 300000)}
                                    checked={minPrice >= 150000 && maxPrice === 300000}
                                />

                                <span className="text-sm font-medium text-gray-700">
                                    150,000đ - 300,000đ
                                </span>
                            </label>
                        </li>
                        <li>
                            <label htmlFor="FilterPrice" className="inline-flex items-center gap-2">
                                <input
                                    name="FilterPrice"
                                    type="radio"
                                    id="FilterPrice"
                                    className="h-5 w-5 rounded border-gray-300"
                                    onChange={() => handlePriceFilter(300000, 450000)}
                                    checked={minPrice >= 300000 && maxPrice === 450000}
                                />

                                <span className="text-sm font-medium text-gray-700">
                                    300,000đ - 450,000đ
                                </span>
                            </label>
                        </li>
                        <li>
                            <label htmlFor="FilterPrice" className="inline-flex items-center gap-2">
                                <input
                                    name="FilterPrice"
                                    type="radio"
                                    id="FilterPrice"
                                    className="h-5 w-5 rounded border-gray-300"
                                    onChange={() => handlePriceFilter(450000, 1000000)}
                                    checked={minPrice === 450000 && 1000000 >= maxPrice}
                                />

                                <span className="text-sm font-medium text-gray-700">
                                    450,000đ trở lên
                                </span>
                            </label>
                        </li>

                    </ul>

                    <div className="border-t border-gray-200 p-4">
                        <div className="flex justify-between gap-4 items-center">
                            <InputNumber
                                formatter={(value) => ` ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                value={minPrice}
                                min={0}
                                onChange={(value: any) => setMinPrice(value)} />
                            <span className="text-gray-400 font-light text-sm">đến</span>
                            <InputNumber
                                formatter={(value) => ` ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                value={(maxPrice)}
                                min={0}
                                onChange={(value: any) => setMaxPrice(value)} />
                        </div>
                    </div>
                    <div className="px-4">
                        <Slider
                            range
                            min={0}
                            max={1000000}
                            step={1000}
                            tooltip={{ formatter: null }}
                            value={[minPrice, maxPrice]}
                            // defaultValue={[minPrice, maxPrice]}
                            onChange={(values: [number, number]) => {
                                setMinPrice(values[0]);
                                setMaxPrice(values[1]);
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="mt-3">
                <div className="bg-white flex px-4 py-3 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                    </svg>
                    <h1 className='font-bold uppercase text-lg ml-3'>Danh mục sản phẩm</h1>

                </div>
                <div className="bg-white overflow-hidden">
                    <div className="flex px-4 py-3 border-b-2">
                        <button onClick={allProduct} className='text-[16px] ml-3 category px-4 border border-1 cursor-pointer py-2 active'>Tất cả</button>
                        {categoryState.map((cate, index) => {
                            return <div onClick={() => handleCategory(cate._id!)} key={index} className="text-[16px] ml-3 category px-4 border border-1 cursor-pointer py-2 active">{cate.name}</div>
                        })}
                        {/* <div className="text-[16px] category px-4 border border-1 cursor-pointer py-2 ml-3">Hoạt hình</div>
                        <div className="text-[16px] category px-4 border border-1 cursor-pointer py-2 ml-3">Thiếu Nhi</div>
                        <div className="text-[16px] category px-4 border border-1 cursor-pointer py-2 ml-3">Tình cảm</div> */}
                    </div>
                    <p className='text-center text-[18px] my-3'> {nameStore ? <p>Kết quả tìm kiếm của bạn là:{nameStore}</p> : ""}</p>
                    <List
                        style={{ margin: 4 }}
                        itemLayout="vertical"
                        size="large"
                        pagination={{
                            onChange: (page) => {
                                console.log(page);
                            },
                            pageSize: 10,
                            style: {
                                textAlign: 'center' // Căn giữa phân trang
                            }
                        }}
                        grid={{
                            gutter: 16,
                            xs: 1,
                            sm: 2,
                            md: 3,
                            lg: 4,
                            xl: 4,
                            xxl: 4,
                        }}
                        dataSource={sortedProducts}
                        renderItem={(product: any, index) => (
                            <div className='mx-4 border-1 border-[#ccc]'>
                                <Link to={`/productDetail/${product._id}`} className='relative group hover:shadow-lg' key={index}>
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
                            </div>
                        )}
                    />

                    {/* {productState.map((product, index) => {
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

                        })} */}
                </div>
            </div>
        </div>
    )
}

export default AllCategory
