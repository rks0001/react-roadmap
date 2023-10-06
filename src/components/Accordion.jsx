import React, { useState } from 'react'

const Accordion = ({question,answer}) => {
    const [open, setOpen] = useState(false)

    const handleOpen = () =>{
        setOpen(!open)
    }
  return (
    <div>
        <div className='md:w-10/12 w-full py-4'>
            <div className="flex flex-row justify-between cursor-pointer" onClick={() => handleOpen()}><div className='text-base'>{question}</div><div>{open? '-' : '+'}</div></div>
                {open && 
                    <div className='text-sm py-3'>{answer}</div>
                }
        </div>
    
    </div>
  )
}

export default Accordion