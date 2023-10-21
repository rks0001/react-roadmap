import React from 'react'
import comp1 from '../../images/codesnippets/comp1.png'
import comp2 from '../../images/codesnippets/comp2.png'

const ComponentComposition = () => {
      
  return (
    <div className='px-10 text-black'>
        {/* Why */}
        <div  className='pb-6'>
        <div className='font-bold text-lg'>Why to Use Component Composition:</div> 
       <div>
     <p>1. Component composition is a fundamental concept that allows you to build complex UIs by combining and reusing smaller, self-contained components.</p>
     <p>2. It promotes reusability, maintainability, and separation of concerns in your application.</p>
       </div>
        </div>
       {/*When/Where  */}
       <div className='pb-6'>
       <div  className='font-bold text-lg'>When/Where to Use Component Composition:</div> 
       <div>
       <p>1. Use component composition when building large and modular applications to break down the UI into smaller, reusable pieces.</p>
       <p>2. It's especially useful when you want to maintain a clean and organized codebase by separating different parts of your application into components.</p>
       </div>

       </div>
      
       {/*When/Where  */}
       <div className='pb-6'>
       <div  className='font-bold text-lg'>How to Use Component Composition :</div> 
       {/* Redux Store  */}
       <div className='pb-2'>
       <div className='font-semibold'>1. Nesting Components:</div>
       <p className='pb-2'>Create a component hierarchy by nesting components within each other.</p>
       <div>
              <img src={comp1} className='w-9/12 rounded-sm' alt="srccode"></img>
              <div>
              
              </div>
       </div>
       </div>
        {/* Reducers  */}
        <div className='pb-2'>
       
       <div className='font-semibold'>2. Passing Components as Props:</div>
       <p className='pb-2'>Pass components as props to other components to create more dynamic and flexible layouts.</p>
       <div>
              <img src={comp2} className='w-9/12 rounded-sm' alt="srccode"></img>
              <div>
              
              </div>
       </div>
       </div>
         
    {/*  Projects*/}
<div>
       <div className='py-2 font-bold'>Simple Projects that you can make - </div>
       <div>
              <p className='pb-1'>1. Create a layout system that allows users to customize the arrangement and content of header, main content, and footer components.</p>
              <p className='pb-1'>2. Build a tabbed interface where each tab is a separate component, demonstrating how to switch between different sections of content using component composition.</p>
             
       </div>
</div>

    {/* Youtube Video  */}
    <div>
       <div className='py-2 font-bold'>Yotube Videos that you can watch - </div>
       <iframe width="560" height="315" src="https://www.youtube.com/embed/ZuvscIZ7Fn0?si=0Z-c1c-2kP5i_5qL"  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
       <p className='py-2'>Component composition is a powerful concept in React, enabling you to create complex and modular user interfaces by breaking them down into smaller, reusable building blocks. This promotes maintainability and reusability in your application.</p>
    </div>

       </div>



    </div>
  )
}

export default ComponentComposition
