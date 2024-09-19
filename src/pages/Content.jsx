import React from 'react';
import '../style/main-pages.css';
import images from "../imgs/images";


function Content() {
  return (
    <>
      {/* Seção de fundo e conteúdo principal */}
      <div className="background">
        <div className="align">
          <div className="content">
            <h1 className="font">Lessons and insights <strong>from 8 years</strong></h1>
            <p>Where to grow your business as a photographer: site or social media?</p>

 
          </div>

          {/* Imagem principal */}
          <img src={images.imgOne} alt="Photographer's insight" className="logo-png" />
        </div>
      </div>


    </>
  );
}

export default Content;
