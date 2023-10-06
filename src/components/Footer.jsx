import React from 'react'
import {AiFillFacebook,AiOutlineInstagram} from 'react-icons/ai'
import {RiTwitterXLine} from 'react-icons/ri'

const Footer = () => {
  return (
    <div className='dark w-full h-full py-10 text-[#f1f1f1]'>
        <div className='w-10/12 h-full mx-auto flex flex-row'>
            <div className='flex-1 mr-10 '>
            <div className='font-semibold text-lg'>ithvaraa</div>
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
                    <li  className='text-sm font-light pb-2'>Home</li>
                    <li  className='text-sm font-light pb-2'>Destination</li>
                    <li  className='text-sm font-light pb-2 '>Expedition</li>
                    <li  className='text-sm font-light pb-2'>Timeline</li>
                    <li  className='text-sm font-light pb-2'>Review</li>
                </ul>
                </div>
                <div className='flex-1'>
                <ul>
                    <li className='text-lg font-medium pb-2'>Support</li>
                    <li  className='text-sm font-light pb-2'>FAQs</li>
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