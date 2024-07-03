import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Announcement from './Component/Announcement/Announcement'
import Header from './Component/Header/Header'
import Banner from './Component/Banner/Banner'
import Card from './Component/Card/Card'
import Image_with_text from './Component/Image_with_text/Image_with_text'
import Image_with_text2 from './Component/Image_with_text2/Image_with_text2'
import Card_silder from './Component/Card_slider/Card_silder'
import Testimonial from './Component/Testimonial/Testimonial'
import Footer from './Component/Footer/Footer'

function App() {

  return (
    <>
      <Announcement />
      <Header />
      <Banner />
      <Card />
      <Image_with_text />
      <Image_with_text2 />
      <Card />
      <Card_silder />
      <Testimonial />
      <Card />
      <Footer />
    </>
  )
}

export default App
