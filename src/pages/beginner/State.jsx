import React from 'react'
import state1 from '../../images/codesnippets/state1.png'
import state2 from '../../images/codesnippets/state2.png'
import state3 from '../../images/codesnippets/state3.png'

const State = () => {
      
  return (
    <div className='px-10 text-black'>
        {/* Why */}
        <div  className='pb-6'>
        <div className='font-bold text-lg'>Why to Use State:</div> 
       <div>
     <p>1. State in React allows you to manage and update data within a component.</p>
     <p>2. It's crucial for creating dynamic and interactive user interfaces where data can change and trigger re-rendering.</p>
    
       </div>
        </div>
       {/*When/Where  */}
       <div className='pb-6'>
       <div  className='font-bold text-lg'>When/Where to Use State:</div> 
       <div>
       <p>1. Use state when you need to store and manage data that can change over time.</p>
       <p>2. State is commonly used for handling user input, maintaining UI component values, and responding to dynamic data changes.</p>
       </div>

       </div>
      
       {/*When/Where  */}
       <div className='pb-6'>
       <div  className='font-bold text-lg'>How to Use State:</div> 
       {/* Redux Store  */}
       <div className='pb-2'>
       <div className='font-semibold'>1. Using useState Hook:</div>
       <p className=''>In functional components, use the useState hook to declare and initialize component state.</p>
       
       <div>
              <img src={state1} className='w-9/12 rounded-sm' alt="srccode"></img>
              <div>
              
              </div>
       </div>
       </div>
        {/* Reducers  */}
        <div className='pb-2'>
       
       <div className='font-semibold'>2. Using Class Components:</div>
       <p className='pb-2'>In class components, define and initialize state in the component's constructor.</p>
       <div>
              <img src={state2} className='w-9/12 rounded-sm' alt="srccode"></img>
              <div>
              
              </div>
       </div>
       </div>
         {/* Reducers  */}
        <div className='pb-2'>
       
       <div className='font-semibold'>3. Updating State:</div>
       <p className='pb-2'>You can update state by calling the state updater function provided by useState or by using this.setState() in class components.</p>
       <div>
             
       </div>
       </div>
       {/* Reducers  */}
       <div className='pb-2'>
       
       <div className='font-semibold'>4. Passing State as Props:</div>
       <p className='pb-2'>State can be passed down to child components as props.</p>
       <div>
              <img src={state3} className='w-9/12 rounded-sm' alt="srccode"></img>
              <div>
              
              </div>
       </div>
       </div>
         {/* Reducers  */}
         <div className='pb-2'>
       
       <div className='font-semibold'>5. Lifting State Up:</div>
       <p className='pb-2'>When multiple components need access to the same state, it can be lifted up to a common parent component.</p>
       <div>
             
       </div>
       </div>
    {/*  Projects*/}
<div>
       <div className='py-2 font-bold'>Simple Projects that you can make - </div>
       <div>
              <p className='pb-1'>1. Create a counter application that uses state to manage and display the count.</p>
              <p className='pb-1'>2. Build a simple form with state management to handle user input and display the input value.</p>
             
       </div>
</div>

    {/* Youtube Video  */}
    <div>
       <div className='py-2 font-bold'>Yotube Videos that you can watch - </div>
       <iframe width="560" height="315" src="https://www.youtube.com/embed/4ORZ1GmjaMc?si=pykolvk9FmrFYoP5"  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
       <p className='py-2'>Learning about state in React is fundamental for building interactive and dynamic user interfaces. State enables you to manage and update data within your components, making your applications responsive and user-friendly.</p>
    </div>

       </div>



    </div>
  )
}

export default State


