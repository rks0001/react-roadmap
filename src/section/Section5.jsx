import React from 'react'
import Testimonials from '../components/Testimonials'

const Section5 = () => {
  return (
    <div className='w-full h-full'>
      <div className='md:w-10/12 w-full h-full mx-auto p-10'>
      <div className='px-6 py-2 bg-[#14211F] text-[#318160] w-max font-medium'>Our Reviews</div>
                <div className='text-2xl py-3 font-medium'>Customer Testimonials</div>
      <Testimonials/>
      </div>
    
    </div>
  )
}

export default Section5