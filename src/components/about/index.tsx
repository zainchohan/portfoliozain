
import React from 'react';
import AboutInfo from './AboutInfo';
import FunfactArea from './FunfactArea';
import PersonalInfo from './PersonalInfo';
import SeviceHeroArea from '../service/SeviceHeroArea';
import HeroAreaAbout from './HeroAreaAbout';
import BrandAreaAbout from './BrandAreaAbout';
import FooterFour from '@/layouts/footers/FooterFour';
import HeaderFour from '@/layouts/headers/HeaderFour';
import AwardAreaHomeOne from '../homes/home/AwardAreaHomeOne';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';


const About = () => {
  return (
    <>
      <HeaderOne />
      <div id="smooth-wrapper" className="black-bg-3">
        <div id="smooth-content">
          <main>
            <SeviceHeroArea/>
            <AboutInfo />
            <PersonalInfo />
            <FunfactArea />
            {/* <AwardAreaHomeOne style_2={true} /> */}
            {/* <BrandAreaAbout /> */}
          </main>
          <FooterOne/>
        </div>
      </div>
    </>
  );
};

export default About;