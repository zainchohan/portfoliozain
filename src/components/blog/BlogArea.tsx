
'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import blog_data from '@/data/BlogData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation,Scrollbar } from 'swiper/modules';
import Link from 'next/link';
import styles from './style.module.css'

// data
const categories = blog_data.map((item) => item.category);
const total_items = blog_data.map(p => p.sliders.length) 

// slider swiper setting 
const slider_setting = {
  speed: 800,
  slidesPerView: 3,
  spaceBetween: 15,
  loop: true,
  navigation: {
    nextEl: ".blog-list__arrow-next",
    prevEl: ".blog-list__arrow-prev",
  },
  scrollbar: {
    el: ".blog-list__scrollbar",
    clickable: true,
  },
  Autoplay: {
    delay: 3000, // Delay between auto-scrolling (in ms)
    disableOnInteraction: false, // Keep autoplay running after user interaction
  },
  breakpoints: {
    '1200': {
      slidesPerView: 3,
    },
    '992': {
      slidesPerView: 2,
    },
    '768': {
      slidesPerView: 2,
    },
    '576': {
      slidesPerView: 1,
    },
    '0': {
      slidesPerView: 1,
    },
  },
}

const BlogArea = () => {
  const [items, setItems] = useState([...blog_data]); 


  const filterItems = (cateItem: string) => { 
    const findItems = blog_data.filter((findItem) => findItem.category === cateItem);
    setItems(findItems);
  };


  return (
    <>

      <div className="blog-list__area blog-list__ptb fix black-bg-3">
        <div className="container">
          <div className="row">
            <div className="blog-list__title-box">
              <span className="blog-list__subtitle tp-char-animation">Insights</span>
              <h4 className="blog-list__title tp-char-animation">Transforming concepts into captivating creations – Dive into my portfolio!</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="blog-list__tab-wrap">
                <div className="blog-list__tab-btn">
                  <ul className="nav nav-tab" id="myTab" role="tablist">
                    {categories.map((item, index) => (
                      <li key={index} className="nav-item" role="presentation">
                        <button className={`nav-links ${index === 0 ? "active" : ""}`}
                          onClick={() => filterItems(item)}
                          id={`${item}-tab`} data-bs-toggle="tab"
                          data-bs-target={`#${item}-tab-pane`} type="button" role="tab"
                          aria-controls={`${item}-tab-pane`} aria-selected={index === 0 ? true : false}>
                          <span>{item}</span>
                          [{total_items[index]}]
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="tab-content" id="myTabContent">
                  {items.map((item, i) => (
                    <div key={i} className={`tab-pane fade ${i === 0 ? 'show active' : ''}`} id={`${item}-tab-pane`} role="tabpanel"
                      aria-labelledby={`${item}-tab`} tab-index={0}>
                      <div className="blog-list__slider-main">
                        <div className="blog-list__slider-wrap mb-80">
                          <Swiper
                            modules={[Navigation,Scrollbar]}
                            {...slider_setting}

                            className="swiper-container blog-list__slider-active p-relative">
                            <div className="blog-list__scrollbar"></div>
                            <div className="swiper-wrapper">
                              {item.sliders?.map((slider, index) => (
                                <SwiperSlide key={index} className="blog-list__slider-item">
                                  <div className="row align-items-center">
                                    <div className="col-xl-8">
                                      <div className="blog-list__slider-title-box">
                                        <h3 className="blog-list__slider-title">
                                          <Link href="" dangerouslySetInnerHTML={{ __html: slider.title }}>
                                          </Link>
                                        </h3>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="blog-list__author-wrap mb-20">
                                    <div className="row align-items-end">
                                      <div className="col-xl-12 col-lg-12 col-md-8 mb-20">
                                        
                                      <div className="blog-list__sm-category">
                                          {slider.tag1 && <span>{slider.tag1}</span>}
                                          {slider.tag2 && <span>{slider.tag2}</span>}
                                          {slider.tag3 && <span>{slider.tag3}</span>}
                                          {slider.tag4 && <span>{slider.tag4}</span>}
                                          {slider.tag5 && <span>{slider.tag5}</span>}
                                          {slider.tag6 && <span>{slider.tag6}</span>}
                                        </div>

                                      </div>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-xl-12">
                                      <div className="blog-list__slider-thumb">

                                    <Link href={`${slider.link}`} target="_blank">
                                      <Image
                                        src={slider.img}
                                        alt={slider.title}
                                        className={styles.image}
                                        width={400}
                                        height={300}
                                      />
                                    </Link>

                                    </div>
                                    </div>
                                  </div>

                                </SwiperSlide>
                              ))}


                            </div>
                            <div className="blog-list__arrow-box d-none d-md-block">
                              
                                <button className="blog-list__arrow-prev"><i
                                className="fa-solid fa-angle-left"></i></button>
                                {' '}
                                <button className="blog-list__arrow-next"><i
                                className="fa-solid fa-angle-right"></i></button> 
                            </div>
                          </Swiper>
                        </div>

                       
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >

    </>
  );
};

export default BlogArea;