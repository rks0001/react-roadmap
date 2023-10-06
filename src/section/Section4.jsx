import React from 'react'
import Day from '../components/Day'
import {AiOutlineArrowRight} from 'react-icons/ai'

const Section4 = () => {
  return (
    <div className='w-full h-full'>
      <div className='md:w-10/12 w-full h-full mx-auto p-10'>
      <div className='flex md:flex-row flex-col'>
      <div className='flex-1'>
      <div className='px-6 py-2 bg-[#14211F] text-[#318160] w-max font-medium'>Timeline</div>
            <div className='md:w-8/12 text-2xl md:py-3 font-medium'>Timeline our Expedition Rare Experience For You</div>
            <p className='text-gray-600 text-sm py-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, dignissimos, quisquam, ducimus rerum ipsam accusantium rem inventore a doloremque labore fugit earum aut consectetur pariatur veniam voluptatum sint maiores id.</p>
            <div className='flex items-center gap-2 px-6 py-2 bg-[#2E6846] text-[#f1f1f1] w-max font-semibold text-lg'>Register Now <AiOutlineArrowRight/> </div>
      </div>
      <div className='flex-1 md:px-4 py-4 md:py-0 mx-auto'>
      <Day/>
      </div>
      </div>
      </div>
    
    </div>
  )
}

export default Section4