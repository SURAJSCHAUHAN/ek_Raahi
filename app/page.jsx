import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import SideMenu from '../components/SideMenu'
import TopCategories from '../components/TopCategories'
import NewArrivals from '../components/NewArrivals'
import ServicesIcon from '../components/ServicesIcon'
import BestSellers from '../components/BestSellers'
import Footer from '../components/Footer'
import Recommended from '../components/Recommended'

const page = () => {
  return (
    <div>
      <SideMenu/>
      <Hero/>
      <TopCategories/>
      <NewArrivals/>
      <ServicesIcon/>
      <BestSellers/>
      {/* <Recommended/> */}
    </div>
  )
}

export default page