import React from 'react'
import Header from '../../Header'
import Footer from '../../Footer'
import { Outlet } from "react-router-dom"
const LayoutClient = () => {
    return (
        <div className='bg-[#F1F1F1]'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}

export default LayoutClient
