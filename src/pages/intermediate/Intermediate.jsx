import React from 'react'
import {DiReact} from 'react-icons/di'
const Intermediate = () => {
  return (
    <div className='px-10'>
        <div className='font-bold text-xl flex items-center gap-2'>Learn the Intermediate React Topics<DiReact  color='#000'/></div>
        <div>
            <ul>
                <li> - Events and Handling</li>
                <li> - Forms and Controlled Components</li>
                <li> - Lists and Keys</li>
                <li> - Component Composition</li>
                <li> - React Router</li>
            </ul>
        </div>
    </div>

  )
}

export default Intermediate