import React from 'react'
import Banner from '../../components/Banner'
import OutStandingBook from '../../components/OutStandingBook'
import SaleProduct from '../../components/SaleProduct'
import Voucher from '../../components/Voucher'
import Products from '../../components/Products'

const HomePage = () => {
    return (
        <div className='py-3 bg-[#F1F1F1]'>
            <Banner></Banner>
            <Voucher></Voucher>
            <SaleProduct></SaleProduct>
            <OutStandingBook></OutStandingBook>
            <Products></Products>
        </div>
    )
}

export default HomePage
