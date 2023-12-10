import React from 'react';
import './ImageSection.css'; // Import the CSS file

function ImageSection({ backgroundImage, children }) {
    return (
        <div 
            className="imagesection" 
            id="image-reveal-section" 
            style={{ background: `url(${backgroundImage}) no-repeat center center/cover fixed` }}>
            {children}
        </div>
    );
}

export default ImageSection;
