import React from 'react'
import compo1 from '../../images/codesnippets/compo1.png'
import compo2 from '../../images/codesnippets/compo2.png'
import compo3 from '../../images/codesnippets/compo3.png'
import compo4 from '../../images/codesnippets/compo4.png'
const Components = () => {
      
  return (
    <div className='px-10 text-black'>
        {/* Why */}
        <div  className='pb-6'>
        <div className='font-bold text-lg'>Why to use Components:</div> 
       <div>
     <p>1. Components are the building blocks of React applications, allowing you to create reusable, self-contained pieces of UI.</p>
     <p>2. They help break down complex UIs into manageable parts and promote reusability and maintainability.</p>
    
       </div>
        </div>
       {/*When/Where  */}
       <div className='pb-6'>
       <div  className='font-bold text-lg'>When/Where to use Components:</div> 
       <div>
       <p>1. Use components whenever you want to represent a part of your UI as a self-contained unit.</p>
       <p>2. Components are essential in building large and complex web applications to organize and structure your code.</p>
       </div>

       </div>
      
       {/*When/Where  */}
       <div className='pb-6'>
       <div  className='font-bold text-lg'>How to use Components:</div> 
       {/* Redux Store  */}
       <div className='pb-2'>
       <div className='font-semibold'>1. Functional Components:</div>
       <p className=''>Create functional components using JavaScript functions.</p>
     
       <div>
              <img src={compo1} className='w-9/12 rounded-sm' alt="srccode"></img>
              <div>
              
              </div>
       </div>
       </div>
        {/* Reducers  */}
        <div className='pb-2'>
       
       <div className='font-semibold'>2. Class Components:</div>
       <p className='pb-2'>Create class components using JavaScript classes (older approach).</p>
       <div>
              <img src={compo2} className='w-9/12 rounded-sm' alt="srccode"></img>
              <div>
              
              </div>
       </div>
       </div>
         {/* Reducers  */}
        <div className='pb-2'>
       
       <div className='font-semibold'>3. Nesting Components:</div>
       <p className='pb-2'>Compose larger UIs by nesting multiple components within each other.</p>
       <div>
              <img src={compo3} className='w-9/12 rounded-sm' alt="srccode"></img>
              <div>
              
              </div>
       </div>
       </div>
          {/* Reducers  */}
          <div className='pb-2'>
       
       <div className='font-semibold'>4. Props:</div>
       <p className='pb-2'>Pass data to components using props (short for properties).</p>
       <div>
              <img src={compo4} className='w-9/12 rounded-sm' alt="srccode"></img>
              <div>
              
              </div>
       </div>
       </div>
         {/* Reducers  */}
         <div className='pb-2'>
       
       <div className='font-semibold'>5. Exporting and Importing Components:</div>
       <p className='pb-2'>Organize your React application by exporting and importing components as needed.</p>
       <div>

       </div>
       </div>
    {/*  Projects*/}
<div>
       <div className='py-2 font-bold'>Simple Projects that you can make - </div>
       <div>
              <p className='pb-1'>1. Create a basic "Hello World" application with multiple components, including a parent and child component.</p>
              <p className='pb-1'>2. Build a simple navigation menu that consists of different components for navigation items.</p>
             
       </div>
</div>

    {/* Youtube Video  */}
    <div>
       <div className='py-2 font-bold'>Yotube Videos that you can watch - </div>
       <iframe width="560" height="315" src="https://www.youtube.com/embed/f2mMOiCSj5c?si=ePXJC2r8DUpNJaxG"  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
       <p className='py-2'>Components are the fundamental building blocks in React. They allow you to break down your application into smaller, reusable parts, making your code more organized and maintainable.</p>
    </div>

       </div>



    </div>
  )
}

export default Components


