import React from 'react'
import jsx1 from '../../images/codesnippets/jsx1.png'
import jsx2 from '../../images/codesnippets/jsx2.png'
import jsx3 from '../../images/codesnippets/jsx3.png'
import jsx4 from '../../images/codesnippets/jsx4.png'
const LearnJSX = () => {
      
  return (
    <div className='px-10 text-black'>
        {/* Why */}
        <div  className='pb-6'>
        <div className='font-bold text-lg'>Why to Use JSX:</div> 
       <div>
     <p>1. JSX is a syntax extension for JavaScript that makes it easier to write and structure user interfaces.</p>
     <p>2. It's a fundamental part of React, as it allows you to describe the structure and content of your UI components in a more readable and HTML-like way.</p>
     
       </div>
        </div>
       {/*When/Where  */}
       <div className='pb-6'>
       <div  className='font-bold text-lg'>When/Where to Use JSX:</div> 
       <div>
       <p>1. Use JSX whenever you are defining the structure and content of your React components.</p>
       <p>2. JSX is essential for building the user interface of your React applications.</p>
       </div>

       </div>
      
       {/*When/Where  */}
       <div className='pb-6'>
       <div  className='font-bold text-lg'>How to Use JSX:</div> 
       {/* Redux Store  */}
       <div className='pb-2'>
       <div className='font-semibold'>1. Understanding JSX Syntax:</div>
       <p className=''>JSX allows you to embed HTML-like syntax directly in your JavaScript code.</p>
       <p className='pb-2'>You can create a React project using the Create React App tool.</p>
       <div>
              <img src={jsx1} className='w-9/12 rounded-sm' alt="srccode"></img>
              <div>
              
              </div>
       </div>
       </div>
        {/* Reducers  */}
        <div className='pb-2'>
       
       <div className='font-semibold'>2. Embedding Expressions:</div>
       <p className='pb-2'>You can embed JavaScript expressions within JSX using curly braces {}.</p>
       <div>
              <img src={jsx2} className='w-9/12 rounded-sm' alt="srccode"></img>
              <div>
              
              </div>
       </div>
       </div>
         {/* Reducers  */}
        <div className='pb-2'>
       
       <div className='font-semibold'>3. Using JSX within Components:</div>
       <p className='pb-2'>In React components, JSX is used to define the component's structure and content.</p>
       <div>
              <img src={jsx3} className='w-9/12 rounded-sm' alt="srccode"></img>
              <div>
              
              </div>
       </div>
       </div>
       {/* Reducers  */}
       <div className='pb-2'>
       
       <div className='font-semibold'>4. Self-Closing Tags:</div>
       <p className='pb-2'>In React components, JSX is used to define the component's structure and content.</p>
       <div>
              <img src={jsx4} className='w-9/12 rounded-sm' alt="srccode"></img>
              <div>
              
              </div>
       </div>
       </div>
    {/*  Projects*/}
<div>
       <div className='py-2 font-bold'>Simple Projects that you can make - </div>
       <div>
              <p className='pb-1'>1. Build a simple web page that uses JSX to create a header, content, and footer sections.</p>
              
             
       </div>
</div>

    {/* Youtube Video  */}
    <div>
       <div className='py-2 font-bold'>Yotube Videos that you can watch - </div>
       <iframe width="560" height="315" src="https://www.youtube.com/embed/7fPXI_MnBOY?si=HAtwh4wkqJiD57kx"  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
       <p className='py-2'>Understanding JSX is crucial for working with React, as it simplifies the process of creating and rendering UI components, making your code more readable and maintainable.</p>
    </div>

       </div>



    </div>
  )
}

export default LearnJSX


