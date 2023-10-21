import React from 'react'

const VideoLibrary = () => {
    return (
        <div className='dark w-full min-h-screen '>
          <div className='w-10/12 h-full mx-auto md:px-10'>
            <div className='font-bold text-2xl'>Video Library</div>
            {/* Beginner */}
            <div>
            <div className='font-semibold text-xl'>Beginner Level</div>
            <div className='font-semibold'>Introduction to React - <a className='text-sky-600' href='https://legacy.reactjs.org/docs/getting-started.html' target='_blank' rel="noreferrer">React Doumentation</a></div>
            <div className='font-semibold'>Basic React Concepts</div>
            <div>React Crash Course by Traversy Media - <a className='text-sky-600' href='https://www.youtube.com/watch?v=sBws8MSXN7A' target='_blank' rel="noreferrer">YouTube</a></div>
            <div>Codecademy's React Course - <a className='text-sky-600' href='https://www.codecademy.com/learn/react-101' target='_blank' rel="noreferrer">Codecademy React Course</a></div>
            </div>
           {/* Intermediate */}
           <div>
            <div className='font-semibold text-xl'>Intermediate Level</div>
            <div className='font-semibold'>React Routing</div>
            <div className=''>React Router Tutorial by Academind - <a className='text-sky-600' href='https://www.youtube.com/watch?v=Law7wfdg_ls' target='_blank' rel="noreferrer">YouTube</a></div>
            <div className='font-semibold'>State Management with Redux </div>
            <div className=''>Redux Tutorial - Beginner to Advanced - <a className='text-sky-600' href='https://www.youtube.com/watch?v=zrs7u6bdbUw' target='_blank' rel="noreferrer">YouTube</a></div>
            <div className='font-semibold'>React Context API </div>
            <div className=''>React Context API - <a className='text-sky-600' href='https://www.youtube.com/watch?v=sP7ANcTpJr8&t=4s' target='_blank' rel="noreferrer">YouTube</a></div>
            <div className='font-semibold text-xl'>Advanced Level</div>
            <div className='font-semibold'> React Suspense and Concurrent Mode -  </div>
            <div className=''>React Suspense and Concurrent Mode Blogs- <a className='text-sky-600' href='https://medium.com/swlh/what-is-react-concurrent-mode-46989b5f15da' target='_blank' rel="noreferrer">Blog1 </a> - <a className='text-sky-600' href='https://blog.bitsrc.io/4-best-ways-to-use-reacts-suspense-component-17b7e7788908?gi=0812337fef3e' target='_blank' rel="noreferrer">Blog2</a></div>
            <div className='font-semibold'>GraphQL and React -  </div>
            <div className=''>React and GraphQL by PedroTech - <a className='text-sky-600' href='https://youtu.be/YyUWW04HwKY?si=4vBNhUpHax6QCWq9' target='_blank' rel="noreferrer">YouTube</a></div>
            <div className='font-semibold text-xl'>Best Practices</div>
            <div className='font-semibold'>React Best Practices -  </div>
            <div className=''>React Best Practices by PedroTech and Fireship - <a className='text-sky-600' href='https://www.youtube.com/watch?v=5r4LlVAFrd0' target='_blank' rel="noreferrer">YouTube1</a> - <a className='text-sky-600' href='https://www.youtube.com/watch?v=b0IZo2Aho9Y' target='_blank' rel="noreferrer">YouTube2</a></div>
            <div className='font-semibold'>Code Style and Conventions-  </div>
            <div className=''>Airbnb's React/JSX Style Guide - <a className='text-sky-600' href='https://github.com/airbnb/javascript/tree/master/react' target='_blank' rel="noreferrer">Github</a></div>
            <div className='font-semibold'>Performance Optimization -  </div>
            <div className=''>React Performance Optimization by Kent C. Dodds - <a className='text-sky-600' href='https://kentcdodds.com/' target='_blank' rel="noreferrer">Quality Code</a></div>
            </div>
          </div>
        </div>
      )
}

export default VideoLibrary