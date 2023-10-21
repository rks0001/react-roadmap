import React from 'react'
import redux1 from '../../images/codesnippets/redux1.png'
import redux2 from '../../images/codesnippets/redux2.png'
import redux3 from '../../images/codesnippets/redux3.png'
import redux4 from '../../images/codesnippets/redux4.png'
const Redux = () => {
      
  return (
    <div className='px-10 text-black'>
        {/* Why */}
        <div  className='pb-6'>
        <div className='font-bold text-lg'>Why to Use Redux:</div> 
       <div>
     <p>1. Redux is a predictable state container for JavaScript applications. It provides a centralized way to manage and share state across your entire application.</p>
     <p>2. It's beneficial when you have complex, interconnected state that needs to be accessed or updated from different parts of your application.</p>
       </div>
        </div>
       {/*When/Where  */}
       <div className='pb-6'>
       <div  className='font-bold text-lg'>When/Where to Use Redux:</div> 
       <div>
       <p>1. Use Redux when your application's state becomes too complex to manage with local component state and passing props.</p>
       <p>2. It's particularly helpful for larger applications, especially when you need to handle asynchronous data fetching, caching, and complex state updates.</p>
       </div>

       </div>
      
       {/*When/Where  */}
       <div className='pb-6'>
       <div  className='font-bold text-lg'>How to Use Redux :</div> 
       {/* Redux Store  */}
       <div className='pb-2'>
       <div className='font-semibold'>1. Redux Store Setup:</div>
       <p className='pb-2'>Create a Redux store that holds your application's state.</p>
       <div>
              <img src={redux1} className='w-9/12 rounded-sm' alt="srccode"></img>
              <div>
              
              </div>
       </div>
       </div>
        {/* Reducers  */}
        <div className='pb-2'>
       
       <div className='font-semibold'>2. Reducers:</div>
       <p className='pb-2'> Define reducers to specify how the application's state changes in response to actions.</p>
       <div>
              <img src={redux2} className='w-9/12 rounded-sm' alt="srccode"></img>
              <div>
              
              </div>
       </div>
       </div>
          {/* Actions  */}
          <div className='pb-2'>
       
       <div className='font-semibold'>3. Actions:</div>
       <p className='pb-2'> Create action creators to define the actions that can be dispatched.</p>
       <div>
              <img src={redux3} className='w-9/12 rounded-sm' alt="srccode"></img>
              <div>
              
              </div>
       </div>
       </div>
         {/* Using Redux  */}
         <div className='pb-2'>
       
       <div className='font-semibold'>4. Using Redux in React:</div>
       <p className='pb-2'> Connect your React components to the Redux store and dispatch actions.</p>
       <div>
              <img src={redux4} className='w-9/12 rounded-sm' alt="srccode"></img>
              <div>
              
              </div>
       </div>
       </div>
    {/*  Projects*/}
<div>
       <div className='py-2 font-bold'>Simple Projects that you can make - </div>
       <div>
              <p className='pb-1'>1. Create a "Shopping Cart" application that uses Redux for managing the cart state and allows users to add and remove items.</p>
             
       </div>
</div>

    {/* Youtube Video  */}
    <div>
       <div className='py-2 font-bold'>Yotube Videos that you can watch - </div>
       <iframe width="560" height="315" src="https://www.youtube.com/embed/dOkkHHuFxjM?si=eVHLHrPgNRRsTR1V"  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
       <p className='py-2'>Redux is a robust state management solution for React and is particularly useful for larger applications where the state needs to be shared and managed across multiple components efficiently.</p>
    </div>

       </div>



    </div>
  )
}

export default Redux