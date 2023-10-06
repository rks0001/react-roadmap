import React, { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';

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
  };
  const closeMenu = () => {
    // Close the menu by setting menu state to false
    setMenu(false);
  };


  return (
    <div className='w-full h-full dark'>
 <div className="w-10/12 m-auto dark flex flex-row justify-between items-center py-6 px-8">
      <div className="font-semibold text-2xl z-100">ithvaraa</div>

      {window.innerWidth <= 768 && (
        <div className="md:hidden z-10" onClick={() => handleMenu()}>
          <GiHamburgerMenu style={{ fontSize: '24px' }} />
        </div>
      )}

      {/* Conditional rendering based on the menu state */}
      {menu && (
        <div className="dark w-full md:w-auto absolute left-0 top-0 pt-28 p-10 md:relative md:p-0">
          <ul className="flex flex-col gap-6 md:flex-row">
            <Link to="/" onClick={closeMenu}> 
            <li className="font-medium border-b-transparent border-b-4 hover:border-b-4 hover:border-b-white transition-none">
              Home
            </li>
            </Link>
            <Link to="/destination" onClick={closeMenu}> 
            <li className="font-medium border-b-transparent border-b-4 hover:border-b-4 hover:border-b-white transition-none">
              Destination
            </li>
            </Link>
            <Link to="/expedition" onClick={closeMenu}> 
            <li className="font-medium border-b-transparent border-b-4 hover:border-b-4 hover:border-b-white transition-none">
              Expedition
            </li>
            </Link>
            <Link to="/reviews" onClick={closeMenu}> 
            <li className="font-medium border-b-transparent border-b-4 hover:border-b-4 hover:border-b-white transition-none">
              Reviews
            </li>
            </Link>
            <Link to="/faq" onClick={closeMenu}> 
            <li className="font-medium border-b-transparent border-b-4 hover:border-b-4 hover:border-b-white transition-none">
              FAQ
            </li>
            </Link>
          </ul>
        </div>
      )}

      <div className="hidden md:block">
        <button className="bg-[#206244] px-4 py-3">Get Started</button>
      </div>
    </div>
    </div>
   
  );
};

export default Navbar;
