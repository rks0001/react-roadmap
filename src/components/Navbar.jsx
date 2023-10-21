import React, { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import {PiMapTrifoldDuotone} from 'react-icons/pi'
import { Link } from 'react-router-dom';

 const navlinks = [
  {
    id:1, 
    title:'Home',
    url:'/',
  },
  {
    id:2, 
    title:'React 0 to 100',
    url:'/react-roadmap',
  },
  {
    id:3, 
    title:'Interview Prep',
    url:'/interview-prep',
  },
  {
    id:4, 
    title:'Video Library',
    url:'/video-library',
  },
  {
    id:5, 
    title:'Github Repos',
    url:'/github-repos',
  },
]
const Navbar = () => {
  const [menu, setMenu] = useState(false); // Initialize menu as false

  // Add an event listener to track screen width changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        // For screens wider than 768px, show the menu
        setMenu(true);
      } else {
        // For screens 768px and below, hide the menu initially
        setMenu(false);
      }
    };

    // Initial check
    handleResize();

    // Attach the event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMenu = () => {
    // Toggle the menu state
    setMenu(!menu);
    console.log("click")
  };
  const closeMenu = () => {
    // Close the menu by setting menu state to false
    if (window.innerWidth <= 768) {
      setMenu(false);
    }
  };


  return (
    <div className='w-full h-full dark'>
 <div className="w-10/12 m-auto dark flex flex-row justify-between items-center py-6 px-2 md:px-8">
      <Link onClick={() => closeMenu()} className='z-30' to="/"> <div className="flex  items-center gap-1 font-semibold text-2xl "><PiMapTrifoldDuotone color='#964B00'/>React Roadmap </div></Link>

      {window.innerWidth <= 768 && (
        <div className="md:hidden z-30" onClick={() => handleMenu()}>
          <GiHamburgerMenu style={{ fontSize: '24px' }} />
        </div>
      )}

      {/* Conditional rendering based on the menu state */}
      {menu && (
        <div className=" dark z-20 absolute w-full md:w-auto  left-0 top-0 pt-28 p-10 md:relative md:p-0">
          
          <ul className="flex flex-col gap-6 md:flex-row">
            {navlinks.map((link)=>(<Link key={link.id} to={link.url} onClick={() => closeMenu()}> 
            <li className="font-medium border-b-transparent border-b-4 hover:border-b-4 hover:border-b-[#1f1f1f] transition-none">
              {link.title}
            </li>
            </Link>))}
            
            
          </ul>
        </div>
      )}

      
    </div>
    </div>
   
  );
};

export default Navbar;
