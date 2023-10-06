import React, { useState, useEffect } from "react";

import image2 from '../images/image2.jpg'
import image3 from '../images/image3.jpg'
const imageUrls = [
 image2,image3,'https://images.unsplash.com/photo-1625826414837-9e2c27f95f92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80','https://images.unsplash.com/photo-1620358594775-050d831306a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1951&q=80','https://images.unsplash.com/photo-1552978534-9d01e1f91517?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80','https://images.unsplash.com/photo-1594514113865-d1deac339435?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2001&q=80','https://images.unsplash.com/photo-1574840250209-0112766aadbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80','https://images.unsplash.com/photo-1639134956623-0d094b12b0dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80','https://images.unsplash.com/photo-1639134956519-3ce73019ef84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80','https://images.unsplash.com/photo-1668437824006-1be44600774b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80','https://images.unsplash.com/photo-1648963798785-90197026eb79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80','https://images.unsplash.com/photo-1648963798318-d6b299ce0ab5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Function to increment the current index and loop back to 0
    const incrementIndex = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    };

    // Set up the interval to change the image every 3 seconds
    const intervalId = setInterval(incrementIndex, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
<div className="h-[60vh]  ">
<img
        src={imageUrls[currentIndex]}
        alt="images"
        className="w-full h-full object-cover rounded-sm "
      />
</div>
      
   
  );
};

export default Gallery;
