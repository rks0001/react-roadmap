import React from 'react'
import api1 from '../../images/codesnippets/api1.png'
import api2 from '../../images/codesnippets/api2.png'
const APIIntegration = () => {
      
  return (
    <div className='px-10 text-black'>
        {/* Why */}
        <div  className='pb-6'>
        <div className='font-bold text-lg'>Why to Use API Integration:</div> 
       <div>
     <p>1. API integration allows your React application to communicate with external services and retrieve data, making your app dynamic and interactive..</p>
     <p>2. It's essential when you want to fetch data from a server, post data, or perform various operations that require interaction with external APIs.</p>
       </div>
        </div>
       {/*When/Where  */}
       <div className='pb-6'>
       <div  className='font-bold text-lg'>When/Where to Use API Integration:</div> 
       <div>
       <p>1. Use API integration whenever you need to fetch, send, or manipulate data from an external source like a REST API or GraphQL endpoint.</p>
       <p>2. It's common in applications that require real-time data updates, user authentication, or access to external data sources.</p>
   
       </div>

       </div>
      
       {/*When/Where  */}
       <div className='pb-6'>
       <div  className='font-bold text-lg'>How to Use API Integration :</div> 
       {/* Create  */}
       <div className='pb-2'>
       <div className='font-semibold'>1. Fetching Data from an API:</div>
       <p className='pb-2'>Use the fetch API or libraries like Axios to make HTTP requests.</p>
       <div>
              <img src={api1} className='w-9/12 rounded-sm' alt="srccode"></img>
              <div>
              
              </div>
       </div>
       </div>
        {/* Provider  */}
        <div className='pb-2'>
       
       <div className='font-semibold'>2. POST Request for Sending Data:</div>
       <p className='pb-2'> Use the fetch API to send data to an API.</p>
       <div>
              <img src={api2} className='w-9/12 rounded-sm' alt="srccode"></img>
              <div>
              
              </div>
       </div>
       </div>
         
    {/*  Projects*/}
<div>
       <div className='py-2 font-bold'>Simple Projects that you can make - </div>
       <div>
              <p className='pb-1'>1. Build a weather app that fetches weather data from a public API and displays it to the user.</p>
              <p className='pb-1'>2. Create a simple task management app that allows users to add, edit, and delete tasks by interacting with a REST API.</p>
       </div>
</div>

    {/* Youtube Video  */}
    <div>
       <div className='py-2 font-bold'>Yotube Videos that you can watch - </div>
       <iframe width="560" height="315" src="https://www.youtube.com/embed/je3FTTunyp4?si=pRs-lwaM--4fMBrN"  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
       <p className='py-2'>API integration is a fundamental part of building dynamic and data-driven React applications. It enables your app to interact with external services and display real-time or user-specific data.</p>
    </div>

       </div>



    </div>
  )
}

export default APIIntegration