import React from 'react';
import Gallery from '../components/Gallery';

const Section1 = () => {
  return (
    <div className='w-full h-full relative '>
      <div className='md:w-10/12 w-full mx-auto'>
       
        {/* Images */}
        <div className=' p-10 pb-2 pt-6 relative'>
          <Gallery />
          
        <div className='  h-full absolute md:p-20 p-14 top-0 left-0 flex items-center md:w-10/12  w-full text-[6vh] font-bold md:text-[10vh]  md:font-semibold leading-none'>
          READY TO EXPLORE THE BEAUTY OF THE WORLD 
          <p className='hidden md:px-20 px-14 relative left-0  md:w-9/12 w-full text-base md:text-lg font-normal tracking-normal text-[#f1f1f1]'>
          Boost and lift your mood with a vacation
        </p>
        </div>
        
          <p className='text-sm md:text-lg font-medium pt-2 text-[#f1f1f1] justify-center'>
            Let's find the best destination for you, With Us !!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
