import React from 'react';
import video1 from '../images/video1.mp4'
import {BsArrowUpRight} from 'react-icons/bs'
const Section3 = () => {
  return (
    <div className='w-full h-full '>
      <div className='md:w-10/12 w-full h-full p-10 mx-auto'>
        {/* first */}
        <div className='flex md:flex-row flex-col items-center py-2'>
          <div className='flex-1'>
            <div className='px-6 py-2 bg-[#14211F] text-[#318160] w-max font-medium'>Expedition</div>
            <div className='w-8/12 text-2xl py-3 font-medium'>We Provide Expedition Rare Experience</div>
          </div>
          <div className='flex-1'>
            <div className=' text-sm text-gray-600'>Explore all over the world to see and know more about the beauty of flora and fauna. We provide a rare expedition experience that you have never felt before.</div>
            <div className='text-sm my-2 flex items-center gap-2 py-1 bg-gray-800 opacity-70 w-max px-4  rounded-sm'>Learn More <BsArrowUpRight/></div>
          </div>
        </div>
        {/* Video */}
        <div className='py-4 '>
          <video className='md:h-[60vh] w-full'autoPlay loop muted >
            <source src={video1} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}

export default Section3;
