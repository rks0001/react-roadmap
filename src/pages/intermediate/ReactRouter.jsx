import React from 'react'
import router1 from '../../images/codesnippets/router1.png'
import router2 from '../../images/codesnippets/router2.png'
import router3 from '../../images/codesnippets/router3.png'
const ReactRouter = () => {
      
  return (
    <div className='px-10 text-black'>
        {/* Why */}
        <div  className='pb-6'>
        <div className='font-bold text-lg'>Why to Use React Router:</div> 
       <div>
     <p>1. React Router is used to create a dynamic, single-page application (SPA) by managing the navigation and rendering of different views or components based on the URL.</p>
     <p>2. It enables you to build complex, multi-page-like applications without the need for traditional server-side navigation.</p>
       </div>
        </div>
       {/*When/Where  */}
       <div className='pb-6'>
       <div  className='font-bold text-lg'>When/Where to Use React Router:</div> 
       <div>
       <p>1. Use React Router when you want to navigate between different views or pages within your single-page application.</p>
       <p>2. It's particularly helpful for building applications with multiple routes, such as e-commerce sites, blogs, and dashboard applications.</p>
       </div>

       </div>
      
       {/*When/Where  */}
       <div className='pb-6'>
       <div  className='font-bold text-lg'>How to Use React Router:</div> 
       {/* Redux Store  */}
       <div className='pb-2'>
       <div className='font-semibold'>1. Setting up React Router:</div>
       <p className='pb-2'>Install and configure React Router in your application.</p>
       <div>
              <img src={router3} className='w-9/12 rounded-sm' alt="srccode"></img>
              <div>
              
              </div>
       </div>
       </div>
        {/* Reducers  */}
        <div className='pb-2'>
       
       <div className='font-semibold'>2. Defining Routes:</div>
       <p className='pb-2'>Define routes and associate them with components to render when a route matches.</p>
       <div>
              <img src={router1} className='w-9/12 rounded-sm' alt="srccode"></img>
              <div>
              
              </div>
       </div>
       </div>
         {/* Reducers  */}
        <div className='pb-2'>
       
       <div className='font-semibold'>3. Navigating Between Routes:</div>
       <p className='pb-2'>Use Link components to navigate between different routes.</p>
       <div>
              <img src={router2} className='w-9/12 rounded-sm' alt="srccode"></img>
              <div>
              
              </div>
       </div>
       </div>
    {/*  Projects*/}
<div>
       <div className='py-2 font-bold'>Simple Projects that you can make - </div>
       <div>
              <p className='pb-1'>1. Create a simple blog application with React Router, allowing users to navigate between different blog posts and view their details.</p>
              <p className='pb-1'>2. Build a portfolio website with multiple pages for projects, about, and contact information using React Router.</p>
             
       </div>
</div>

    {/* Youtube Video  */}
    <div>
       <div className='py-2 font-bold'>Yotube Videos that you can watch - </div>
       <iframe width="560" height="315" src="https://www.youtube.com/embed/ehvS1Hp90KU?si=eg8u5X0f3oNaaQ0r"  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
       <p className='py-2'>React Router is a powerful library for adding client-side routing to your React applications, providing seamless navigation between different views or components while maintaining a single-page application architecture.</p>
    </div>

       </div>



    </div>
  )
}

export default ReactRouter


