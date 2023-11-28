import React from 'react';

function ImageSection({ backgroundImage, children }) {
  const sectionStyle = {
    background: `url(${backgroundImage}) no-repeat center center/cover fixed`,
    backgroundSize: 'cover',
    height: '400px', // Adjust the height as needed
    opacity: 1, // You can control other styles or add more based on props
    transition: 'opacity 0.3s ease-in-out',
  };

  return (
    <div id="image-reveal-section" style={sectionStyle}>
      {children}
    </div>
  );
}

export default ImageSection;
