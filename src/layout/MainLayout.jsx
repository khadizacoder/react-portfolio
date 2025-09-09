import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <main className='flex-1'>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default MainLayout