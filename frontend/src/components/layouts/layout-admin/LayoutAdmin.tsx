import React, { useEffect } from 'react'
import AsideAdmin from '../../AsideAdmin'
import { Outlet, useNavigate } from 'react-router-dom'

const LayoutAdmin = () => {
    const navigate = useNavigate()
    const getUser = JSON.parse(localStorage.getItem("user")!)
    useEffect(() => {
        if (!getUser || getUser.role !== "admin") {
            setTimeout(() => {
                alert("Bạn không có quyền admin!")
            }, 1)
            return navigate("/")
        }
    }, [navigate])
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
