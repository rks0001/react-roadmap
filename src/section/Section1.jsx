import React from 'react';
import {DiReact} from 'react-icons/di'

const Section1 = () => {
  return (
    <div className='w-full min-h-screen  '>
      <div className='w-10/12 h-full mx-auto md:px-10'>
      <div className='flex flex-col  md:flex-row justify-center py-10'>
        <div className='my-auto'>
        <div className='text-2xl font-bold text-center'>
          Now Learn React with these 3 questions -
          
        </div>
        <div className='flex justify-center items-center p-1'>
        <DiReact size={180} color='#5ED4F3'/>
        </div>
        <div className='flex flex-col md:flex-row'> 
        <div className='flex-1 text-black font-extrabold  text-center text-4xl px-10 md:py-2 rounded-lg m-1'>Why?</div>
        <div className='flex-1 text-black font-extrabold  text-center text-4xl  px-10 md:py-2  rounded-lg m-1'>When?</div>
        <div className='flex-1 text-black font-extrabold  text-center  text-4xl  px-10 md:py-2 rounded-lg m-1'>How?</div>
        </div>
        </div>
        
     
      </div>
      {/* Javacript */}
      <div className='flex flex-col md:flex-row items-center justify-center'>
        <div>
        <div className='font-semibold text-lg'> But beforing using react, how much Javascript do you know?</div>
         <div className='font-normal text-lg'>Watch these videos below and then come to learning React</div>
         <div className='flex gap-4 flex-wrap py-2'>
          <div className='flex-1 font-semibold'>1. Namaste Javascript Series<iframe  src="https://www.youtube.com/embed/ZvbzSrg0afE?si=gyI4dTTCEtVvd9nM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div>
          <div className='flex-1 font-semibold'>2. PedroTech  Javascript before React<iframe src="https://www.youtube.com/embed/m55PTVUrlnA?si=fARzkw0_LAbA6pPP" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div>
         
         </div>
         <div className='flex gap-4 flex-wrap py-2'>
          <div className='flex-1 font-semibold'>3. Clever Programmer-Javascript<iframe  src="https://www.youtube.com/embed/lI1ae4REbFM?si=-aSSoxS3ju1oHInk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div>
          <div className='flex-1 font-semibold'>4. DSA Javascript<iframe  src="https://www.youtube.com/embed/5mEwh4MfwB4?si=HbFG_Wllk4X_FHhT" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div>
         
         </div>
        </div>
        
        </div>
     
      </div>
    </div>
  );
}

export default Section1;
