import React from 'react'
import {DiReact} from 'react-icons/di'
const ReactZeroToHundred = () => {
  return (
    <div className='md:px-10'>
        <div className='font-bold text-xl'>Learn React with 3 questions</div>
        <div className='flex items-center gap-2'>
        <div>
            <ul>
                <li> - Why?</li>
                <li> - When/Where?</li>
                <li> - How?</li>
              
            </ul>
        </div>
        {/* --- */}
        <div>
        <DiReact size={80} color='#5ED4F3'/>
        </div>
        </div>
        <div className='font-semibold py-2'>You can refer to these Youtube Videos</div>
        <iframe  className=' py-2 w-full md:w-10/12  md:h-80'  src="https://www.youtube.com/embed/u6gSSpfsoOQ?si=-smo2hBzKotCByP8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <iframe  className=' py-2 w-full  md:w-10/12 md:h-80' src="https://www.youtube.com/embed/SqcY0GlETPk?si=GMdXha8C6sLIcqGU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <iframe  className=' py-2 w-full md:w-10/12  md:h-80'  src="https://www.youtube.com/embed/b9eMGE7QtTk?si=2itndrfLRnvNgQ7D" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        
    </div>

  )
}

export default ReactZeroToHundred

