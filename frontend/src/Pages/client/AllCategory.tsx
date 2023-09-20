import React from 'react'

const AllCategory = () => {
    return (
        <div className='container'>
            <div className="mt-3">
                <div className="text-[#888888] my-3">
                    Trang chủ <span> / all-category</span>
                </div>
                <div className="bg-white flex px-4 py-3 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                    </svg>
                    <h1 className='font-bold uppercase text-lg ml-3'>Danh mục sản phẩm</h1>
                </div>
                <div className="bg-white overflow-hidden">
                    <div className="flex px-4 py-3 border-b-2">
                        <div className="text-[16px] px-4 font-semibold border border-1 border-[#F7931E] text-[#F7931E] py-2">Hành động</div>
                        <div className="text-[16px] px-4 border border-1 cursor-pointer py-2 ml-3">Hoạt hình</div>
                        <div className="text-[16px] px-4 border border-1 cursor-pointer py-2 ml-3">Thiếu Nhi</div>
                        <div className="text-[16px] px-4 border border-1 cursor-pointer py-2 ml-3">Tình cảm</div>
                    </div>
                    <div className="grid grid-cols-5 max-h-[732px] overflow-hidden px-10 py-4 gap-5">
                        <div className='relative group hover:shadow-lg'>
                            <div className="h-[230px] overflow-hidden">
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
                        </div>
                        <div className='relative group hover:shadow-lg'>
                            <div className="h-[230px] overflow-hidden">
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
                        </div>
                    </div>
                    <button className='my-4 border boder-1 border-main text-main text-center ml-[50%] translate-x-[-50%] px-10 py-2 text-[16px] hover:bg-main hover:text-white transition-all ease-linear'>Xem thêm</button>
                </div>
            </div>
        </div>
    )
}

export default AllCategory
