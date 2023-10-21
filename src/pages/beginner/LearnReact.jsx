import React from 'react'
import rc1 from '../../images/codesnippets/rc1.png'
import rc2 from '../../images/codesnippets/rc2.png'
import rc3 from '../../images/codesnippets/rc3.png'
import rc4 from '../../images/codesnippets/rc4.png'

const LearnReact = () => {
      
  return (
    <div className='px-10 text-black'>
        {/* Why */}
        <div  className='pb-6'>
        <div className='font-bold text-lg'>Why to use React:</div> 
       <div>
     <p>1. React is a JavaScript library for building user interfaces.</p>
     <p>2. It's widely used for developing modern, interactive, and dynamic web applications.</p>
     <p>2. React allows you to create reusable UI components and efficiently update and render data as the user interacts with the application.</p>
    
       </div>
        </div>
       {/*When/Where  */}
       <div className='pb-6'>
       <div  className='font-bold text-lg'>When/Where to use React:</div> 
       <div>
       <p>1. React is ideal for building single-page applications (SPAs) and dynamic web applications.</p>
       <p>2. Use React when you want to create interactive user interfaces with complex state management.</p>
       </div>

       </div>
      
       {/*When/Where  */}
       <div className='pb-6'>
       <div  className='font-bold text-lg'>How to use React:</div> 
       {/* Redux Store  */}
       <div className='pb-2'>
       <div className='font-semibold'>1. Setting Up Your Environment:</div>
       <p className=''>Get started by setting up your development environment, including Node.js and a code editor.</p>
       <p className=''>You can create a React project using the Create React App tool.</p>
       <div>

       </div>
       </div>
        {/* Reducers  */}
        <div className='pb-2'>
       
       <div className='font-semibold'>2. Understanding the Virtual DOM:</div>
       <p className='pb-2'>Learn about the virtual DOM, a key concept in React that improves rendering efficiency.</p>
       <div>
              
       </div>
       </div>
         {/* Reducers  */}
        <div className='pb-2'>
       
       <div className='font-semibold'>3. Creating Your First React Component:</div>
       <p className='pb-2'>Build your first React component, which is the fundamental building block of React applications.</p>
       <p className='pb-2'>Use JSX (JavaScript XML) to define the component's structure.</p>
       <div>
              <img src={rc1} className='w-9/12 rounded-sm' alt="srccode"></img>
              <div>
              
              </div>
       </div>
       </div>
          {/* Reducers  */}
          <div className='pb-2'>
       
       <div className='font-semibold'>4. Rendering Components:</div>
       <p className='pb-2'>Render React components into the DOM using ReactDOM.render().</p>
       <div>
              <img src={rc2} className='w-9/12 rounded-sm' alt="srccode"></img>
              <div>
              
              </div>
       </div>
       </div>
        {/* Reducers  */}
        <div className='pb-2'>
       
       <div className='font-semibold'>5. Component Props:</div>
       <p className='pb-2'>Understand how to pass data to components using props.</p>
       <div>
              <img src={rc3} className='w-9/12 rounded-sm' alt="srccode"></img>
              <div>
              
              </div>
       </div>
       </div>
           {/* Reducers  */}
           <div className='pb-2'>
       
       <div className='font-semibold'>6. Component State:</div>
       <p className='pb-2'>Learn how to manage local component state using useState or this.state in class components.</p>
       <div>
              <img src={rc4} className='w-9/12 rounded-sm' alt="srccode"></img>
              <div>
              
              </div>
       </div>
       </div>
          
       
    {/*  Projects*/}
<div>
       <div className='py-2 font-bold'>Simple Projects that you can make - </div>
       <div>
              <p className='pb-1'>1.Create a basic "To-Do List" application to apply the concepts learned in a practical project.</p>
           
             
       </div>
</div>

    {/* Youtube Video  */}
    <div>
       <div className='py-2 font-bold'>Yotube Videos that you can watch - </div>
       <iframe width="560" height="315" src="https://www.youtube.com/embed/b9eMGE7QtTk?si=yJz2TL9x84Ao3PTf"  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
       <p className='py-2'>The introduction to React provides the foundation for your journey into React development. Understanding the basic concepts and components will prepare you for more advanced topics and building complex applications.</p>
    </div>

       </div>



    </div>
  )
}

export default LearnReact





