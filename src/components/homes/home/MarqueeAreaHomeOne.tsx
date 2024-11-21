'use client'
import React from 'react';
import Image from 'next/image';
import Slider from "react-slick";

import smile from '@/assets/img/marquee/smile.svg';
import stroke from '@/assets/img/marquee/stroke.svg';

const marquee_data = [
  { text: 'Data Analytics', img: smile },
  { text: 'UI/UX Design', img: stroke },
  { text: 'AI', img: smile },
  { text: 'Web Development', img: stroke },
  { text: 'Mobile App Development', img: smile },
  { text: 'Business Development', img: stroke },
]

const setting = {
  speed: 7000,
  autoplay: true,
  autoplaySpeed: 0,
  centerMode: true,
  cssEase: 'linear',
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  infinite: true,
  initialSlide: 1,
  arrows: false,
  buttons: false,
  focusOnSelect: true,
  pauseOnHover: true,
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

const MarqueeAreaHomeOne = () => {
  return (
    <>
      <div className="tp-marquee-area z-index-5">
        <div className="tp-marquee-wrapper">
          <div className="tp-marquee-slider fix">
            <Slider {...setting} className="tp-marquee-slider-active d-flex align-items-center ">
              {marquee_data.map((item, index) => (
                <div key={index} className="tp-marquee-item">
                  <p>{item.text} <Image src={item.img} alt="image" /></p>
                </div>
              ))}
            </Slider>

          </div>
        </div>
      </div>
    </>
  );
};

export default MarqueeAreaHomeOne;