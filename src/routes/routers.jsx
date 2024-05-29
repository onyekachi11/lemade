import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AboutUs from '../pages/aboutUs'
import LandingPage from '../pages/landingpage/landingpage'
import ContactUs from '../pages/contactUs'

const Routers = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<LandingPage/>}/>
            <Route path='/about-us' element={<AboutUs/>}/>
            <Route path='/contact-us' element={<ContactUs/>}/>
        </Routes>
    </div>
  )
}

export default Routers