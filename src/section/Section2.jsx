import React from 'react'
import image1 from '../images/image1.jpg'
import {AiOutlineArrowRight} from 'react-icons/ai'

const Section2 = () => {
  return (
    <div className='w-full h-full '>
 <div className='md:w-10/12 w-full h-full mx-auto p-10 items-center'>
        <div className='flex md:flex-row flex-col'>
            <div className='flex-1 '>
                <div className='px-6 py-2 bg-[#14211F] text-[#318160] w-max font-medium'>Destination</div>
                <div className='text-2xl py-3 font-medium'>Our Best Destination For You</div>
            </div>
            <div className='flex-1 text-sm text-gray-600'>
                With a world full of fascinating destinations, choosing a perfect vacation spot can present a challenge. That's why Ithvaraa to compile this list of the world's best places to visit. 

            </div>
        </div>
        <div className='flex flex-row flex-wrap justify-evenly '>
            
            <div className="md:w-4/12 w-full p-2" > 
            <img  className="w-full rounded-lg" src={image1} alt="desc" />
            <p className='text-sm py-6 p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quia sunt fuga aut corrupti! Ut dignissimos ex voluptatum, odio nemo eum veritatis, quidem mollitia cupiditate, assumenda ad earum corrupti iste!</p>
            </div>
            <div className="md:w-4/12 w-full p-2 flex md:flex-col-reverse flex-col" > 
            <img  className="w-full rounded-lg" src={image1} alt="desc" />
            <p className='text-sm py-6 p-2 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quia sunt fuga aut corrupti! Ut dignissimos ex voluptatum, odio nemo eum veritatis, quidem mollitia cupiditate, assumenda ad earum corrupti iste!</p>
            </div>
            <div className="md:w-4/12 w-full p-2" > 
            <img  className="w-full rounded-lg " src={image1} alt="desc" />
            <p className='text-sm py-6 p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quia sunt fuga aut corrupti! Ut dignissimos ex voluptatum, odio nemo eum veritatis, quidem mollitia cupiditate, assumenda ad earum corrupti iste!</p>
            </div>
            
            
        </div>
        <div className=' w-full justify-center py-2 flex items-center gap-2'>
        <div className='flex items-center gap-2 px-6 py-2 bg-[#2E6846] text-[#f1f1f1] w-max font-semibold text-lg'>See all Destinations<AiOutlineArrowRight/> </div>
        </div>
        
        
    </div>
    
    </div>
   
  )
}

export default Section2