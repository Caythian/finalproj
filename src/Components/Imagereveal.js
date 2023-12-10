import React, { useState, useEffect } from 'react';
import './ImageSection.css';

function ImageSection({ backgroundImage, children }) {
  const [isVisible, setIsVisible] = useState(true); // Default to true
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 600;
      setIsMobile(mobile);

      // If not mobile, always show children
      if (!mobile) {
        setIsVisible(true);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleVisibility = () => {
    if (isMobile) {
      setIsVisible(!isVisible);
    }
  };

  return (
      <div 
          className="imagesection" 
          id="image-reveal-section"
          style={{ backgroundImage: `url(${backgroundImage})` }}
          onClick={toggleVisibility}>
          {isVisible && children}
      </div>
  );
}

export default ImageSection;
