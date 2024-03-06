import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SideMenu from './components/SideMenu'
import TopCategories from './components/TopCategories'
import NewArrivals from './components/NewArrivals'

const page = () => {
  return (
    <div>
      <Navbar/>
      <SideMenu/>
      <Hero/>
      <TopCategories/>
      <NewArrivals/>
    </div>
  )
}

export default page