import React from 'react'
import cr1 from '../../images/codesnippets/cr1.png'
import cr2 from '../../images/codesnippets/cr2.png'
import cr3 from '../../images/codesnippets/cr3.png'
import cr4 from '../../images/codesnippets/cr4.png'
import cr5 from '../../images/codesnippets/cr5.png'
const ConditionalRendering = () => {
      
  return (
    <div className='px-10 text-black'>
        {/* Why */}
        <div  className='pb-6'>
        <div className='font-bold text-lg'>Why to use Conditional Rendering:</div> 
       <div>
     <p>1. Conditional rendering allows you to show or hide components or elements based on certain conditions or user interactions.</p>
     <p>2. It's essential for building dynamic and responsive user interfaces that adapt to different scenarios.</p>
    
       </div>
        </div>
       {/*When/Where  */}
       <div className='pb-6'>
       <div  className='font-bold text-lg'>When/Where to use Conditional Rendering:</div> 
       <div>
       <p>1. Use conditional rendering when you need to display content conditionally based on user input, data, or application state.</p>
       <p>2. It's often used for showing error messages, handling loading states, or rendering components based on user permissions.</p>
       </div>

       </div>
      
       {/*When/Where  */}
       <div className='pb-6'>
       <div  className='font-bold text-lg'>How to use Conditional Rendering:</div> 
       {/* Redux Store  */}
       <div className='pb-2'>
       <div className='font-semibold'>1. Using if Statements:</div>
       <p className=''>You can conditionally render content within components using standard JavaScript if statements.</p>
     
       <div>
              <img src={cr1} className='w-9/12 rounded-sm' alt="srccode"></img>
              <div>
              
              </div>
       </div>
       </div>
        {/* Reducers  */}
        <div className='pb-2'>
       
       <div className='font-semibold'>2. Using Ternary Operators:</div>
       <p className='pb-2'>Ternary operators are a concise way to conditionally render content.</p>
       <div>
              <img src={cr2} className='w-9/12 rounded-sm' alt="srccode"></img>
              <div>
              
              </div>
       </div>
       </div>
         {/* Reducers  */}
        <div className='pb-2'>
       
       <div className='font-semibold'>3. Using Logical && Operator:</div>
       <p className='pb-2'>The && operator can be used to conditionally render content when a condition is met.</p>
       <div>
              <img src={cr3} className='w-9/12 rounded-sm' alt="srccode"></img>
              <div>
              
              </div>
       </div>
       </div>
          {/* Reducers  */}
          <div className='pb-2'>
       
       <div className='font-semibold'>4. Conditional Rendering with State:</div>
       <p className='pb-2'>You can use component state to manage conditions for rendering.</p>
       <div>
              <img src={cr4} className='w-9/12 rounded-sm' alt="srccode"></img>
              <div>
              
              </div>
       </div>
       </div>
        {/* Reducers  */}
        <div className='pb-2'>
       
       <div className='font-semibold'>5. Switching Between Components:</div>
       <p className='pb-2'>You can conditionally render different components based on a condition.</p>
       <div>
              <img src={cr5} className='w-9/12 rounded-sm' alt="srccode"></img>
              <div>
              
              </div>
       </div>
       </div>
       
    {/*  Projects*/}
<div>
       <div className='py-2 font-bold'>Simple Projects that you can make - </div>
       <div>
              <p className='pb-1'>1. Create a basic user authentication form that conditionally displays a welcome message when the user is logged in.</p>
              <p className='pb-1'>2. Build a product list that changes based on user filters or search criteria.</p>
             
       </div>
</div>

    {/* Youtube Video  */}
    <div>
       <div className='py-2 font-bold'>Yotube Videos that you can watch - </div>
       <iframe width="560" height="315" src="https://www.youtube.com/embed/7o5FPaVA9m0?si=i_I-UztYbKTC5wXk"  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
       <p className='py-2'>Conditional rendering is a fundamental concept in React, enabling you to create dynamic and interactive user interfaces that adapt to different scenarios and user interactions.</p>
    </div>

       </div>



    </div>
  )
}

export default ConditionalRendering





