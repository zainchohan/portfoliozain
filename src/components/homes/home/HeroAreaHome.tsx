'use client' 
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { scroller } from 'react-scroll';
import {animatedHeadline} from '@/utils/animatedHeadline';
import HeroHand from "@/assets/img/hero/hero-hand.png";
import HeroArrowIcon from '@/svg/home/HeroIcons/HeroArrowIcon';
import { HeroSocialLinks } from '@/components/common/SocialLinks';

interface DataType {
  slide_text: string[];
  sub_title: string;
  title_1: string;
  words: string[];
  title_2: string;
  sm_info: JSX.Element;
  btn_text: JSX.Element;
}

const hero_content: DataType = {
  slide_text: [
    "Front End Developer",
    "Web Developer",
    "UI/UX Designer"
  ],
  sub_title: "Hello There!",
  title_1: "I'm Zain",
  words: ["Frontend Developer", "UI/UX Designer", "Full Stack Developer"],
  sm_info: <>Transforming the web with my dedication to design, development, and interaction</>,
  btn_text: <>Get <br /> In Touch</>,

}
const { slide_text, sub_title, title_1, words, title_2, sm_info, btn_text } = hero_content;

// scroll to tp-sv section 
const scrollTo = () => {
  scroller.scrollTo('tp-sv', {
    duration: 800,
    delay: 0,
    smooth: 'easeInOutQuart',
  });
};


