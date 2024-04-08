import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutUs from '../components/AboutUs'
import Services from '../components/Services'
import GalleryCompo from '../components/GalleryCompo'
// import AuthoDealer from '../components/AuthoDealer'
import Footer from '../components/Footer'


function Home() {
  return (
    <div id='#home'>
        <Navbar />
        <Hero />
        <AboutUs />
        <Services />
        <GalleryCompo />
        {/* <AuthoDealer /> */}
        <Footer />
    </div>
  )
}

export default Home