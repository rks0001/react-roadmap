import React from 'react'
import {DiReact} from 'react-icons/di'
const Beginner = () => {
  return (
    <div className='px-10'>
        <div className='font-bold text-xl flex items-center gap-2'>Learn the Beginner React Topics<DiReact  color='#000'/></div>
        <div>
            <ul>
                <li> - Introduction to React</li>
                <li> - JSX (JavaScript XML)</li>
                <li> - Components</li>
                <li> - State</li>
                <li> - Conditional Rendering</li>
            </ul>
        </div>
    </div>

  )
}

export default Beginner