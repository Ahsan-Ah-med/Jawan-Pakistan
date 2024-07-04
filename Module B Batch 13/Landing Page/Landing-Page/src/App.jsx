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
import Vector4 from '../src/assets/vector4.svg'
import Vector2 from '../src/assets/vector2.svg'
import facebook from '../src/assets/facebook.png'
import twitter from '../src/assets/linkedin.png'
import linkedIn from '../src/assets/twitter.png'
import logo from '../src/assets/logo.png'
import slideimage1 from '../src/assets/1.ddb463a076b58bbe0ea3.jpg'
import slideimage2 from '../src/assets/2.924b429a0601a89b04e1.jpg'

function App() {

  return (
    <>
      <Announcement tel={Vector4} mail={Vector2} facebook={facebook} linkedIn={linkedIn} twitter={twitter} />
      <Header logo={logo} />
      <Banner
        data={[
          { title: "Discover the world of possible university.", image: slideimage1, sologen: "Great Quality Cocial life", btnText: "Admissions" },
          { title: "Discover the world of possible university.", image: slideimage2, sologen: "Great Quality Cocial life", btnText: "Admissions" }
        ]} />
      {/* 
      <Card />
      <Image_with_text />
      <Image_with_text2 />
      <Card />
      <Card_silder />
      <Testimonial />
      <Card />
      <Footer /> */}
    </>
  )
}

export default App


