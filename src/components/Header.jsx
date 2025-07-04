import React, { useState } from 'react'
import 'boxicons/css/boxicons.min.css'

const Header = () => {
    const[menu,setMenu]=useState(true)

console.log(menu)
    
  return (
    <header className=' flex justify-between items-center  p-4 lg:px-20 '>
        <h1 data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className=' text-3xl md:text-4xl font-light m-0'>MCODE</h1>
      
      {/* navigation */}
      <nav className=' hidden  md:flex gap-12 items-center '>
        <a  data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1000" className=' text-base tracking-wider transition-colors  hover:text-gray-300 z-50' href="#">COMPANY</a>
                <a  data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className=' text-base tracking-wider transition-colors  hover:text-gray-300 z-50' href="#">FEATURES</a>
        <a  data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="2000" className=' text-base tracking-wider transition-colors  hover:text-gray-300 z-50' href="#">RESOURCES</a>
        <a  data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="2500" className=' text-base tracking-wider transition-colors  hover:text-gray-300 z-50' href="#">COMPANY</a>

      </nav>
      <button className=' hidden md:block bg-[#a7a7a7] text-black py3 px-8 rounded-full border-none font-medium transition-all duration-500  hover:bg-white cursor-pointer z-50 '>SIGNIN</button>
      {/* mobile */}
<button onClick={() => setMenu(!menu)} className='md:hidden text-3xl p-2 z-50'>
<i className={`bx ${menu ? 'bx-menu' : 'bx-x'}`}></i>
      </button>
      {/* sidebar */}
      <div  id='mobileMenu' className={` ${menu?"hidden":""} fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40  bg-black bg-opacity-70`}>
<nav className=' flex flex-col gap-6 items-center'>
        <a className=' text-base tracking-wider transition-colors  hover:text-gray-300 z-50' href="#">COMPANY</a>
                <a className=' text-base tracking-wider transition-colors  hover:text-gray-300 z-50' href="#">FEATURES</a>
        <a className=' text-base tracking-wider transition-colors  hover:text-gray-300 z-50' href="#">RESOURCES</a>
        <a className=' text-base tracking-wider transition-colors  hover:text-gray-300 z-50' href="#">COMPANY</a>

</nav>
      </div>
    </header>
  )
}

export default Header
