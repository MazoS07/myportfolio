import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div id="Hero" className="min-h-screen bg-no-repeat bg-[url('/6de43d61-2a36-4c77-b0ac-7416cc07008e.png')] bg-cover"
    style={{backgroundSize: "35%", backgroundPosition: "left 100px top 100px"}}
    >
 <Navbar />
 <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
  <div className='hidden lg:block'></div>
  <div className='text-[80px] sm:text-[100px] font-bold leading-tight flex justify-center items-center'>
    <div>
      <p data-aos="zoom-in-up">I'm</p>
      <p data-aos="zoom-in-up">Mazia</p>
      <p data-aos="zoom-in-up">Sarah...</p>
    </div>
  </div>
 </div>
    </div>
  )
}

export default Hero