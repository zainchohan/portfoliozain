

import { StaticImageData } from "next/image";

import avatart_img_1 from "@/assets/img/users/blog-list-avata-1.png";

//  Development
import slider_img_1 from "@/assets/img/blog/leader.jpg"; 
import slider_img_2 from "@/assets/img/blog/fox.png"; 
import slider_img_3 from "@/assets/img/blog/lectronics.png";
import slider_img_4 from "@/assets/img/blog/automaxsw.png";
import slider_img_5 from "@/assets/img/blog/dulani.png";
import slider_img_6 from "@/assets/img/blog/gulfmet.png";
import slider_img_7 from "@/assets/img/blog/almathal.png";
import slider_img_8 from "@/assets/img/blog/shoearena.png";
import slider_img_9 from "@/assets/img/blog/salama.png";

//  Dashboard Design
import db_img_1 from "@/assets/img/blog/dashboard/FOX.png";
import db_img_2 from "@/assets/img/blog/dashboard/alasala.jpg";
import db_img_4 from "@/assets/img/blog/dashboard/dbl10.jpg";
import db_img_5 from "@/assets/img/blog/dashboard/dbl11.jpg";
import db_img_8 from "@/assets/img/blog/dashboard/dbl3.jpg";
import db_img_9 from "@/assets/img/blog/dashboard/dbl4.jpg";
import db_img_11 from "@/assets/img/blog/dashboard/dbl6.jpg";

//  Mobile Design
import mob_img_1 from "@/assets/img/blog/mob/mobl0_1.jpg";
import mob_img_2 from "@/assets/img/blog/mob/mobl0_2.jpg";
import mob_img_3 from "@/assets/img/blog/mob/mobl0_3.jpg";
import mob_img_4 from "@/assets/img/blog/mob/mobl0_4.jpg";
import mob_img_5 from "@/assets/img/blog/mob/mobl24.jpg";
import mob_img_6 from "@/assets/img/blog/mob/mobl27.jpg";
import mob_img_7 from "@/assets/img/blog/mob/axionic.png";

//  Website Design
import web_img_1 from "@/assets/img/blog/web/webl01.jpg";
import web_img_2 from "@/assets/img/blog/web/webl02.jpg";
import web_img_3 from "@/assets/img/blog/web/webl03.jpg";
import web_img_4 from "@/assets/img/blog/web/webl04.jpg";
import web_img_5 from "@/assets/img/blog/web/webl1.jpg";
import web_img_6 from "@/assets/img/blog/web/webl10.jpg";

import web_img_8 from "@/assets/img/blog/web/webl14.jpg";
import web_img_10 from "@/assets/img/blog/web/webl15.jpg";

import web_img_13 from "@/assets/img/blog/web/webl18.jpg";
import web_img_14 from "@/assets/img/blog/web/webl19.jpg";

import web_img_16 from "@/assets/img/blog/web/webl20.jpg";
import web_img_17 from "@/assets/img/blog/web/webl21.jpg";
import web_img_18 from "@/assets/img/blog/web/webl22.jpg";
import web_img_19 from "@/assets/img/blog/web/webl23.jpg";
import web_img_20 from "@/assets/img/blog/web/webl2.jpg";
import web_img_21 from "@/assets/img/blog/web/webl3.jpg";

import web_img_23 from "@/assets/img/blog/web/webl5.jpg";
import web_img_24 from "@/assets/img/blog/web/webl6.jpg";



//  blog thumb images
// tab 01
import blog_img_1_1 from "@/assets/img/blog/blog-list-2.jpg";
import blog_img_1_2 from "@/assets/img/blog/blog-list-3.jpg";
import blog_img_1_3 from "@/assets/img/blog/blog-list-4.jpg";
import blog_img_1_4 from "@/assets/img/blog/blog-list-5.jpg"; 
import blog_img_1_5 from "@/assets/img/blog/blog-list-6.jpg"; 
import blog_img_1_6 from "@/assets/img/blog/blog-list-7.jpg"; 
 



// avatar images 
import blog_avatar_1_1 from "@/assets/img/users/blog-list-avata-1.png";
import blog_avatar_1_2 from "@/assets/img/users/user-4.jpg";
import blog_avatar_1_3 from "@/assets/img/users/user-16.jpg";
import blog_avatar_1_4 from "@/assets/img/users/user-14.jpg";
import blog_avatar_1_5 from "@/assets/img/users/user-10.jpg";
import blog_avatar_1_6 from "@/assets/img/users/avata-2.png";



