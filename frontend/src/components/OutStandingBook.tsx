import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import { useFetchAllOrderDetailQuery } from '../stores/toolkit/orderDetail/orderDetail.service';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';
import { fetchListOrderDetailSlice } from '../stores/toolkit/orderDetail/orderDetailSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../stores/toolkit';
import { useFetchListProductQuery, useFetchOneProductQuery } from '../stores/toolkit/product/product.service';
import { listProductSlice } from '../stores/toolkit/product/productSlice';
import { IProduct } from '../stores/toolkit/product/product.interface';
const OutStandingBook = () => {
    const dispatch: Dispatch<any> = useDispatch()
    const { data: listOrderDetail, isSuccess: isSuccessOrderDetail } = useFetchAllOrderDetailQuery()
    const { data: listProduct, isSuccess: isSucessProduct } = useFetchListProductQuery()
    const orderDetailState = useSelector((state: RootState) => state.orderDetailSlice.orderDetails)
    const productState = useSelector((state: RootState) => state.productSlice.products)
    // useEffect(() => {
    //     orderDetailState.map((orderDetail): any => {
    //         productState.filter((product) => product._id === orderDetail._id)
    //     })
    // }, [orderDetailState, productState])
    useEffect(() => {
        if (isSuccessOrderDetail) {
            dispatch(fetchListOrderDetailSlice(listOrderDetail))
        }
        if (isSucessProduct) {
            dispatch(listProductSlice(listProduct))
        }
    }, [isSuccessOrderDetail, isSucessProduct])
    return (
        <div className='container bg-white'>
            <div className="mt-3">
                <div className="bg-[#FCDDEF] flex px-4 py-3 items-center">
                    <img className='w-[30px] h-[30px]' src="../../public/images/icon-hot.png" alt="" />
                    <h1 className='font-bold uppercase text-lg ml-3'>Sản phẩm nổi bật</h1>
                </div>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={30}
                    slidesPerView={5}
                    navigation
                    onSwiper={(swiper) => console.log(swiper)}
                    className='p-2 py-3'
                >
                    <SwiperSlide className='relative  group hover:shadow-lg'>
                        <div className="h-[200px] overflow-hidden">
                            <img className='w-full h-full object-cover group-hover:scale-110 transition-all ease-linear' src="https://cdn0.fahasa.com/media/catalog/product/1/_/1_173_73.jpg" alt="" />
                        </div>
                        <div className="p-3">
                            <h1 className='text-[14px] line-clamp-2'>Bộ Sách One Piece - Episode A - Tập 1 + Tập 2 (Bộ 2 Cuốn) - Tặng Kèm PVC Card</h1>
                            <div className="flex text-[16px] font-semibold py-2">
                                <span className='text-red-600'>199.000 <sup>đ</sup></span>
                                <span className='text-[14px] font-normal  text-[#888888]'><del>199.000</del> <sup>đ</sup></span>
                            </div>
                            <div className="rounded-lg font-bold">0 đã bán</div>
                        </div>
                        <div className="absolute top-2 left-2 rounded-[50%] py-2 px-2 font bg-main">
                            <p className='text-white'>30%</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='relative  group hover:shadow-lg'>
                        <div className="h-[200px] overflow-hidden">
                            <img className='w-full h-full object-cover group-hover:scale-110 transition-all ease-linear' src="https://truyenconect.com/uploads/story/2021/06/13/lop-hoc-biet-tuot.jpg" alt="" />
                        </div>
                        <div className="p-3">
                            <h1 className='text-[14px] line-clamp-2'>Bộ Sách One Piece - Episode A - Tập 1 + Tập 2 (Bộ 2 Cuốn) - Tặng Kèm PVC Card</h1>
                            <div className="flex text-[16px] font-semibold py-2">
                                <span className='text-red-600'>199.000 <sup>đ</sup></span>
                                <span className='text-[14px] font-normal  text-[#888888]'><del>199.000</del> <sup>đ</sup></span>
                            </div>
                            <div className="rounded-lg font-bold">0 đã bán</div>
                        </div>
                        <div className="absolute top-2 left-2 rounded-[50%] py-2 px-2 font bg-main">
                            <p className='text-white'>30%</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='relative  group hover:shadow-lg'>
                        <div className="h-[200px] overflow-hidden">
                            <img className='w-full h-full object-cover group-hover:scale-110 transition-all ease-linear' src="https://upload.wikimedia.org/wikipedia/vi/8/82/Jujutsu_Kaisen_vol_1_cover.jpeg" alt="" />
                        </div>
                        <div className="p-3">
                            <h1 className='text-[14px] line-clamp-2'>Bộ Sách One Piece - Episode A - Tập 1 + Tập 2 (Bộ 2 Cuốn) - Tặng Kèm PVC Card</h1>
                            <div className="flex text-[16px] font-semibold py-2">
                                <span className='text-red-600'>199.000 <sup>đ</sup></span>
                                <span className='text-[14px] font-normal  text-[#888888]'><del>199.000</del> <sup>đ</sup></span>
                            </div>
                            <div className="rounded-lg font-bold">0 đã bán</div>
                        </div>
                        <div className="absolute top-2 left-2 rounded-[50%] py-2 px-2 font bg-main">
                            <p className='text-white'>30%</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='relative  group hover:shadow-lg'>
                        <div className="h-[200px] overflow-hidden">
                            <img className='w-full h-full object-cover group-hover:scale-110 transition-all ease-linear' src="https://cdn0.fahasa.com/media/catalog/product/1/_/1_173_73.jpg" alt="" />
                        </div>
                        <div className="p-3">
                            <h1 className='text-[14px] line-clamp-2'>Bộ Sách One Piece - Episode A - Tập 1 + Tập 2 (Bộ 2 Cuốn) - Tặng Kèm PVC Card</h1>
                            <div className="flex text-[16px] font-semibold py-2">
                                <span className='text-red-600'>199.000 <sup>đ</sup></span>
                                <span className='text-[14px] font-normal  text-[#888888]'><del>199.000</del> <sup>đ</sup></span>
                            </div>
                            <div className="rounded-lg font-bold">0 đã bán</div>
                        </div>
                        <div className="absolute top-2 left-2 rounded-[50%] py-2 px-2 font bg-main">
                            <p className='text-white'>30%</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='relative  group hover:shadow-lg'>
                        <div className="h-[200px] overflow-hidden">
                            <img className='w-full h-full object-cover group-hover:scale-110 transition-all ease-linear' src="https://cdn0.fahasa.com/media/catalog/product/1/_/1_173_73.jpg" alt="" />
                        </div>
                        <div className="p-3">
                            <h1 className='text-[14px] line-clamp-2'>Bộ Sách One Piece - Episode A - Tập 1 + Tập 2 (Bộ 2 Cuốn) - Tặng Kèm PVC Card</h1>
                            <div className="flex text-[16px] font-semibold py-2">
                                <span className='text-red-600'>199.000 <sup>đ</sup></span>
                                <span className='text-[14px] font-normal  text-[#888888]'><del>199.000</del> <sup>đ</sup></span>
                            </div>
                            <div className="rounded-lg font-bold">0 đã bán</div>
                        </div>
                        <div className="absolute top-2 left-2 rounded-[50%] py-2 px-2 font bg-main">
                            <p className='text-white'>30%</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='relative  group hover:shadow-lg'>
                        <div className="h-[200px] overflow-hidden">
                            <img className='w-full h-full object-cover group-hover:scale-110 transition-all ease-linear' src="https://cdn0.fahasa.com/media/catalog/product/1/_/1_173_73.jpg" alt="" />
                        </div>
                        <div className="p-3">
                            <h1 className='text-[14px] line-clamp-2'>Bộ Sách One Piece - Episode A - Tập 1 + Tập 2 (Bộ 2 Cuốn) - Tặng Kèm PVC Card</h1>
                            <div className="flex text-[16px] font-semibold py-2">
                                <span className='text-red-600'>199.000 <sup>đ</sup></span>
                                <span className='text-[14px] font-normal  text-[#888888]'><del>199.000</del> <sup>đ</sup></span>
                            </div>
                            <div className="rounded-lg font-bold">0 đã bán</div>
                        </div>
                        <div className="absolute top-2 left-2 rounded-[50%] py-2 px-2 font bg-main">
                            <p className='text-white'>30%</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='relative  group hover:shadow-lg'>
                        <div className="h-[200px] overflow-hidden">
                            <img className='w-full h-full object-cover group-hover:scale-110 transition-all ease-linear' src="https://cdn0.fahasa.com/media/catalog/product/1/_/1_173_73.jpg" alt="" />
                        </div>
                        <div className="p-3">
                            <h1 className='text-[14px] line-clamp-2'>Bộ Sách One Piece - Episode A - Tập 1 + Tập 2 (Bộ 2 Cuốn) - Tặng Kèm PVC Card</h1>
                            <div className="flex text-[16px] font-semibold py-2">
                                <span className='text-red-600'>199.000 <sup>đ</sup></span>
                                <span className='text-[14px] font-normal  text-[#888888]'><del>199.000</del> <sup>đ</sup></span>
                            </div>
                            <div className="rounded-lg font-bold">0 đã bán</div>
                        </div>
                        <div className="absolute top-2 left-2 rounded-[50%] py-2 px-2 font bg-main">
                            <p className='text-white'>30%</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <button className='my-4 border boder-1 border-main text-main text-center ml-[50%] translate-x-[-50%] px-10 py-2 text-[16px] hover:bg-main hover:text-white transition-all ease-linear'>Xem thêm</button>
            </div>
        </div >
    )
}

export default OutStandingBook
