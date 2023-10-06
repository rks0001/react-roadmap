import React, { useState } from 'react';
import testimonialData from './testimonialData'; // Import the sample data
import {AiOutlineArrowUp,AiOutlineArrowDown} from 'react-icons/ai'
import {HiOutlineUserCircle} from 'react-icons/hi'
const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < testimonialData.length - 1 ? prevIndex + 1 : 0
    );
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : testimonialData.length - 1
    );
  };

  return (
    <div className="testimonials">
         <div className="flex gap-2 mb-4 md:mb-0">
        <button onClick={prevCard}><AiOutlineArrowUp style={{fontSize:"22px", padding:"1px"}} className='bg-[#318160] rounded-lg'/></button>
        <button onClick={nextCard}><AiOutlineArrowDown style={{fontSize:"22px", padding:"1px"}} className='bg-[#318160]  rounded-lg'/></button>
      </div>
      <div className="bg-[#1E1D1E] md:w-6/12 w-full mx-auto h-max p-4 items-center rounded-lg text-gray-300">
      <p className='text-yellow-500'>Rating : {testimonialData[currentIndex].rating}</p>
        <p>{testimonialData[currentIndex].testimonial}</p>
        <div className='flex items-center gap-2 py-2'>
        <HiOutlineUserCircle style={{fontSize:'20px', color:'#318160'}}/>
        <h3 className='font-semibold tracking-tighter'>{testimonialData[currentIndex].name}</h3>
        </div>
        
      </div>
     
    </div>
  );
};

export default Testimonials;
