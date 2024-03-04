import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SideMenu from './components/SideMenu'
import TopCategories from './components/TopCategories'

const page = () => {
  return (
    <div>
      <Navbar/>
      <SideMenu/>
      <Hero/>
      <TopCategories/>
    </div>
  )
}

export default page