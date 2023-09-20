import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Link } from 'react-router-dom';
const ProductRelative = () => {
    return (
        <div>
            <div className="bg-white flex px-4 py-3 container border-b-2 flex-col">
                <h1 className='font-bold uppercase text-lg'>Sản phẩm liên quan</h1>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={30}
                    slidesPerView={5}
                    navigation
                    onSwiper={(swiper) => console.log(swiper)}
                    className='p-2 grid grid-cols-5 max-h-[732px] overflow-hidden py-4 gap-5'
                >
                    <SwiperSlide className='relative group hover:shadow-lg'>
                        <Link to="/productDetail">
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
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className='relative group hover:shadow-lg'>
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
                    <SwiperSlide className='relative group hover:shadow-lg'>
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
                    <SwiperSlide className='relative group hover:shadow-lg'>
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
                    <SwiperSlide className='relative group hover:shadow-lg'>
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
                    <SwiperSlide className='relative group hover:shadow-lg'>
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
                    <SwiperSlide className='relative group hover:shadow-lg'>
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
                <button className='my-4 w-[250px] border boder-1 border-main text-main text-center ml-[50%] translate-x-[-50%] px-10 py-2 text-[16px] hover:bg-main hover:text-white transition-all ease-linear'>Xem thêm</button>
            </div>
        </div>
    )
}

export default ProductRelative
