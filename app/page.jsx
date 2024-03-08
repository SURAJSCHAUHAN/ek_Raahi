import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SideMenu from './components/SideMenu'
import TopCategories from './components/TopCategories'
import NewArrivals from './components/NewArrivals'
import ServicesIcon from './components/ServicesIcon'
import BestSellers from './components/BestSellers'
import Footer from './components/Footer'

const page = () => {
  return (
    <div>
      <Navbar/>
      <SideMenu/>
      <Hero/>
      <TopCategories/>
      <NewArrivals/>
      <ServicesIcon/>
      <BestSellers/>
      <Footer/>
    </div>
  )
}

export default page