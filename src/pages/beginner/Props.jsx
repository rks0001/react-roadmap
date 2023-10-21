import React from 'react'
import prop1 from '../../images/codesnippets/prop1.png'
import prop2 from '../../images/codesnippets/prop2.png'
import prop3 from '../../images/codesnippets/prop3.png'
import prop4 from '../../images/codesnippets/prop4.png'
const Props = () => {
      
  return (
    <div className='px-10 text-black'>
        {/* Why */}
        <div  className='pb-6'>
        <div className='font-bold text-lg'>Why to Use Props:</div> 
       <div>
     <p>1. Props are a way to pass data from a parent component to a child component in React.</p>
     <p>2. They are essential for creating dynamic and reusable components that can display different data based on the parent's input.</p>
    
       </div>
        </div>
       {/*When/Where  */}
       <div className='pb-6'>
       <div  className='font-bold text-lg'>When/Where to Use Props:</div> 
       <div>
       <p>1. Use props whenever you want to customize and configure child components based on the data and preferences of the parent component.</p>
       <p>2. Props are commonly used when you need to display dynamic data or pass functions to handle user interactions.</p>
       </div>

       </div>
      
       {/*When/Where  */}
       <div className='pb-6'>
       <div  className='font-bold text-lg'>How to Use Props:</div> 
       {/* Redux Store  */}
       <div className='pb-2'>
       <div className='font-semibold'>1. Passing Props:</div>
       <p className=''>In the parent component, pass data to the child component using attributes.</p>
       
       <div>
              <img src={prop1} className='w-9/12 rounded-sm' alt="srccode"></img>
              <div>
              
              </div>
       </div>
       </div>
        {/* Reducers  */}
        <div className='pb-2'>
       
       <div className='font-semibold'>2. Receiving Props:</div>
       <p className='pb-2'>In the child component, access and use the passed props as variables.</p>
       <div>
              <img src={prop2} className='w-9/12 rounded-sm' alt="srccode"></img>
              <div>
              
              </div>
       </div>
       </div>
         {/* Reducers  */}
        <div className='pb-2'>
       
       <div className='font-semibold'>3. Default Props:</div>
       <p className='pb-2'>You can define default values for props in case they are not provided by the parent component.</p>
       <div>
              <img src={prop3} className='w-9/12 rounded-sm' alt="srccode"></img>
              <div>
              
              </div>
       </div>
       </div>
       {/* Reducers  */}
       <div className='pb-2'>
       
       <div className='font-semibold'>4. Children Props:</div>
       <p className='pb-2'>Props can also be used to pass child elements or components to other components.</p>
       <div>
              <img src={prop4} className='w-9/12 rounded-sm' alt="srccode"></img>
              <div>
              
              </div>
       </div>
       </div>
    {/*  Projects*/}
<div>
       <div className='py-2 font-bold'>Simple Projects that you can make - </div>
       <div>
              <p className='pb-1'>1. Create a simple user profile component that receives and displays user data such as name, email, and profile picture via props.</p>
              <p className='pb-1'>2. Build a reusable card component that can receive custom content as children via props.</p>
             
       </div>
</div>

    {/* Youtube Video  */}
    <div>
       <div className='py-2 font-bold'>Yotube Videos that you can watch - </div>
       <iframe width="560" height="315" src="https://www.youtube.com/embed/VpGFuThTjhY?si=EXz0SeTr6o3kdeol"  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
       <p className='py-2'>Props are fundamental to React development, as they enable you to create reusable and dynamic components that can display different data and content based on the input provided by the parent component</p>
    </div>

       </div>



    </div>
  )
}

export default Props


