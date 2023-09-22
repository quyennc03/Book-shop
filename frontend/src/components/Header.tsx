import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Header = () => {
    const navigate = useNavigate()
    const getUser = JSON.parse(localStorage.getItem("user")!)
    const handleLogout = () => {
        localStorage.clear()
        alert("Đăng xuất thành công")
        // navigate("/signin")
    }
    return (
        <>
            <div className='h-[30px] bg-main text-[12] font-bold uppercase text-white flex items-center justify-around'>
                <p>Nhà sách Funny | Funny Books</p>
                <p>Hỗ trợ thanh toán cod toàn quốc</p>
            </div>
            <div className="h-[92px] flex container items-center justify-between">
                <Link to="/" className='h-[52px]'>
                    <img className='h-full object-cover' src="../../public/images/logo.png" alt="" />
                </Link>
                <form action="" className='flex flex-1 items-center px-3 py-2 h-[50px]'>
                    <div className="bg-main h-full items-center flex px-2 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </div>
                    <input type="text" className='w-[500px] border focus:shadow-lg focus:outline-none border-1-[#ccc] h-full px-2' placeholder='Hãy tìm sản phẩm ...' />
                    <div className="bg-main h-full items-center flex px-4 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </div>
                </form>
                <Link to="/cart" className="flex items-center mr-2">
                    <div className="mr-1">
                        Giỏ hàng / 0đ
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                </Link>
                {getUser ? <Link to="/">
                    <div className='relative group'>Hello! {getUser.fullName}
                        <ul className='bg-[#F1F1F1] border border-1 text-black absolute min-w-[150px] hidden group-hover:block shadow-2xl shadow-[#ccc]'>
                            <li onClick={() => handleLogout()} className='px-2 py-3  hover:border-b-2 hover:border-main transition-all ease-linear'><p className=' transition-all ease-linear hover:ml-1 hover:text-main'>Đăng xuất</p></li>
                            <li className='px-2 py-3  hover:border-b-2 hover:border-main transition-all ease-linear'><p className='transition-all ease-linear hover:ml-1 hover:text-main'>Cập nhật tài khoản</p></li>
                        </ul>
                    </div>
                </Link> :
                    <Link to="/signin" className="flex items-center">
                        <p>Tài khoản</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                    </Link>
                }

            </div>
            <div className="h-[40px] bg-main ">
                <ul className='flex text-white font-bold h-full container text-[14px] justify-around items-center'>
                    <li><Link to="/">Trang chủ</Link></li>
                    <li><Link to="">Giới thiệu</Link></li>
                    <li><Link to="/all-category">Thể loại</Link></li>
                    <li><Link to="">Liên hệ</Link></li>
                </ul>
            </div>
        </>
    )
}

export default Header
