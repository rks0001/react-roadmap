import React from 'react'
import context1 from '../../images/codesnippets/Screenshot 2023-10-20 231008.png'
import context2 from '../../images/codesnippets/Screenshot 2023-10-20 230536.png'
import context3 from '../../images/codesnippets/Screenshot 2023-10-20 230841.png'
const ContextAPI = () => {
      
  return (
    <div className='px-10 text-black'>
        {/* Why */}
        <div  className='pb-6'>
        <div className='font-bold text-lg'>Why to Use Context API:</div> 
       <div>
     <p>1. Context API provides a way to <b>manage global state </b>in your React application. It's especially useful for <b>sharing state </b>or data across multiple components <b>without</b> the need for  <b>extensive prop drilling</b>.</p>
     <p>2. Context API is <b>used</b> when you want to <b>avoid passing props</b> through intermediate components and <b>simplify state management</b>.</p>
       </div>
        </div>
       {/*When/Where  */}
       <div className='pb-6'>
       <div  className='font-bold text-lg'>When/Where to Use Context API:</div> 
       <div>
       <p>1. Use Context API <b>when</b> you have data or <b>state</b> that <b>needs to be accessed</b> by multiple components <b>at different levels of</b>  your <b>component tree</b>.</p>
       <p>2. It's commonly <b>used</b> for <b>themes</b>, <b>authentication</b>, <b>language preferences</b>, and other global application state.</p>
       </div>

       </div>
      
       {/*When/Where  */}
       <div className='pb-6'>
       <div  className='font-bold text-lg'>How to Use Context API :</div> 
       {/* Create  */}
       <div className='pb-2'>
       <div className='font-semibold'>1. Creating a Context</div>
       <p className='pb-2'>Create a context using <b>createContext()</b>.</p>
       <div>
              <img src={context1} className='w-9/12 rounded-sm' alt="srccode"></img>
              <div>
              
              </div>
       </div>
       </div>
        {/* Provider  */}
        <div className='pb-2'>
       
       <div className='font-semibold'>2. Provider Component:</div>
       <p className='pb-2'> Create a provider component that <b>wraps your application</b> and provides the context values.</p>
       <div>
              <img src={context2} className='w-9/12 rounded-sm' alt="srccode"></img>
              <div>
              
              </div>
       </div>
       </div>
          {/* Consuming  */}
          <div className='pb-2'>
       
       <div className='font-semibold'>3. Consuming the Context:</div>
       <p className='pb-2'> Use the useContext hook to  <b>consume the context</b> in any component.</p>
       <div>
              <img src={context3} className='w-9/12 rounded-sm' alt="srccode"></img>
              <div>
              
              </div>
       </div>
       </div>
    {/*  Projects*/}
<div>
       <div className='py-2 font-bold'>Simple Projects that you can make - </div>
       <div>
              <p className='pb-1'>1. Create a theme switcher using Context API to switch between light and dark themes.</p>
              <p className='pb-1'>2. Implement user authentication and authorization with Context API.</p>
       </div>
</div>

    {/* Youtube Video  */}
    <div>
       <div className='py-2 font-bold'>Yotube Videos that you can watch - </div>
       <iframe width="560" height="315" src="https://www.youtube.com/embed/sP7ANcTpJr8?si=ls7dOMIycrnKL5rl"  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
       <p className='py-2'>Context API is a powerful tool for managing global state in your React application, and it's widely used in complex applications to avoid prop drilling and make state management more efficient.</p>
    </div>

       </div>



    </div>
  )
}

export default ContextAPI