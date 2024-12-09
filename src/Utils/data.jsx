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

// export const menuData = [
//   { label: "About Us ", link: "/aboutus" },

//   {
//     label: "Our Projects",
//     subItems: [
//       { label: "Phases", link: "/" },
//       { label: "Ongoing Projects", link: "/" },
//       { label: "Upcoming Projects", link: "/" },
//     ],
//   },
//   {
//     label: "Lifestyle",
//     subItems: [
//       {
//         label: "Education",
//         link: "/",
//       },
//       {
//         label: "Healthcare",
//         link: "/",
//       },
//       {
//         label: "Parks",
//         link: "/",
//       },
//       {
//         label: "Sports",
//         link: "/",
//       },
//       {
//         label: "Hospitality",
//         link: "/",
//       },
//       {
//         label: "Retail",
//         link: "/",
//       },
//       {
//         label: "Infrastructue",
//         link: "/",
//       },
//       {
//         label: "Amenities",
//         link: "/",
//       },
//     ],
//   },
//   {
//     label: "Gallery",
//     subItems: [
//       {
//         label: "Events",
//         link: "/",
//       },
//       {
//         label: "Brochures",
//         link: "/",
//       },
//       {
//         label: "Maps",
//         link: "/",
//       },
//     ],
//   },
//   { label: "Facilities ", link: "/" },

//   {
//     label: "Member Portal",
//     subItems: [
//       { label: "Login", link: "/member-portal/login" },
//       { label: "Guide", link: "/member-portal/guide" },
//       { label: "How to Pay", link: "/member-portal/htp" },
//     ],
//   },
// ];

export const menuData = [
  { label: "Home", link: "/" },
  { 
    label: "About Us", 
    link: "/aboutus", 
  },
  { 
    label: "Our Projects", 
    link: "/services", 
    sub: [
      { subLabel: "Phases", link: "/phase" },
      { subLabel: "Ongoing Projects", link: "/OnGoing" },
      { subLabel: "Upcoming Projects", link: "/services/completed-projects" },
    ],
  },
  { 
    label: "Lifestyle", 
    link: "/portfolio", 
    sub: [
      { subLabel: "Education", link: "/portfolio/health-wellness" },
      { subLabel: "Healthcare", link: "/portfolio/recreation" },
      { subLabel: "Parks", link: "/portfolio/recreation" },
      { subLabel: "Sports", link: "/portfolio/recreation" },
      { subLabel: "Hospitality", link: "/portfolio/recreation" },
    ],
  },
  { 
    label: "Gallery", 
    link: "/gallery", 
    sub: [
      { subLabel: "Events", link: "/gallery/photos" },
      { subLabel: "Brochures", link: "/gallery/videos" },
      { subLabel: "Maps", link: "/gallery/videos" },
    ],
  },
  { 
    label: "Facilities", 
    link: "/facilities", 
 
  },
  { 
    label: "Member Portal", 
    // link: "/loginForm" ,
    sub:[
      { subLabel: "Login", link: "/loginForm" },
      // { subLabel: "Guide", link: "/guide" },
      { subLabel: "How to pay", link: "/HowToPay" },
      
    ]
  }
];
 export const dropdownData = [
  {
    main: "Property Exchange",
    link: "/Introduction&Services",
    sub: [
      { label: "Introduction & Services", link: "/Introduction&Services" },
      { label: "Price Valuation & Benchmarking", link: "/price-valuation" },
      { label: "Sales Of Property", link: "/saleproperty" },
      { label: "Purchase Of Property", link: "/purchaseofproperty" },
      { label: "Registration", link: "/dha-property-exchange/registration" },
      { label: "Contact Us", link: "/dha-property-exchange/contact-us" },
    ],
  },
  {
    main: "Affiliates",
    link: "/affiliates",
    sub: [
      { label: "Property Dealers", link: "/property-dealers" },
      { label: "Architects", link: "/architects" },
      { label: "Soil Test Firms", link: "/soil-test-firms" },
      { label: "Vetting Engineers", link: "/vetting-engineers" },
      { label: "PTCL", link: "/ptcl" },
      { label: "Structural Engineers", link: "/structural-engineers" },
      { label: "Solar Firms", link: "/solar-firms" },
      { label: "MEP Engineers", link: "/mep-engineers" },
    ],
  },
  {
    main: "Official Notice",
    link: "/official-notice",
    sub: [
      { label: "DHA ByLaws", link: "/dha-bylaws" },
      { label: "Transfer Procedure", link: "/transfer-procedure" },
      { label: "DHA Valley", link: "/dha-valley" },
      { label: "DHA Property Rentals", link: "/dha-property-rentals" },
      { label: "Downloads", link: "/downloads" },
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
