import image1 from "../assets/Images/Advertisements/real-state.jpg";
import image2 from "../assets/Images/Advertisements/DHA-security.jpg";
import image3 from "../assets/Images/Advertisements/notice.jpg";
import image4 from "../assets/Images/Advertisements/ips.jpg";
import image5 from "../assets/Images/Advertisements/phase-4.jpeg";
import image6 from "../assets/Images/Advertisements/river-view.jpg";
import image7 from "../assets/Images/Advertisements/phase-v.jpg";
import image8 from "../assets/Images/Advertisements/expressway.jpg";
import image9 from "../assets/Images/Advertisements/secter-j.jpg";
import image10 from "../assets/Images/Advertisements/secter-k.jpg";
import image12 from "../assets/Images/Advertisements/auction.jpg";
// import { label } from "framer-motion/client";

export const menuData = [
  { label: "About Us ", link: "/aboutus" },

  {
    label: "Our Projects",
    subItems: [
      { label: "Phases", link: "/" },
      { label: "Ongoing Projects", link: "/" },
      { label: "Upcoming Projects", link: "/" },
    ],
  },
  {
    label: "Lifestyle",
    subItems: [
      {
        label: "Education",
        link: "/",
      },
      {
        label: "Healthcare",
        link: "/",
      },
      {
        label: "Parks",
        link: "/",
      },
      {
        label: "Sports",
        link: "/",
      },
      {
        label: "Hospitality",
        link: "/",
      },
      {
        label: "Retail",
        link: "/",
      },
      {
        label: "Infrastructue",
        link: "/",
      },
      {
        label: "Amenities",
        link: "/",
      },
    ],
  },
  {
    label: "Gallery",
    subItems: [
      {
        label: "Events",
        link: "/",
      },
      {
        label: "Brochures",
        link: "/",
      },
      {
        label: "Maps",
        link: "/",
      },
    ],
  },
  { label: "Facilities ", link: "/" },

  {
    label: "Member Portal",
    subItems: [
      { label: "Login", link: "/member-portal/login" },
      { label: "Guide", link: "/member-portal/guide" },
      { label: "How to Pay", link: "/member-portal/htp" },
    ],
  },
];

export const advertisementData = [
  {
    imageUrl: image1,
    title: "Real Estate Investment in Pakistan",
  },
  {
    imageUrl: image2,
    title: "DHA Security",
  },
  {
    imageUrl: image3,
    title: "Important Notice",
  },

  {
    imageUrl: image4,
    title: "IPS - 2024",
  },
  {
    imageUrl: image5,
    title: "Possession of Plots Sector A,B & C, Phase-IV",
  },
  {
    imageUrl: image6,
    title: "River View South",
  },
  {
    imageUrl: image7,
    title: "Possession of Residential Plots Sector J, Phase-V",
  },
  {
    imageUrl: image8,
    title: "Ground Breaking of DHA Interchange on Islamabad Express Way",
  },
  {
    imageUrl: image9,
    title: "Possession of Residential Plots Sector J, Phase-V",
  },
  {
    imageUrl: image10,
    title: "Possession of Residential Plots Sector J, Phase-V",
  },
  {
    imageUrl: image12,
    title: "Open Auction",
  },
];
