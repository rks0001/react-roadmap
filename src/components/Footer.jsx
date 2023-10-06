import React from 'react'
import {AiFillFacebook,AiOutlineInstagram} from 'react-icons/ai'
import {RiTwitterXLine} from 'react-icons/ri'
import { Link } from 'react-router-dom/dist'

const Footer = () => {
  return (
    <div className='dark w-full h-full py-10 text-[#f1f1f1]'>
        <div className='w-10/12 h-full mx-auto flex flex-row'>
            <div className='flex-1 mr-10 '>
            <div className='font-semibold text-lg'>TRAVELY</div>
            <div className='text-xs md:w-8/12 py-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
            <div className='flex flex-row gap-3 pb-4'>
            <AiFillFacebook/>
            <AiOutlineInstagram/>
            <RiTwitterXLine/>
            </div>
            </div>
            {/* Right */}
            <div className='flex-1'>
            <div className='flex md:flex-row flex-col'>
                <div className='flex-1'>
                <ul>
                   <li className='text-lg font-medium pb-2'>Navigate</li> 
                   <Link to='/'><li  className='text-sm font-light pb-2'>Home</li> </Link>
                   <Link to='/destination'> <li  className='text-sm font-light pb-2'>Destination</li></Link>
                   <Link to='/expedition'> <li  className='text-sm font-light pb-2 '>Expedition</li></Link>
                   <Link to='/timeline'><li  className='text-sm font-light pb-2'>Timeline</li> </Link>
                   <Link to='/reviews'> <li  className='text-sm font-light pb-2'>Review</li></Link>
                </ul>
                </div>
                <div className='flex-1'>
                <ul>
                    <li className='text-lg font-medium pb-2'>Support</li>
                    <Link to="/faq"><li  className='text-sm font-light pb-2'>FAQs</li></Link>
                    <li  className='text-sm font-light v'>Contact Us</li>
                </ul>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Footer