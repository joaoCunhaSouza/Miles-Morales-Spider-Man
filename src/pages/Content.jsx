import React from 'react';
import '../style/main-pages.css';
import images from "../imgs/images";
import '@fortawesome/fontawesome-free/css/all.min.css';


function Content() {
  return (
    <>
      {/* Seção de fundo e conteúdo principal */}



      <header className="primary-header">


        <img src={images.svg} alt="Photographer's insight" className="logo-png" />


        <nav className="primary-nav">
          <ul className="list">
            <li><a href="#" class="active">Home</a></li>
            <li><a href="#">Story</a></li>
            <li><a href="#">Wallpapers</a></li>
            <li><a href="#">Spider-Man 2</a></li>
          </ul>
        </nav>

      </header>

      <div className="aside">

        <div className="invisible"></div>

        <div className="redes">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-youtube"></i>
          <i className="fa-brands fa-twitter"></i>
        </div>

        <img src={images.mileslogos} alt="Spider-Man Logo" className='svgs' />
      </div>



      <div className="background-logo">

        <img src={images.logo} alt="Spider-Man Logo" className='logo' />
        <p>
          In Spider-Man 2 for PS5, Miles Morales returns with an updated suit featuring
          sharper lines and glowing accents that reflect his growing powers. Players will
          experience refined agility and venom abilities as he teams up with Peter Parker
          to face new threats in a vibrant New York City.
        </p>

        <div className="container-link">
          <div className="PRE-ORDER-NOW"><h1>PRE-ORDER NOW</h1></div>
          <div className="WATCH-TRAILER"><h1>WATCH TRAILER</h1></div>
        </div>

      </div>


      <div className="background-container">

        <img src={images.back} alt="Photographer's insight" className="background" />
        <img src={images.transparent} alt="Photographer's insight" className="transparent" />

      </div>


      <div className="background-windows">

        <img src={images.window} alt="Photographer's insight" className="windows" />
        <img src={images.miles} alt="Photographer's insight" className="miles" />



      </div>


    </>
  );
}

export default Content;
