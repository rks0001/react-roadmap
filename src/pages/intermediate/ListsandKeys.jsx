import React from 'react'
import list1 from '../../images/codesnippets/list1.png'
import list2 from '../../images/codesnippets/list2.png'

const ListsandKeys = () => {
      
  return (
    <div className='px-10 text-black'>
        {/* Why */}
        <div  className='pb-6'>
        <div className='font-bold text-lg'>Why to Use Lists and Keys:</div> 
       <div>
     <p>1. Lists and keys are crucial when rendering multiple items in a React component, such as a list of elements, dynamic content, or components generated from data.</p>
     <p>2. Keys are used to help React identify and track individual elements in a list efficiently.</p>
       </div>
        </div>
       {/*When/Where  */}
       <div className='pb-6'>
       <div  className='font-bold text-lg'>When/Where to Use Lists and Keys:</div> 
       <div>
       <p>1. Use lists and keys when you want to display an array of elements or components dynamically.</p>
       <p>2. They are particularly useful when rendering dynamic data like a list of items, results from an API, or user-generated content.</p>
       </div>

       </div>
      
       {/*When/Where  */}
       <div className='pb-6'>
       <div  className='font-bold text-lg'>How to Use Lists and Keys :</div> 
       {/* Redux Store  */}
       <div className='pb-2'>
       <div className='font-semibold'>1. Rendering a List of Elements:</div>
       <p className='pb-2'>Map through an array to render a list of items.</p>
       <div>
              <img src={list1} className='w-9/12 rounded-sm' alt="srccode"></img>
              <div>
              
              </div>
       </div>
       </div>
        {/* Reducers  */}
        <div className='pb-2'>
       
       <div className='font-semibold'>2. Keys and Dynamic Data:</div>
       <p className='pb-2'> When rendering components with dynamic data, use unique keys for efficient rendering.</p>
       <div>
              <img src={list2} className='w-9/12 rounded-sm' alt="srccode"></img>
              <div>
              
              </div>
       </div>
       </div>
         
    {/*  Projects*/}
<div>
       <div className='py-2 font-bold'>Simple Projects that you can make - </div>
       <div>
              <p className='pb-1'>1. Create a dynamic task list that allows users to add and remove tasks with unique keys.</p>
              <p className='pb-1'>2. Build a product listing page that displays products fetched from an API with unique keys for each product.</p>
             
       </div>
</div>

    {/* Youtube Video  */}
    <div>
       <div className='py-2 font-bold'>Yotube Videos that you can watch - </div>
       <iframe width="560" height="315" src="https://www.youtube.com/embed/0sasRxl35_8?si=ybiOFp9K7VrDd5dJ"  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
       <p className='py-2'>Lists and keys are essential for efficiently rendering dynamic content in React, ensuring that React can identify and track individual elements for updates and optimizations..</p>
    </div>

       </div>



    </div>
  )
}

export default ListsandKeys
