import React from 'react'
import { CiGlobe } from 'react-icons/ci'
import { HiOutlineMail } from 'react-icons/hi'
import { HiOutlineBellAlert } from 'react-icons/hi2'
import { RxPerson } from 'react-icons/rx'


const Navbar = () => {
  return (
    <div className='bg-[#2d2d2d] text-[#fff] flex justify-between'>
        <ul className='flex items-center h-[10vh] justify-evenly w-[45%] ml-[22%] uppercase'>
            <li><a href="">Home</a></li>
            <li><a href="">Market</a></li>
            <li><a href="">Compare</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">About</a></li>
            <li><a href="">FAQ</a></li>
            <button className='bg-[#383B98] py-[1%] px-[4%] rounded-md'>Add Property</button>
        </ul>
        <ul className='flex items-center h-[10vh] justify-evenly w-[20%] text-[1.3rem]'>
            <li ><CiGlobe /></li>
            <li><HiOutlineMail /></li>
            <li><HiOutlineBellAlert /></li>
            <li><RxPerson /></li>

        </ul>
    </div>
  )
}

export default Navbar