import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import ReportLoad from './ReportLoad'

const Layout = () => {
  return (
    <div className='bg-background'>
        <Header />
        <ScrollRestoration />
        <ReportLoad />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout