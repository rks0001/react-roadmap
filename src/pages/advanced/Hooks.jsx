import React, { useState } from 'react'
import hook1 from '../../images/codesnippets/Screenshot 2023-10-20 223136.png'
import hook2 from '../../images/codesnippets/Screenshot 2023-10-20 224412.png'
const Hooks = () => {
       const [count, setCount] = useState(0);
  return (
    <div className='px-10 text-black'>
        {/* Why */}
        <div  className='pb-6'>
        <div className='font-bold text-lg'>Why to Use Hooks:</div> 
       <div>
       Hooks were introduced in React to allow functional components to manage state and side effects. Before hooks, you had to use class components for such tasks.
They simplify state management, reduce code duplication, and make it easier to share logic between components.
       </div>
        </div>
       {/*When/Where  */}
       <div className='pb-6'>
       <div  className='font-bold text-lg'>When/Where to Use Hooks:</div> 
       <div>
       Use hooks in functional components when you need to manage component state, perform side effects (e.g., data fetching), or encapsulate reusable logic.
Hooks are commonly used to replace class component lifecycle methods and state management.
       </div>

       </div>
      
       {/*When/Where  */}
       <div className='pb-6'>
       <div  className='font-bold text-lg'>How to Use Hooks:</div> 
       {/* USeState  */}
       <div className='pb-2'>
       <div className='font-semibold'>1. useState Hook</div>
       <p className='pb-2'>useState is used for managing local component state.</p>
       <div>
              <img src={hook1} className='w-9/12 rounded-sm' alt="srccode"></img>
              <div>
              <div>
                    <div className='font-semibold'>Result : </div> 
      <p className='py-1'>Count: {count}</p>
      <div className='flex gap-2'>
      <button className='bg-sky-400 px-4 py-1 rounded-sm' onClick={() => setCount(count - 1)}>Decrement</button>
      <button className='bg-sky-400 px-4 py-1 rounded-sm' onClick={() => setCount(count + 1)}>Increment</button>
      </div>
     
    </div>
              </div>
       </div>
       </div>
        {/* USeEffect  */}
        <div className='pb-2'>
       
       <div className='font-semibold'>2. useEffect Hook </div>
       <p className='pb-2'> useEffect is used for side effects like data fetching, DOM manipulation, and more.</p>
       <div>
              <img src={hook2} className='w-9/12 rounded-sm' alt="srccode"></img>
              <div>
              
              </div>
       </div>
       </div>
    {/*  Projects*/}
<div>
       <div className='py-2 font-bold'>Simple Projects that you can make - </div>
       <div>
              <p className='pb-1'>1. Create a "To-Do List" application with hooks for adding and removing tasks.</p>
              <p className='pb-1'>2. Build a real-time chat application using useState for managing messages and useEffect for real-time updates.</p>
       </div>
</div>

    {/* Youtube Video  */}
    <div>
       <div className='pt-2 font-bold'>Yotube Videos that you can watch - </div>
       <iframe  className='py-4' width="560" height="315" src="https://www.youtube.com/embed/mxK8b99iJTg?si=1Xbpdopt2TvpZFs4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
       <iframe width="560" height="315" src="https://www.youtube.com/embed/TNhaISOUy6Q?si=WDNQ4MIPeAWjo0z4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
    
       </div>



    </div>
  )
}

export default Hooks