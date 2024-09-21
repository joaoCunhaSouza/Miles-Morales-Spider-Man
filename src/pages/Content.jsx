import React from 'react';
import '../style/main-pages.css';
import images from "../imgs/images";


function Content() {
  return (
    <>
      {/* Seção de fundo e conteúdo principal */}



      <header className="primary-header">


        <img src={images.svg} alt="Photographer's insight" className="logo-png" />


        <nav className="primary-nav">
          <ul className="list">
            <li><a href="#">Home</a></li>
            <li><a href="#">Story</a></li>
            <li><a href="#">Wallpapers</a></li>
            <li><a href="#">SpiderMan2</a></li>
          </ul>
        </nav>

      </header>

      <div className="background-container">
        <img src={images.back} alt="Photographer's insight" className="background" />
      </div>





    </>
  );
}

export default Content;
