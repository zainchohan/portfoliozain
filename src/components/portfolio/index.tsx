'use client'
import React from 'react';
import HeaderFour from '@/layouts/headers/HeaderFour';
import PortfolioSlider from './PortfolioSlider';
import PortfolioArea from './PortfolioArea';
import BrandAreaAbout from '../about/BrandAreaAbout';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';


const Portfolio = () => {
  return (
    <>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <PortfolioSlider />
            <PortfolioArea />
            {/* <BrandAreaAbout /> */}
          </main>
          <FooterOne />
        </div>
      </div>
    </>
  );
};

export default Portfolio;