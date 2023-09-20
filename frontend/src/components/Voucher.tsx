import React from 'react'

const Voucher = () => {
    return (
        <div className='container'>
            <div className="grid grid-cols-3 gap-4 mt-3">
                <div className="rounded-lg border border-red-100 flex items-center flex-col p-4 bg-white relative">
                    <p>Voucher khuyến mãi</p>
                    <button className='bg-blue-400 px-3 py-2 text-white mt-4'>Nhập ngay</button>
                    <div className="bg-yellow-400 text-white px-3 py-2 rounded-[50%] absolute top-2 right-2">HOT</div>
                </div>
                <div className="rounded-lg border border-red-100 flex items-center flex-col p-4 bg-white relative">
                    <p>Voucher khuyến mãi</p>
                    <button className='bg-blue-400 px-3 py-2 text-white mt-4'>Nhập ngay</button>
                    <div className="bg-yellow-400 text-white px-3 py-2 rounded-[50%] absolute top-2 right-2">HOT</div>
                </div>
                <div className="rounded-lg border border-red-100 flex items-center flex-col p-4 bg-white relative">
                    <p>Voucher khuyến mãi</p>
                    <button className='bg-blue-400 px-3 py-2 text-white mt-4'>Nhập ngay</button>
                    <div className="bg-yellow-400 text-white px-3 py-2 rounded-[50%] absolute top-2 right-2">HOT</div>
                </div>
            </div>
        </div>
    )
}

export default Voucher
