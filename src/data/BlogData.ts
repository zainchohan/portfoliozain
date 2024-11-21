

import { StaticImageData } from "next/image";

import avatart_img_1 from "@/assets/img/users/blog-list-avata-1.png";

import slider_img_1 from "@/assets/img/blog/blog-3-3-1.jpg"; 
import slider_img_2 from "@/assets/img/blog/blog-list-1-1.jpg"; 
import slider_img_3 from "@/assets/img/blog/blog-list-1-2.jpg";

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
    category: "Design",
    sliders: [
      {
        img: slider_img_1,
        tag1: "JS",
        tag2: "React",
        title: "Webiste 1",
        link: "https://www.google.com/"
      },
      {
        img: slider_img_2,
        tag1: "JS1",
        tag2: "React1",
        title: "Webiste 2",
      },
      {
        img: slider_img_3,
        tag1: "JS1",
        tag2: "React1",
        title: "Webiste 3",
      },
      {
        img: slider_img_2,
        tag1: "JS1",
        tag2: "React1",
        title: "Webiste 2",
      },
      {
        img: slider_img_3,
        tag1: "JS1",
        tag2: "React1",
        title: "Webiste 3",
      },
      {
        img: slider_img_2,
        tag1: "JS1",
        tag2: "React1",
        title: "Webiste 2",
      },
      {
        img: slider_img_3,
        tag1: "JS1",
        tag2: "React1",
        title: "Webiste 3",
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
    category: "Debelopment",
    sliders: [
      {
        img: slider_img_3,
        tag1: "JS",
        tag2: "React",
        title: "Webiste 4",
      },
      {
        img: slider_img_2,
        tag1: "JS",
        tag2: "React",
        title: "Webiste 5",
      },
      {
        img: slider_img_1,
        tag1: "JS",
        tag2: "React",
        title: "Webiste 6",
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
    category: "Strategy",
    sliders: [
      {
        img: slider_img_3,
        tag1: "JS",
        tag2: "React",
        title: "Webiste 6",
      },
      {
        img: slider_img_2,
        tag1: "JS",
        tag2: "React",
        title: "Webiste 6",
      },
      {
        img: slider_img_1,
        tag1: "JS",
        tag2: "React",
        title: "Webiste 6",
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
    category: "Work Culture",
    sliders: [
      {
        img: slider_img_3,
        tag1: "JS",
        tag2: "React",
        title: "Webiste 6",
      },
      {
        img: slider_img_1,
        tag1: "JS",
        tag2: "React",
        title: "Webiste 6",
      },
      {
        img: slider_img_1,
        tag1: "JS",
        tag2: "React",
        title: "Webiste 6",
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


]

export default blog_data