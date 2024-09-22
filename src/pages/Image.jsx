import React from 'react';
import '../style/style.css'; 

function Image() {
  const glitchImages = Array(6).fill('../img/miles-900px.svg'); 

  return (
    
    <div className="image">
      
      <div className="image-overlay">
  
        <div className="miles-container">
          {glitchImages.map((src, index) => (
            <span className="glitch" key={index}>
              <div className={`jhon ${['first', 'second', 'third', 'four', 'five', 'six'][index]}`}>
                <img src={src} alt="Miles SVG" className="miles-svg" />
              </div>
            </span>
          ))}

      


          <img src="../img/miles-900px.svg" alt="Miles SVG" className="miles-svg" />
        </div>

        <div className="glitch-background"></div>

        <div className="loader">
          <div></div>
        </div>
      </div>
    </div>
    
  );
}

export default Image;