const blog_data = [
  {
    id: 1,
    category: "Development",
    sliders: [
      {
        img: slider_img_1,
        tag1: "UI/UX",
        tag4: 'JS',
        tag2: "Wordpress",
        tag3: "PHP",
        title: "Leader Investment Group",
        link: "https://www.leadergroup.com/"
      },
      {
        img: slider_img_2,
        tag1: "UI/UX",
        tag4: 'JS',
        tag2: "Wordpress",
        tag3: "PHP",
        title: "Fox HR",
        link: 'https://www.foxhr.sa/en/home/'
      },
      {
        img: slider_img_3,
        tag1: "UI/UX",
        tag4: 'JS',
        tag2: "Javascript",
        tag3: "PHP",
        title: "Lectronics",
        link:'https://lectronic.com/en/home/'
      },
      {
        img: slider_img_4,
        tag1: "UI/UX",
        tag4: 'JS',
        tag2: "Javascript",
        tag3: "PHP",
        title: "Lectronics",
        link:'https://automaxsw.com/'
      },
      {
        img: slider_img_5,
        tag1: "Figma",
        tag4: 'NextJS',
        tag2: "Javascript",
        title: "Dulani",
        link:'https://dulani.gov.sa/'
      },
      {
        img: slider_img_6,
        tag1: "UI/UX",
        tag2: "Javascript",
        tag3: "PHP",
        title: "Gulfmet",
        link:'https://www.gulfmet.org/',
      },
      {
        img: slider_img_7,
        tag1: "UI/UX",
        tag2: "Javascript",
        tag3: "PHP",
        title: "Alamthal Financing",
        link:'https://www.al-amthal.com.sa/'
      },
      {
        img: slider_img_8,
        tag1: "UI/UX",
        tag2: "Javascript",
        tag3: "PHP",
        title: "Sodas Group",
        link: "javascript:void(0);",
      },
      {
        img: slider_img_9,
        tag1: "UI/UX",
        tag2: "Javascript",
        tag3: "PHP",
        title: "Alamthal Financing",
        link:'https://www.salama.com.sa/'
      },
      
    ],

    article_data: [
      {
        id: 1,
        img: blog_img_1_1,
        avatar: blog_avatar_1_1,
        tag_1: "Branding",
        tag_2: "Design",
        title: "8 Types of Logos — Which is Right For Your Business?",
        name: "Nitin Sharma",
        time: "Dec 26, 2023<i>.</i>9 min read",
      },
      {
        id: 2,
        img: blog_img_1_2,
        avatar: blog_avatar_1_2,
        tag_1: "Branding",
        tag_2: "Design",
        title: "Funding for Startups Isn't a Cure-All: Why They Still Fail",
        name: "Howard C. Davis",
        time: "Dec 26, 2023<i>.</i>9 min read",
      },
      {
        id: 3,
        img: blog_img_1_3,
        avatar: blog_avatar_1_3,
        tag_1: "Branding",
        tag_2: "Design",
        title: "How designers points based on real-life experience",
        name: "Nitin Sharma",
        time: "Dec 26, 2023<i>.</i>9 min read",
      },
      {
        id: 4,
        img: blog_img_1_4,
        avatar: blog_avatar_1_4,
        tag_1: "Branding",
        tag_2: "Design",
        title: "Lazarev. recap — what 2023 was like for our design team",
        name: "Julie Foster",
        time: "Dec 26, 2023<i>.</i>9 min read",
      },
      {
        id: 5,
        img: blog_img_1_5,
        avatar: blog_avatar_1_5,
        tag_1: "Branding",
        tag_2: "Design",
        title: "Lazarev. recap — what 2023 was like for our design team",
        name: "Julie Foster",
        time: "Dec 26, 2023<i>.</i>9 min read",
      },
      {
        id: 6,
        img: blog_img_1_6,
        avatar: blog_avatar_1_6,
        tag_1: "Branding",
        tag_2: "Design",
        title: "3D product visualization: how it helps eCommerce business",
        name: "Mary Perry",
        time: "Dec 26, 2023<i>.</i>9 min read",
      },
      // update 
      {
        id: 1,
        img: blog_img_1_1,
        avatar: blog_avatar_1_1,
        tag_1: "Branding",
        tag_2: "Design",
        title: "8 Types of Logos — Which is Right For Your Business?",
        name: "Nitin Sharma",
        time: "Dec 26, 2023<i>.</i>9 min read",
      },
      {
        id: 2,
        img: blog_img_1_2,
        avatar: blog_avatar_1_2,
        tag_1: "Branding",
        tag_2: "Design",
        title: "Funding for Startups Isn't a Cure-All: Why They Still Fail",
        name: "Howard C. Davis",
        time: "Dec 26, 2023<i>.</i>9 min read",
      },
      {
        id: 3,
        img: blog_img_1_3,
        avatar: blog_avatar_1_3,
        tag_1: "Branding",
        tag_2: "Design",
        title: "How designers points based on real-life experience",
        name: "Nitin Sharma",
        time: "Dec 26, 2023<i>.</i>9 min read",
      },
      {
        id: 4,
        img: blog_img_1_4,
        avatar: blog_avatar_1_4,
        tag_1: "Branding",
        tag_2: "Design",
        title: "Lazarev. recap — what 2023 was like for our design team",
        name: "Julie Foster",
        time: "Dec 26, 2023<i>.</i>9 min read",
      },
      {
        id: 5,
        img: blog_img_1_5,
        avatar: blog_avatar_1_5,
        tag_1: "Branding",
        tag_2: "Design",
        title: "Lazarev. recap — what 2023 was like for our design team",
        name: "Julie Foster",
        time: "Dec 26, 2023<i>.</i>9 min read",
      },
      {
        id: 6,
        img: blog_img_1_6,
        avatar: blog_avatar_1_6,
        tag_1: "Branding",
        tag_2: "Design",
        title: "3D product visualization: how it helps eCommerce business",
        name: "Mary Perry",
        time: "Dec 26, 2023<i>.</i>9 min read",
      },
    ]
  },  
  {
    id: 2,
    category: "Dashboard",
    sliders: [
      {
        img: db_img_1,
        tag1: "UI/UX",
        tag2: "Wireframe",
        tag3: "Adobe Creative Tool",
        title: "Fox ERP",
        link: "javascript:void(0);",
      },
      {
        img: db_img_2,
        tag1: "UI/UX",
        tag2: "Wireframe",
        tag3: "Adobe Creative Tool",
        title: "Alasala University",
        link: "javascript:void(0);",
      },
      {
        img: db_img_11,
        tag1: "UI/UX",
        tag2: "Wireframe",
        tag3: "Adobe Creative Tool",
        title: "Amana - Madinah Munciplaity",
        link: "javascript:void(0);",
      },
     
      {
        img: db_img_4,
        tag1: "UI/UX",
        tag2: "Wireframe",
        tag3: "Adobe Creative Tool",
        title: "Mountaineer",
        link: "javascript:void(0);",
      },
      {
        img: db_img_5,
        tag1: "UI/UX",
        tag2: "Wireframe",
        tag3: "Adobe Creative Tool",
        title: "Danish Data System Ltd.",
        link: "javascript:void(0);",
     
      },
   
      
      {
        img: db_img_8,
        tag1: "UI/UX",
        tag2: "Wireframe",
        tag3: "Adobe Creative Tool",
        title: "Google Adsense Form",
        link: "javascript:void(0);",
      },
      {
        img: db_img_9,
        tag1: "UI/UX",
        tag2: "Wireframe",
        tag3: "Adobe Creative Tool",
        title: "J2 Global",
        link: "javascript:void(0);",
      },
    ],

    article_data: [
      {
        id: 1,
        img: blog_img_1_1,
        avatar: blog_avatar_1_1,
        tag_1: "Branding",
        tag_2: "Design",
        title: "8 Types of Logos — Which is Right For Your Business?",
        name: "Nitin Sharma",
        time: "Dec 26, 2023<i>.</i>9 min read",
      },
      {
        id: 2,
        img: blog_img_1_2,
        avatar: blog_avatar_1_2,
        tag_1: "Branding",
        tag_2: "Design",
        title: "Funding for Startups Isn't a Cure-All: Why They Still Fail",
        name: "Howard C. Davis",
        time: "Dec 26, 2023<i>.</i>9 min read",
      },
      {
        id: 3,
        img: blog_img_1_3,
        avatar: blog_avatar_1_3,
        tag_1: "Branding",
        tag_2: "Design",
        title: "How designers points based on real-life experience",
        name: "Nitin Sharma",
        time: "Dec 26, 2023<i>.</i>9 min read",
      },
      {
        id: 4,
        img: blog_img_1_4,
        avatar: blog_avatar_1_4,
        tag_1: "Branding",
        tag_2: "Design",
        title: "Lazarev. recap — what 2023 was like for our design team",
        name: "Julie Foster",
        time: "Dec 26, 2023<i>.</i>9 min read",
      },
      {
        id: 5,
        img: blog_img_1_5,
        avatar: blog_avatar_1_5,
        tag_1: "Branding",
        tag_2: "Design",
        title: "Lazarev. recap — what 2023 was like for our design team",
        name: "Julie Foster",
        time: "Dec 26, 2023<i>.</i>9 min read",
      },
      {
        id: 6,
        img: blog_img_1_6,
        avatar: blog_avatar_1_6,
        tag_1: "Branding",
        tag_2: "Design",
        title: "3D product visualization: how it helps eCommerce business",
        name: "Mary Perry",
        time: "Dec 26, 2023<i>.</i>9 min read",
      },
    ]
  }, 
  {
    id: 3,
    category: "Mobile Apps",
    sliders: [
      {
        img: mob_img_1,
        tag1: "UI/UX",
        tag2: "Wireframe",
        tag3: "Adobe Creative Tool",
        title: "Foodboy",
        link: "javascript:void(0);",
      },
      {
        img: mob_img_7,
        tag1: "UI/UX",
        tag2: "Wireframe",
        tag3: "Figma",
        title: "Axionic",
        link: "javascript:void(0);",
      },
      {
        img: mob_img_2,
        tag1: "UI/UX",
        tag2: "Wireframe",
        tag3: "Adobe Creative Tool",
        title: "Raqeb - Madinah HMS",
        link: "javascript:void(0);",
      },
      {
        img: mob_img_5,
        tag1: "UI/UX",
        tag2: "Wireframe",
        tag3: "Adobe Creative Tool",
        title: "Truth or Dare",
        link: "javascript:void(0);",
      },
      // {
      //   img: mob_img_3,
      //   tag1: "JS",
      //   tag2: "React",
      //   title: "Webiste 6",
      // },
      {
        img: mob_img_4,
        tag1: "UI/UX",
        tag2: "Wireframe",
        tag3: "Adobe Creative Tool",
        title: "Balaghat 940",
        link: "javascript:void(0);",
      },
     
      {
        img: mob_img_6,
        tag1: "UI/UX",
        tag2: "Wireframe",
        tag3: "Adobe Creative Tool",
        title: "Salama Insurance Company",
        link: "javascript:void(0);",
      },

 
    ],

    article_data: [
      {
        id: 1,
        img: blog_img_1_1,
        avatar: blog_avatar_1_1,
        tag_1: "Branding",
        tag_2: "Design",
        title: "8 Types of Logos — Which is Right For Your Business?",
        name: "Nitin Sharma",
        time: "Dec 26, 2023<i>.</i>9 min read",
      },
      {
        id: 2,
        img: blog_img_1_2,
        avatar: blog_avatar_1_2,
        tag_1: "Branding",
        tag_2: "Design",
        title: "Funding for Startups Isn't a Cure-All: Why They Still Fail",
        name: "Howard C. Davis",
        time: "Dec 26, 2023<i>.</i>9 min read",
      },
      {
        id: 3,
        img: blog_img_1_3,
        avatar: blog_avatar_1_3,
        tag_1: "Branding",
        tag_2: "Design",
        title: "How designers points based on real-life experience",
        name: "Nitin Sharma",
        time: "Dec 26, 2023<i>.</i>9 min read",
      },
      {
        id: 4,
        img: blog_img_1_4,
        avatar: blog_avatar_1_4,
        tag_1: "Branding",
        tag_2: "Design",
        title: "Lazarev. recap — what 2023 was like for our design team",
        name: "Julie Foster",
        time: "Dec 26, 2023<i>.</i>9 min read",
      },
      {
        id: 5,
        img: blog_img_1_5,
        avatar: blog_avatar_1_5,
        tag_1: "Branding",
        tag_2: "Design",
        title: "Lazarev. recap — what 2023 was like for our design team",
        name: "Julie Foster",
        time: "Dec 26, 2023<i>.</i>9 min read",
      },
      {
        id: 6,
        img: blog_img_1_6,
        avatar: blog_avatar_1_6,
        tag_1: "Branding",
        tag_2: "Design",
        title: "3D product visualization: how it helps eCommerce business",
        name: "Mary Perry",
        time: "Dec 26, 2023<i>.</i>9 min read",
      },
    ]
  }, 
  {
    id: 4,
    category: "Website Design",
    sliders: [
      { img: web_img_1, tag1: "UI/UX", tag2: "Wireframe",tag3:"Adobe Creative Tool", title: "Alasala College" },
      { img: web_img_3, tag1: "UI/UX", tag2: "Wireframe",tag3:"Figma", title: "Ammar Integrated" },
      { img: web_img_19, tag1: "UI/UX", tag2: "Wireframe",tag3:"Adobe Creative Tool", title: "Rofoof Bookstore" },
      { img: web_img_5, tag1: "UI/UX", tag2: "Wireframe",tag3:"Adobe Creative Tool", title: "Brakat " },
      { img: web_img_18, tag1: "UI/UX", tag2: "Wireframe",tag3:"Adobe Creative Tool", title: "Optix Shop" },
      { img: web_img_2, tag1: "UI/UX", tag2: "Wireframe",tag3:"Adobe Creative Tool", title: "College of Business" },
      { img: web_img_20, tag1: "UI/UX", tag2: "Wireframe",tag3:"Adobe Creative Tool", title: "Stasa Law Firm" },
      { img: web_img_21, tag1: "UI/UX", tag2: "Wireframe",tag3:"Adobe Creative Tool", title: "Riza Lab" },
      { img: web_img_23, tag1: "UI/UX", tag2: "Wireframe",tag3:"Adobe Creative Tool", title: "Weight Loss Agent" },
      { img: web_img_4, tag1: "UI/UX", tag2: "Wireframe",tag3:"Figma", title: "Ammar Integrated Website" },        
      { img: web_img_8, tag1: "UI/UX", tag2: "Wireframe",tag3:"Adobe Creative Tool", title: "Saudi Electricity" },
      { img: web_img_10, tag1: "UI/UX", tag2: "Wireframe",tag3:"Adobe Creative Tool", title: "Beyond Basik" },
      { img: web_img_16, tag1: "UI/UX", tag2: "Wireframe",tag3:"Adobe Creative Tool", title: "Loto Shout" },
      { img: web_img_17, tag1: "UI/UX", tag2: "Wireframe",tag3:"Adobe Creative Tool", title: "Edarah SPS" },
    
    ],

    article_data: [
      {
        id: 1,
        img: blog_img_1_1,
        avatar: blog_avatar_1_1,
        tag_1: "Branding",
        tag_2: "Design",
        title: "8 Types of Logos — Which is Right For Your Business?",
        name: "Nitin Sharma",
        time: "Dec 26, 2023<i>.</i>9 min read",
      },
      {
        id: 2,
        img: blog_img_1_2,
        avatar: blog_avatar_1_2,
        tag_1: "Branding",
        tag_2: "Design",
        title: "Funding for Startups Isn't a Cure-All: Why They Still Fail",
        name: "Howard C. Davis",
        time: "Dec 26, 2023<i>.</i>9 min read",
      },

      
      {
        id: 3,
        img: blog_img_1_3,
        avatar: blog_avatar_1_3,
        tag_1: "Branding",
        tag_2: "Design",
        title: "How designers points based on real-life experience",
        name: "Nitin Sharma",
        time: "Dec 26, 2023<i>.</i>9 min read",
      },
      {
        id: 4,
        img: blog_img_1_4,
        avatar: blog_avatar_1_4,
        tag_1: "Branding",
        tag_2: "Design",
        title: "Lazarev. recap — what 2023 was like for our design team",
        name: "Julie Foster",
        time: "Dec 26, 2023<i>.</i>9 min read",
      },
      {
        id: 5,
        img: blog_img_1_5,
        avatar: blog_avatar_1_5,
        tag_1: "Branding",
        tag_2: "Design",
        title: "Lazarev. recap — what 2023 was like for our design team",
        name: "Julie Foster",
        time: "Dec 26, 2023<i>.</i>9 min read",
      },
      {
        id: 6,
        img: blog_img_1_6,
        avatar: blog_avatar_1_6,
        tag_1: "Branding",
        tag_2: "Design",
        title: "3D product visualization: how it helps eCommerce business",
        name: "Mary Perry",
        time: "Dec 26, 2023<i>.</i>9 min read",
      },
    ]
  },  


]

export default blog_data