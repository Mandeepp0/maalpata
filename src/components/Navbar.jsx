import React from 'react'
import logo from '../assets/logo.png'

import { BiSearch } from "react-icons/bi";
import { LuBadgePercent } from "react-icons/lu";
import { BiHelpCircle } from "react-icons/bi";
import { FaRegUserCircle } from "react-icons/fa";
import { BiSolidCartAlt } from "react-icons/bi";



const Navbar = () => {
  return (
    <>
        <div className='py-5 h-24 ' />
        <div className=' border-b-2 bg-white flex justify-between px-5 lg:px-28 py-5 fixed w-[100%] top-0 z-40' >
            {/* nav left side */}

            <div className='flex items-center '>
                <img src={logo} alt="" className='w-28' />
                <span className='text-4xl font-bold'><span className=' text-orange-500'>ਮਾਲ</span> <span className=' text-blue-500'> ਪੱਤਾ </span></span>
            </div>

            {/* nav right side */}

            <div className='flex '>
                <ul className='flex gap-5  lg:gap-14 items-center'>
                    <li className='flex items-center gap-1'>
                        <BiSearch className=' text-xl' />
                        <span className='font-medium'>Search</span>
                    </li>
                    <li className='flex items-center gap-1'>
                        <LuBadgePercent className=' text-xl' />
                        <span className='font-medium'>Offers</span>

                    </li>
                    <li className='flex items-center gap-1'>    
                        <BiHelpCircle className=' text-xl' />
                        <span className='font-medium'>Help</span>

                    </li>
                    <li className='flex items-center gap-1'>
                        <FaRegUserCircle className=' text-xl' />
                        <span className='font-medium'>Sign In</span>

                    </li>
                    <li className='flex items-center gap-1'>
                        <BiSolidCartAlt className=' text-xl' />
                        <span className='font-medium'>Cart</span>

                    </li>
                </ul>
            </div>

        </div>
    </>
  )
}

export default Navbar