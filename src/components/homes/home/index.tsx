"use client";
import React from "react";
import HeaderOne from "@/layouts/headers/HeaderOne";
import HeroAreaHome from "./HeroAreaHome";
import BrandAreaHomeOne from "./BrandAreaHomeOne";
import ServiceAreaHomeOne from "./ServiceAreaHomeOne";
import MarqueeAreaHomeOne from "./MarqueeAreaHomeOne";
import AboutAreaHomeOne from "./AboutAreaHomeOne";
import PortfolioAreaHomeOne from "./PortfolioAreaHomeOne";
import SkillAreaHomeOne from "./SkillAreaHomeOne";
import AwardAreaHomeOne from "./AwardAreaHomeOne";
import TestimonialAreaHomeOne from "./TestimonialAreaHomeOne";
import PriceAreaHomeOne from "./PriceAreaHomeOne";
import FooterOne from "@/layouts/footers/FooterOne";
import TestimonialAreaHomeTwo from "../home-2/TestimonialAreaHomeTwo";
import BlogArea from "@/components/blog/BlogArea";


const HomeOne = () => {
  return (
    <>
      <HeaderOne />
      <div
        id="smooth-wrapper"
        className="tp-page-wrapper theme-bg"
        style={{ backgroundImage: `url(/assets/img/bg/distort-bg.png)` }}
      >
        <div id="smooth-content">
          <main>
            <HeroAreaHome />
            <BrandAreaHomeOne />
            <ServiceAreaHomeOne />
            <MarqueeAreaHomeOne />
            <AboutAreaHomeOne />
            <BlogArea/>
            {/* <TestimonialAreaHomeTwo/> */}
            {/* <SkillAreaHomeOne /> */}
            {/* <AwardAreaHomeOne style_2={false} /> */}
            {/* <TestimonialAreaHomeOne /> */}
            {/* <PriceAreaHomeOne /> */}
          </main>
          <FooterOne />
        </div>
      </div>
    </>
  );
};

export default HomeOne;
