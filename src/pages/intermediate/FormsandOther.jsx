import React from 'react'
import event1 from '../../images/codesnippets/event1.png'
import event2 from '../../images/codesnippets/event2.png'

const FormsandOther = () => {
      
  return (
    <div className='px-10 text-black'>
        {/* Why */}
        <div  className='pb-6'>
        <div className='font-bold text-lg'>Why to Use Forms and Controlled Components:</div> 
       <div>
     <p>1. Forms are used to gather user input, such as text, checkboxes, and radio buttons.</p>
     <p>2. Controlled components are React components where the form data is handled by the component's state, providing a single source of truth for the form's data.</p>
       </div>
        </div>
       {/*When/Where  */}
       <div className='pb-6'>
       <div  className='font-bold text-lg'>When/Where to Use Forms and Controlled Components:</div> 
       <div>
       <p>1. Use forms when you need to collect data from the user, such as login information, search queries, or registration details.</p>
       <p>2. Controlled components are particularly useful when you want to manage, validate, and control the form data and its behavior.</p>
       </div>

       </div>
      
       {/*When/Where  */}
       <div className='pb-6'>
       <div  className='font-bold text-lg'>How to Use Forms and Controlled Components:</div> 
       {/* Redux Store  */}
       <div className='pb-2'>
       <div className='font-semibold'>1. Controlled Text Input:</div>
       <p className='pb-2'>Create a controlled text input field, where the component's state controls the input value.</p>
       <div>
              <img src={event1} className='w-9/12 rounded-sm' alt="srccode"></img>
              <div>
              
              </div>
       </div>
       </div>
        
         {/* Redux Store  */}
       <div className='pb-2'>
       <div className='font-semibold'>2. Controlled Checkbox:</div>
       <p className='pb-2'>Create a controlled checkbox input.</p>
       <div>
              <img src={event2} className='w-9/12 rounded-sm' alt="srccode"></img>
              <div>
              
              </div>
       </div>
       </div>
    {/*  Projects*/}
<div>
       <div className='py-2 font-bold'>Simple Projects that you can make - </div>
       <div>
              <p className='pb-1'>1. Create a registration form that uses controlled components to collect and validate user information.</p>
              <p className='pb-1'>2. Build a task management application with controlled components for adding, editing, and deleting tasks.</p>
             
       </div>
</div>

    {/* Youtube Video  */}
    <div>
       <div className='py-2 font-bold'>Yotube Videos that you can watch - </div>
       <iframe className='py-2' width="560" height="315" src="https://www.youtube.com/embed/7Vo_VCcWupQ?si=DhASGRf4nJmtxX8c"  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
       <iframe className='py-2'  width="560" height="315" src="https://www.youtube.com/embed/ecY3QSxZZYY?si=89j3eUj5AE9oF5Rg"  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
       <p className='py-2'>Controlled components provide precise control over form data, making it easier to validate, manipulate, and interact with user input in your React applications.</p>
    </div>

       </div>



    </div>
  )
}

export default FormsandOther