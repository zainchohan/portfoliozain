'use client';
import Link from 'next/link';
import React, { useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';

import project_img_1 from '@/assets/img/portfolio/port-inner-up-1.jpg';
import project_img_2 from '@/assets/img/portfolio/port-inner-up-4.jpg';
import project_img_3 from '@/assets/img/portfolio/port-inner-up-5.jpg';

import project_img_4 from '@/assets/img/portfolio/port-inner-up-2.jpg';
import project_img_5 from '@/assets/img/portfolio/port-inner-up-3.jpg';
import project_img_6 from '@/assets/img/portfolio/portfolio-2.jpg';
import { gsap } from 'gsap';
import BlogArea from '../blog/BlogArea';


interface DataType {
  blog_data_1: {
    id: number;
    img: StaticImageData;
    bg_img: string;
    title: string;
    category: string;
  }[];
  blog_data_2: {
    id: number;
    img: StaticImageData;
    bg_img: string;
    title: string;
    category: string;
  }[];
}



const project_content: DataType = {
  blog_data_1: [
    {
      id: 1,
      img: project_img_1,
      bg_img: '/assets/img/portfolio/port-inner-up-1.jpg',
      title: 'Space Needle',
      category: 'Branding',
    },
    {
      id: 4,
      img: project_img_2,
      bg_img: '/assets/img/portfolio/port-inner-up-4.jpg',
      title: 'Crisis Cleanup',
      category: 'Branding',
    },
    {
      id: 1,
      img: project_img_3,
      bg_img: '/assets/img/portfolio/port-inner-up-5.jpg',
      title: 'Space Needle',
      category: 'Branding',
    }
  ],
  blog_data_2: [
    {
      id: 4,
      img: project_img_4,
      bg_img: '/assets/img/portfolio/port-inner-up-2.jpg',
      title: 'Space Needle',
      category: 'Branding',
    },
    {
      id: 1,
      img: project_img_5,
      bg_img: '/assets/img/portfolio/port-inner-up-3.jpg',
      title: 'Crisis Cleanup',
      category: 'Branding',
    },
    {
      id: 4,
      img: project_img_6,
      bg_img: '/assets/img/portfolio/portfolio-2.jpg',
      title: 'Space Needle',
      category: 'Branding',
    }
  ]
}

const { blog_data_1, blog_data_2 } = project_content

const PortfolioArea = () => {


  useEffect(() => {

    /* portfolio animation start */
    gsap.set('.tp-portfolio-bg-text', {
      x: '25%'
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: '.tp-portfolio-bg-text-animation',
        start: '-500 0%',
        end: 'bottom -10%',
        scrub: true,
        invalidateOnRefresh: true
      }
    })
      .to('.tp-portfolio-bg-text', {
        x: '-80%'
      });

    gsap.timeline({
      scrollTrigger: {
        trigger: '.portfolio-list-scroll-text-animation',
        start: '-500 0%',
        end: 'bottom -10%',
        scrub: true,
        invalidateOnRefresh: true
      }
    })
      .to('.portfolio-list-scroll-text', {
        x: '-80%'
      });

  }, [])


  return (
    <>
      <div className="porfolio-inner__thumb-wrapper tp-portfolio-effect portfolio-list-scroll-text-animation p-relative fix  black-bg-3 pt-80 "
        data-scrub="0.0001">
        <div className="portfolio-list-scroll-text  d-flex align-items-center">
          <p>Latest Project</p>
          <p>Latest Project</p>
        </div>
        <div className="container">
          <div className="row ">
          <BlogArea className="custom-padding" />
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioArea;