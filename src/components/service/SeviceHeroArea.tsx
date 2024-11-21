'use client';
import React from 'react';
import Image, { StaticImageData } from 'next/image'
import slider_img_1 from "@/assets/img/services/slider/services-slider-1.jpg";
import slider_img_2 from "@/assets/img/services/slider/services-slider-2.jpg";
import slider_img_3 from "@/assets/img/services/slider/services-slider-3.jpg";
import slider_img_4 from "@/assets/img/services/slider/services-slider-4.jpg";
import Slider from "react-slick";
import about_circle from "@/assets/img/hero/ab-circle-img.png";

interface DataType {
  subtitle: string;
  title: string;
  serrvice_list: {
      id: number;
      delay: string;
      title: string;
  }[];
  slider_images_1: StaticImageData[];
  slider_images_2: StaticImageData[];
}

const hero_content: DataType = {
  subtitle: "Services",
  title: "High Quality Projects",
  serrvice_list: [
    {
      id: 1,
      delay: ".3s",
      title: "Over 40 Websites Built With Envato"
    },
    {
      id: 2,
      delay: ".5s",
      title: "Visual Designer for 10+ years",
    },
    {
      id: 3,
      delay: ".7s",
      title: "UI/UX Designer, Envato",
    },
  ],
  slider_images_1: [
    slider_img_1, slider_img_2,
    slider_img_1, slider_img_2,
    slider_img_1, slider_img_2,
    slider_img_1, slider_img_2, 
  ],
  slider_images_2: [
    slider_img_3, slider_img_4,
    slider_img_3, slider_img_4,
    slider_img_3, slider_img_4,
    slider_img_3, slider_img_4, 
  ]
}

const { subtitle, title, serrvice_list, slider_images_1, slider_images_2 } = hero_content

const setting_1 = {
  speed: 8000,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: 'linear',
  slidesPerRow: 1,
  slidesToShow: 2,
  arrows: false,
  buttons: false,
  vertical: true,
  verticalSwiping: true,
  centerPadding: '120px',
  responsive: [
    {
      breakpoint: 1200,
      settings: {
      }
    },
    {
      breakpoint: 992,
      settings: {
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
}



const SeviceHeroArea = () => {
  return (
    <>
      <div className="sv-inner__slider-area black-bg-3 sv-inner__slider-plr">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="ab-hero__title-box">
                <h3 className="ab-hero__title tp-char-animation">I' m Zain Ul Abidin</h3>
              </div>
              <div className="ab-hero__btn-box">
                <a className="tp-btn-border-sm" href="assets/img/cv/mycv.docx">
                  Download CV
                  <span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M15 10.3331V13.4442C15 13.8568 14.8361 14.2525 14.5444 14.5442C14.2527 14.8359 13.857 14.9998 13.4444 14.9998H2.55556C2.143 14.9998 1.74733 14.8359 1.45561 14.5442C1.16389 14.2525 1 13.8568 1 13.4442V10.3331"
                        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                        strokeLinejoin="round" />
                      <path d="M4.11328 6.44458L8.00217 10.3335L11.8911 6.44458" stroke="currentColor"
                        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M8 10.3333V1" stroke="currentColor" strokeWidth="1.5"
                        strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="sv-inner__slider-main">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="sv-inner__slider-wrapper">
                      <Slider {...setting_1} className="sv-inner__slider-active-1">
                        {slider_images_1.map((item, index) => (
                          <div key={index} className="sv-inner__slider-item">
                            <Image src={item} alt="image-here" />
                          </div>
                        ))}
                      </Slider>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="sv-inner__slider-wrapper">
                      <Slider {...setting_1} className="sv-inner__slider-active-2">
                        {slider_images_2.map((item, index) => (
                          <div key={index} className="sv-inner__slider-item">
                            <Image src={item} alt="image-here" />
                          </div>
                        ))}
                      </Slider>
                    </div>
                  </div>
                 
                </div>
                <div className="ab-hero__circle">
                  <Image className="tp-rotate-center" src={about_circle} alt="image-here" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SeviceHeroArea;