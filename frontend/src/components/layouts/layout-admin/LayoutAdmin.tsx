import React from 'react'
import AsideAdmin from '../../AsideAdmin'
import { Outlet } from 'react-router-dom'

const LayoutAdmin = () => {
    return (
        <div>
            <AsideAdmin></AsideAdmin>
            <div className="py-24 px-6  sm:ml-64 h-screen">
                <Outlet></Outlet>
            </div>
        </div>
    )
}

export default LayoutAdmin
