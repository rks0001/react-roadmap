import React from 'react';
import Gallery from '../components/Gallery';

const Section1 = () => {
  return (
    <div className=' w-full h-full '>
      <div className='md:w-10/12 w-full mx-auto'>
      <div className='md:w-8/12 w-full md:text-xl font-medium pt-6 md:pt-14 px-10 text-gray-600'>
          Boost and lift your mood with a vacation
        </div>
        <div className='md:w-8/12 w-full text-2xl md:text-5xl font-medium px-10'>
          READY TO EXPLORE THE BEAUTY OF WORLD
        </div>
        

        {/* Images */}
        <div className='p-10 pb-2 pt-6 '>
        <Gallery />  
        <p className='font-medium py-2 text-gray-500' >Let's find the best destination for you, With Us !!</p>
        </div>
       
      </div>
    </div>
  );
}

export default Section1;
