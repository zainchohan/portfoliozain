
'use client'; 
import React from 'react';
import UseHoverReveal from '@/hooks/UseHoverReveal';

interface DataType {
  title: string;
  bg_img: string;
}

const info_data: DataType[] = [
 
  {
    title: "Front End Development"
  },
  {
    title: "Full Stack Developer"
   
  },
  {
    title: "Data Analytics"
    
  }
]


const AboutInfo = () => {
  const {handleMouseMove} = UseHoverReveal();
  return (
    <>
      <div id="about-info-area" className="ab-info__area black-bg-3 pb-160">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="ab-info__text">

                <div>
                Hello, I'm Zain <span className="line"></span>, a self-taught designer and developer based in Saudi Arabia. My journey started in UI/UX design, and over the years, I've evolved into a versatile 

                  {info_data.map((item, index) =>
                    <React.Fragment key={index}>
                      <a className="tp-hover-reveal-item"  onMouseMove={(event) => handleMouseMove(event, '.tp-hover-reveal-item')}>
                         {item.title}
                        <span></span>
                        
                      </a>, {'  '}
                    </React.Fragment>
                  )}
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutInfo;