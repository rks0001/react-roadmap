import React from 'react'
import {DiReact} from 'react-icons/di'
const Advanced = () => {
  return (
    <div className='px-10'>
        <div className='font-bold text-xl flex items-center gap-2'>Learn the Advanced React Topics<DiReact  color='#000'/></div>
        <div>
            <ul>
                <li> - Hooks</li>
                <li> - Context API</li>
                <li> - Redux</li>
                <li> - API Integration</li>
                <li> - Authentication and Authorization</li>
            </ul>
        </div>
    </div>

  )
}

export default Advanced