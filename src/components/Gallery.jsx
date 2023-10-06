import React, { useState, useEffect } from "react";
import image1 from '../images/image1.jpg'
import image2 from '../images/image2.jpg'
import image3 from '../images/image3.jpg'
const imageUrls = [
 image1,image2,image3
  
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
<div className="h-[60vh] ">
<img
        src={imageUrls[currentIndex]}
        alt="images"
        className="w-full h-full object-cover rounded-xl"
      />
</div>
      
   
  );
};

export default Gallery;
