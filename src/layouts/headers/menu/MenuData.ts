import { StaticImageData } from "next/image";


interface DataType {
  id: number;
  title: string;
  link: string;
  img_dropdown?: boolean;
  has_dropdown?: boolean;
  sub_menus?: {
    link: string;
    title: string;
    btn_title?: string;
    one_page_link?: string | any;
    one_page_title?: string;
    demo_img?: StaticImageData | any;
    mobile_menu?: boolean;
  }[];
}[]
// menu data 
const menu_data: DataType[] = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "About Me",
    link: "/about",
    has_dropdown: false,
  },

  // {
  //   id: 3,
  //   title: "Services",
  //   link: "#",
  //   has_dropdown: true,
  //   sub_menus: [
  //     { link: "/service", title: "Service" },
  //     { link: "/service-details", title: "Service Details" },
  //   ],
  // },
  {
    id: 4,
    title: "Portfolio",
    link: "/portfolio",
    has_dropdown: false,
    sub_menus: [
      { link: "/portfolio", title: "Portfolio" },
      { link: "/portfolio-details", title: "Portfolio Details" },
      { link: "/portfolio-details-2", title: "Portfolio Details 02" },
      { link: "/portfolio-details-3", title: "Portfolio Details 03" },
    ],
  },
  {
    id: 6,
    title: "Contact",
    link: "/contact",
    has_dropdown: false,
  },
];
export default menu_data;