const HeroAreaHome = () => {
  const [currentWord, setCurrentWord] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prevWord) => (prevWord + 1) % words.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [words.length]);

  useEffect(() => {
    animatedHeadline()
  },[])

  return (
    <>

      <section className="tp-hero-area p-relative tp-btn-trigger z-index-1 fix theme-bg-2">
        <div className="tp-hero-social-wrapper">
          <span className="tp-hero-social-bar"></span>
          <div className="tp-hero-social">
            <HeroSocialLinks />
          </div>
        </div>
        <div className="tp-hero-shape">
          <div className="tp-hero-shape-1 background-white-mode" style={{ backgroundImage: 'url(/assets/img/hero/hero-overlay.png)' }}></div>
          <div className="tp-hero-shape-1 background-dark-mode" style={{ backgroundImage: 'url(/assets/img/hero/hero-overlay-2.png)' }}></div>
          <span className="tp-hero-shape-2"></span>
        </div>
        {/* <div className="tp-hero-bottom-text-wrapper">
          <div className="tp-hero-bottom-text">
            {slide_text.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
          <div className="tp-hero-bottom-text">
            {slide_text.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div> */}
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="tp-hero-left-wrapper">
                <div className="tp-hero-content tp_text_anim p-relative z-index-1">
                  <span className="singleLine">{sub_title} <Image src={HeroHand} alt="diego-image" /></span>
                  <h3 className="tp-hero-title cd-headline clip tp_title_anim">
                    {title_1} <br />
                    <span className="cd-words-wrapper">
                      {words.map((word, index) => (
                        <b
                          key={index}
                          className={`${index === currentWord ? "is-visible" : "is-hidden"}`}>
                          {word}
                        </b>
                      ))}
                    </span> {' '}
                    {title_2}

                  </h3>
                  <p>{sm_info}</p>
                  <div className="tp-hero-btn wrap">
                    <div className="tp-hover-btn-wrapper tp-btn-bounce">
                      <Link href="/contact" className="tp-hover-btn tp-hover-btn-item tp-btn-circle square">
                        <span className="tp-btn-circle-text" >
                          {btn_text}
                        </span>
                        <span className="tp-btn-circle-arrow">
                          <HeroArrowIcon />
                        </span>
                        <i className="tp-btn-circle-dot"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="tp-hero-scroll smooth">
                    <a className="pointer" onClick={scrollTo}>
                      <span className="tp-hero-scroll-bar"></span>
                      <span className="tp-hero-scroll-mouse"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 col-md-12 bg-gradient border border-opacity-50 rounded-lg relative tp-hero-title-9"
            >
      {/* Gradient Divider */}
      <div className="d-flex flex-row">
        <div
          className="w-100"
          style={{
            height: "1px",
            background: "linear-gradient(to right, transparent, #ec4899, #7c3aed)",
          }}
        ></div>
        <div
          className="w-100"
          style={{
            height: "1px",
            background: "linear-gradient(to right, #7c3aed, transparent)",
          }}
        ></div>
      </div>

      {/* Header Section */}
      <div className="px-4 px-lg-5 py-4">
        <div className="d-flex flex-row gap-2">
          <div
            className="rounded-circle"
            style={{
              width: "12px",
              height: "12px",
              backgroundColor: "#f87171",
            }}
          ></div>
          <div
            className="rounded-circle"
            style={{
              width: "12px",
              height: "12px",
              backgroundColor: "#fb923c",
            }}
          ></div>
          <div
            className="rounded-circle"
            style={{
              width: "12px",
              height: "12px",
              backgroundColor: "#bef264",
            }}
          ></div>
        </div>
      </div>

      {/* Code Section */}
      <div className="overflow-hidden border-top border-2 border-indigo-900 px-4 px-lg-5 py-4 py-lg-5">
        <code className="font-monospace">
          <div className="text-pink-500">
            <span className="me-2">const</span>
            <span className="me-2 text-white">coder</span>
            <span className="me-2 text-pink-500">=</span>
            <span className="text-gray-400">{'{'}</span>
          </div>
          <div>
            <span className="ms-4 me-2 text-white">name:</span>
            <span className="text-gray-400">'</span>
            <span className="text-warning">M ZAIN</span>
            <span className="text-gray-400">',</span>
          </div>
          <div className="ms-4">
            <span className="me-2 text-white">skills:</span>
            <span className="text-gray-400">[</span>
            <span className="text-warning">
              'React', 'NextJS', 'Redux', 'Express', 'NestJS', 'MySql', 'MongoDB',
              'Docker', 'AWS'
            </span>
            <span className="text-gray-400">],</span>
          </div>
          <div>
            <span className="ms-4 me-2 text-white">hardWorker:</span>
            <span className="text-orange-400">true</span>
            <span className="text-gray-400">,</span>
          </div>
          <div>
            <span className="ms-4 me-2 text-white">quickLearner:</span>
            <span className="text-orange-400">true</span>
            <span className="text-gray-400">,</span>
          </div>
          <div>
            <span className="ms-4 me-2 text-white">problemSolver:</span>
            <span className="text-orange-400">true</span>
            <span className="text-gray-400">,</span>
          </div>
          <div>
            <span className="ms-4 me-2 text-success">hireable:</span>
            <span className="text-orange-400">function</span>
            <span className="text-gray-400">{'() {'}</span>
          </div>
          <div>
            <span className="ms-5 text-orange-400">return</span>
            <span className="text-gray-400">(</span>
          </div>
          <div>
            <span className="ms-6 text-info">this.</span>
            <span className="me-2 text-white">hardWorker</span>
            <span className="text-warning">&amp;&amp;</span>
          </div>
          <div>
            <span className="ms-6 text-info">this.</span>
            <span className="me-2 text-white">problemSolver</span>
            <span className="text-warning">&amp;&amp;</span>
          </div>
          <div>
            <span className="ms-6 text-info">this.</span>
            <span className="me-2 text-white">skills.length</span>
            <span className="me-2 text-warning">&gt;=</span>
            <span className="text-orange-400">5</span>
          </div>
          <div>
            <span className="ms-5 text-gray-400">);</span>
          </div>
          <div>
            <span className="ms-4 text-gray-400">};</span>
          </div>
          <div>
            <span className="text-gray-400">};</span>
          </div>
        </code>
      </div>
    </div>
                      
          </div>
        </div>
      </section>

    </>
  );
};

export default HeroAreaHome;