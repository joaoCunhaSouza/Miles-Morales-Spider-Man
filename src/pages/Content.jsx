import React from 'react';
import '../style/main-pages.css';
import images from "../imgs/images";


function Content() {
  return (
    <>
      {/* Seção de fundo e conteúdo principal */}

      <div className="parallax">

        <header className="primary-header">
          <div className="wrapper">
            <div className="primary-header-inner">
              <div className="logo">
              <img src={images.svg} alt="Photographer's insight" className="logo-png" />
              </div>


              <nav className="primary-nav">
                <ul className="list">
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Story</a></li>
                  <li><a href="#">Wallpapers</a></li>
                  <li><a href="#">SpiderMan2</a></li>
                </ul>
              </nav>

              <img src={images.logo} alt="Photographer's insight" className="logo-marvel" />
            </div>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex provident expedita officia odio quis nulla fuga quae omnis sed laborum iure, maiores sapiente vitae doloremque exercitationem magnam numquam asperiores sunt?</p>

            <div className="button">
              <button>Pre-order-now</button>
              <button>Watch-trailer</button>
            </div>
          </div>

        </header>
        <img src={images.back} alt="Photographer's insight" className="back" />
        <img src={images.window} alt="Photographer's insight" className="window" />



        <div className="h">1</div>
      </div>




    </>
  );
}

export default Content;
