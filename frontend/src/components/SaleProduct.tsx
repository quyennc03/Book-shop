import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '../stores/toolkit';
import { useFetchListProductQuery } from '../stores/toolkit/product/product.service';
import { listProductSaleSlice } from '../stores/toolkit/product/productSlice';
import { useState } from "react"
const SaleProduct = () => {
    const dispatch: Dispatch<any> = useDispatch()
    const productState = useSelector((state: RootState) => state.productSlice.products)
    const { data: listProduct, isSuccess, isLoading } = useFetchListProductQuery()


    useEffect(() => {
        if (isSuccess) {
            dispatch(listProductSaleSlice(listProduct))
        }
    }, [isSuccess])
    return (
        <div>
            <div className='container bg-white'>
                <div className="mt-3">
                    <div className="bg-[#FCDAB0] flex px-4 py-3 items-center">
                        <img className='w-[30px] h-[30px]' src="../../public/images/sale.png" alt="" />
                        <h1 className='font-bold uppercase text-lg ml-3'>Sản phẩm đang giảm giá</h1>
                    </div>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={30}
                        slidesPerView={5}
                        navigation
                        onSwiper={(swiper) => console.log(swiper)}
                        className='p-2 py-3'
                    >
                        {productState?.map((product, index) => {
                            return <SwiperSlide className='relative group hover:shadow-lg' key={index}>
                                <Link to={`/productDetail/${product._id}`}>
                                    <div className="h-[200px] overflow-hidden">
                                        <img className='w-full h-full object-cover group-hover:scale-110 transition-all ease-linear' src={product.image} alt="" />
                                    </div>
                                    <div className="p-3 flex flex-col justify-between h-[110px]">
                                        <h1 className='text-[14px] line-clamp-2 '>{product.name}</h1>
                                        <div className="flex text-[16px] font-semibold py-2">
                                            <span className='text-red-600'>{product.price}<sup>đ</sup></span>
                                            <span className='text-[14px] font-normal  text-[#888888] ml-2'><del>{product.discount}</del> <sup>đ</sup></span>
                                        </div>
                                        <div className="rounded-lg font-bold">0 đã bán</div>
                                    </div>
                                    <div className="absolute top-2 left-2 rounded-[50%] py-2 px-2 font bg-main">
                                        <p className='text-white'>{product.price < product.discount ? (product.discount - product.price) / product.discount * 100 : 0}%</p>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        })}
                    </Swiper>
                    <button className='my-4 border boder-1 border-main text-main text-center ml-[50%] translate-x-[-50%] px-10 py-2 text-[16px] hover:bg-main hover:text-white transition-all ease-linear'>Xem thêm</button>
                </div>

            </div >
        </div>
    )
}

export default SaleProduct
