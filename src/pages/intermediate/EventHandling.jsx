import React from 'react'
import event1 from '../../images/codesnippets/event1.png'
import event2 from '../../images/codesnippets/event2.png'

const EventHandling = () => {
      
  return (
    <div className='px-10 text-black'>
        {/* Why */}
        <div  className='pb-6'>
        <div className='font-bold text-lg'>Why to Use Event Handling:</div> 
       <div>
     <p>1. Event handling allows you to capture and respond to user interactions, such as clicks, keyboard inputs, and form submissions.</p>
     <p>2. Event handling is fundamental for creating interactive and dynamic user interfaces in React.</p>
       </div>
        </div>
       {/*When/Where  */}
       <div className='pb-6'>
       <div  className='font-bold text-lg'>When/Where to Use Event Handling:</div> 
       <div>
       <p>1. Use event handling whenever you need to capture and respond to user actions, like button clicks, form submissions, or keyboard events.</p>
       <p>2. Event handling is used in various parts of your application to trigger actions or state changes based on user input.</p>
       </div>

       </div>
      
       {/*When/Where  */}
       <div className='pb-6'>
       <div  className='font-bold text-lg'>How to Use Event Handling :</div> 
       {/* Redux Store  */}
       <div className='pb-2'>
       <div className='font-semibold'>1. Handling Click Events:</div>
       <p className='pb-2'>Use the onClick event to handle button clicks.</p>
       <div>
              <img src={event1} className='w-9/12 rounded-sm' alt="srccode"></img>
              <div>
              
              </div>
       </div>
       </div>
        {/* Reducers  */}
        <div className='pb-2'>
       
       <div className='font-semibold'>2. Handling Form Submissions:</div>
       <p className='pb-2'> Use the onSubmit event to handle form submissions.</p>
       <div>
              <img src={event2} className='w-9/12 rounded-sm' alt="srccode"></img>
              <div>
              
              </div>
       </div>
       </div>
         
    {/*  Projects*/}
<div>
       <div className='py-2 font-bold'>Simple Projects that you can make - </div>
       <div>
              <p className='pb-1'>1. Create a simple "Todo List" application that allows users to add and remove tasks using event handling.</p>
              <p className='pb-1'>2. Build a basic calculator application that performs calculations based on button clicks.</p>
             
       </div>
</div>

    {/* Youtube Video  */}
    <div>
       <div className='py-2 font-bold'>Yotube Videos that you can watch - </div>
       <iframe width="560" height="315" src="https://www.youtube.com/embed/Znqv84xi8Vs?si=d8cpAxD1x8XZ31Wt"  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
       <p className='py-2'>Event handling is a fundamental part of React development, enabling your application to respond to user interactions and make your user interface dynamic and interactive.</p>
    </div>

       </div>



    </div>
  )
}

export default EventHandling