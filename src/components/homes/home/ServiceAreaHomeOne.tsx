'use client';
import React, { useState } from 'react';
import Image from 'next/image';

import shape_1 from "@/assets/img/services/shape/services-shape-1.png";
import shape_2 from "@/assets/img/services/shape/services-shape-2.png";


interface DataType {
  subtitle: string;
  title: React.JSX.Element;
  sm_des: React.JSX.Element;
  accordion_data: {
    id: number;
    tab_id: string;
    question: string;
    answer: string;
    some_features: string[];
  }[];
}

const service_content: DataType = {
  subtitle: "Services",
  title: <>Solution <br /> I provide.</>,
  sm_des: <>The combination of my passion for design, code & <br /> interaction web design world.</>,
  accordion_data: [
    {
      id: 1,
      tab_id: "One",
      question: "UI/UX & Web Design",
      answer: "Crafting exceptional UI/UX experiences is my ultimate passion. I excel at:",
      some_features: [
        "Interface crafting",
        "System design",
        "Kit development",
      ]
    },
    {
      id: 2,
      tab_id: "Two",
      question: "Web Development",
      answer: "Delivering seamless web experiences through expertise in Front-End Development. Key focus areas:",
      some_features: [
        "Responsive web design & Development",
        "Interactive UI components",
        "Performance optimization",
      ]
    },
    {
      id: 3,
      tab_id: "Three",
      question: "DevOps Development",
      answer: "Streamlining development and operations with my expertise in DevOps practices. Core strengths:",
      some_features: [
        "Continuous integration and continuous deployment (CI/CD)",
        "Collaboration between development and operations teams",
        "Cloud infrastructure management (AWS, Azure & Digital Ocean)"
      ]
    },    
    {
      id: 4,
      tab_id: "Four",
      question: "Data Analytics",
      answer: "Turning Data into Actionable Insights: Empowering Business Decisions through Analytics",
      some_features: [
        "Data visualization",
        "Data cleaning and preparation",
        "Predictive analytics",
      ]
    }
  ]
}

const { subtitle, title, sm_des, accordion_data } = service_content;


const ServiceAreaHomeOne = () => {
  const [active, setActive] = useState(1);

  const handleItemClick = (index: number) => {
    setActive(index);
  }

  return (
    <>
      <section className="tp-services-area tp-sv tp-services-bg-text-animation fix" id="tp-sv">
        <div className="container container-large">
          <div className="tp-services-inner pb-195 p-relative z-index-1">

            <span className="tp-services-inner-border tp-vertical-line transition-3"></span>
            <span className="tp-services-inner-border right tp-vertical-line transition-3"></span>

            <div className="tp-services-bottom-text tp-services-bg-text">
              <p>Services</p>
            </div>
            <div className="row gx-0">

              <div className="col-xl-6 col-lg-7">
                <div className="tp-services-wrapper tp-services-capsule-wrapper p-relative pt-100 pr-70" style={{ paddingTop: "100px", }}
                  data-tp-throwable-scene="true">
                  <div className="tp-section-title-wrapper tp_text_anim mb-170">
                    <div className="tp-section-title-inner p-relative">
                      <span className="tp-section-subtitle">{subtitle}</span>
                      <h3 className="tp-section-title tp_title_anim">{title}</h3>
                    </div>
                    <p>{sm_des}</p>
                  </div>

                  <div className="tp-services-capsule-item-wrapper">
                    <p data-tp-throwable-el="">
                      <span className="tp-services-capsule-item" style={{ backgroundColor: "#00CC97" }}>Frontend Development</span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span className="tp-services-capsule-item" style={{ backgroundColor: "#FF759C" }}>Prototyping</span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span className="tp-services-capsule-item" style={{ backgroundColor: "#FFDB59", color: "#121212" }}>Web Design</span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span className="tp-services-capsule-item" style={{ backgroundColor: "#FFDB59", color: "#121212" }}>Consultant</span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span className="tp-services-capsule-item" style={{ backgroundColor: "#00CC97" }}>Data Analytics</span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span className="tp-services-capsule-item" style={{ backgroundColor: "#FFDB59", color: "#121212" }}>Wordpress Development</span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span className="tp-services-capsule-item" style={{ backgroundColor: "#00CC97" }}>Problem Solving</span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span className="tp-services-capsule-item" style={{ backgroundColor: "#19B3F1" }}>MERN</span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span className="tp-services-capsule-item" style={{ backgroundColor: "#FF759C" }}>Web Development</span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span className="tp-services-capsule-item" style={{ backgroundColor: "#19B3F1" }}>DevOps</span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span className="">
                        <Image src={shape_1} alt="brand-img" />
                      </span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span className="">
                        <Image src={shape_2} alt="brand-img" />
                      </span>
                    </p>
                  </div>

                </div>
              </div>

              <div className="col-xl-6 col-lg-5">
                <div className="tp-services-accordion tp-accordion tp-accordion-2 pl-70 p-relative" style={{ marginTop: "90px" }}>
                  <span className="tp-services-accordion-border"></span>
                  <div className="accordion" id="accordionExample">

                    {accordion_data.map((item, i) => (
                      <div key={i} onClick={() => handleItemClick(i)} className={`accordion-item tp-services-accordion-item ${active === i ? 'active' : ''}`}>
                        <h2 className="accordion-header" id={`heading${item.tab_id}`}>
                          <button
                            className={`accordion-button ${i === 1 ? '' : 'collapsed'}`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse${item.tab_id}`}
                            aria-expanded={`${i === 1 ? 'true' : 'false'}`}
                            aria-controls={`collapse${item.tab_id}`}
                            tabIndex={0}
                          >
                            <span>0{item.id}</span>
                            {item.question}
                          </button>
                        </h2>
                        <div
                          id={`collapse${item.tab_id}`}
                          className={`accordion-collapse collapse ${i === 1 ? 'show' : ''}`}
                          aria-labelledby={`heading${item.tab_id}`}
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p>{item.answer}</p>
                            <ul>
                              {item.some_features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <span className="accordion-item-border"></span>
                      </div>
                    ))}

                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceAreaHomeOne;