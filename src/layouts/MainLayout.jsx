import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const MainLayout = () => {
  return (
    <>
    <Navbar />
    <main className="min-h-screen flex justify-center items-center">
        <Outlet />
    </main>
    <Footer />
    </>
  )
}

export default MainLayout
