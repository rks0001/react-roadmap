import React from 'react'
import auth1 from '../../images/codesnippets/auth1.png'
import auth2 from '../../images/codesnippets/auth2.png'
const Authentication = () => {
      
  return (
    <div className='px-10 text-black'>
        {/* Why */}
        <div  className='pb-6'>
        <div className='font-bold text-lg'>Why to Use Authentication and Authorization:</div> 
       <div>
     <p>1. Authentication is used to verify the identity of users accessing your application. Authorization determines what actions users are allowed to perform.</p>
     <p>2. These are essential for securing your application, protecting user data, and ensuring that users have the correct permissions.</p>
       </div>
        </div>
       {/*When/Where  */}
       <div className='pb-6'>
       <div  className='font-bold text-lg'>When/Where to Use Authentication and Authorization:</div> 
       <div>
       <p>1. Use authentication when you want to restrict access to certain parts of your application or when you need to personalize content based on the user.</p>
       <p>2. Authorization is used when you want to control what actions a user can perform, such as editing, deleting, or creating content.</p>
       <p>3. These are crucial for applications involving user accounts, private data, and user-specific actions.</p>
       </div>

       </div>
      
       {/*When/Where  */}
       <div className='pb-6'>
       <div  className='font-bold text-lg'>How to Use Authentication and Authorization:</div> 
       {/* Create  */}
       <div className='pb-2'>
       <div className='font-semibold'>1. Authentication with Firebase:</div>
       <p className='pb-2'>Firebase Authentication is a popular solution for user authentication.</p>
       <div>
              <img src={auth1} className='w-9/12 rounded-sm' alt="srccode"></img>
              <div>
              
              </div>
       </div>
       </div>
        {/* Provider  */}
        <div className='pb-2'>
       
       <div className='font-semibold'>2. Authorization with React Router:</div>
       <p className='pb-2'> Use React Router for controlling access to different routes based on user roles.</p>
       <div>
              <img src={auth2} className='w-9/12 rounded-sm' alt="srccode"></img>
              <div>
              
              </div>
       </div>
       </div>
         
    {/*  Projects*/}
<div>
       <div className='py-2 font-bold'>Simple Projects that you can make - </div>
       <div>
              <p className='pb-1'>1. Create a basic user registration and login system with Firebase Authentication..</p>
              <p className='pb-1'>2. Build a content management system where users can create, edit, and delete their own posts, demonstrating authorization.</p>
       </div>
</div>

    {/* Youtube Video  */}
    <div>
       <div className='py-2 font-bold'>Yotube Videos that you can watch - </div>
       <iframe width="560" height="315" src="https://www.youtube.com/embed/PKwu15ldZ7k?si=y8kU8gkVY82Q7PY6"  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
       <p className='py-2'>Authentication and authorization are crucial for securing your React applications and providing personalized experiences for users while controlling access to sensitive data and functionality.</p>
    </div>

       </div>



    </div>
  )
}

export default Authentication