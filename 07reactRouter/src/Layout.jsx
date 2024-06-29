import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
function Layout() {
  return (
    <>
      <Header />
        <Outlet /> 
         {/* the header footer will be same but inside header and footer content will be change  */}
      <Footer />
    </>
  )
}

export default Layout