import React from 'react'
import image1 from '../images/image1.jpg'
import Accordion from '../components/Accordion'
const Section6 = () => {

 
  return (
    <div className='w-full h-full'>
        <div className='md:w-10/12 w-full h-full mx-auto p-10'> 
        <div className='flex md:flex-row flex-col'>
            <div className='flex-1'>
            <div className='text-xl font-medium py-2'>Maybe any question, check this out</div>
            {/* Questions */}
           <Accordion question='Timeline our expedition rare experience' answer='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique possimus iusto, perferendis autem earum consequuntur aliquam exercitationem dolore repudiandae sunt hic, libero ratione aliquid! Ullam quasi sequi libero blanditiis beatae.'/>
           <Accordion question='Register for expedition trip' answer='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique possimus iusto, perferendis autem earum consequuntur aliquam exercitationem dolore repudiandae sunt hic, libero ratione aliquid! Ullam quasi sequi libero blanditiis beatae.'/>
           <Accordion question='Safety and Loss Guarantee' answer='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique possimus iusto, perferendis autem earum consequuntur aliquam exercitationem dolore repudiandae sunt hic, libero ratione aliquid! Ullam quasi sequi libero blanditiis beatae.'/>
            </div>
            <div className='flex-1 pt-2 md:pt-0 p-4 md:p-20 '>
            <img src={image1} alt="faq"/>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Section6

