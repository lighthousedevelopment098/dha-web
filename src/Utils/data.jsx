// import image1 from "../assets/Images/Advertisements/real-state.jpg";
// import image2 from "../assets/Images/Advertisements/DHA-security.jpg";
// import image3 from "../assets/Images/Advertisements/notice.jpg";
// import image4 from "../assets/Images/Advertisements/ips.jpg";
// import image5 from "../assets/Images/Advertisements/phase-4.jpeg";
// import image6 from "../assets/Images/Advertisements/river-view.jpg";
// import image7 from "../assets/Images/Advertisements/phase-v.jpg";
// import image8 from "../assets/Images/Advertisements/expressway.jpg";
// import image9 from "../assets/Images/Advertisements/secter-j.jpg";
// import image10 from "../assets/Images/Advertisements/secter-k.jpg";
// import image12 from "../assets/Images/Advertisements/auction.jpg";
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
      { subLabel: "Upcoming Projects", link: "/Upcoming" },
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
      { subLabel: "Events", link: "/events/PhotoGallery" },
      { subLabel: "Brochures", link: "/brochures" },
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
    sub: [
      { subLabel: "Login", link: "/loginForm" },
      // { subLabel: "Guide", link: "/guide" },
      { subLabel: "How to pay", link: "/HowToPay" },
    ],
  },
];
export const dropdownData = [
  {
    main: "Property Exchange",
    link: "/Introduction&Services",
    sub: [
      { label: "Introduction & Services", link: "/Introduction&Services" },
      { label: "Price Valuation & Benchmarking", link: "/dha-property-exchange/price-valuation-benchmarking" },
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
      { label: "Property Dealers", link: "/Propertydealer" },
      { label: "Architects", link: "/Architectspage" },
      { label: "Soil Test Firms", link: "/affiliates/soil-test-firms" },
      { label: "Vetting Engineers", link: "/affiliates/vetting-engineers" },
      { label: "PTCL", link: "/affiliates/ptcl" },
      { label: "Structural Engineers", link: "/affiliates/structural-engineers" },
      { label: "Solar Firms", link: "/affiliates/solar-firms" },
      { label: "MEP Engineers", link: "/affiliates/mep-engineers" },
    ],
  },
  {
    main: "Official Notice",
    link: "/official-notice",
    sub: [
      { label: "DHA ByLaws", link: "/DHABylawsPage" },
      { label: "Transfer Procedure", link: "/TransferProcedure" },
      { label: "DHA Valley", link: "/procedure/dha-valley/file-opening" },
      { label: "DHA Property Rentals", link: "/Renthome" },
      { label: "Downloads", link: "/DownloadPage" },
    ],
  },
];

export const advertisementData = [
  // {
  //   imageUrl: image1,
  //   title: "Real Estate Investment in Pakistan",
  // },
  // {
  //   imageUrl: image2,
  //   title: "DHA Security",
  // },
  // {
  //   imageUrl: image3,
  //   title: "Important Notice",
  // },
  // {
  //   imageUrl: image4,
  //   title: "IPS - 2024",
  // },
  // {
  //   imageUrl: image5,
  //   title: "Possession of Plots Sector A,B & C, Phase-IV",
  // },
  // {
  //   imageUrl: image6,
  //   title: "River View South",
  // },
  // {
  //   imageUrl: image7,
  //   title: "Possession of Residential Plots Sector J, Phase-V",
  // },
  // {
  //   imageUrl: image8,
  //   title: "Ground Breaking of DHA Interchange on Islamabad Express Way",
  // },
  // {
  //   imageUrl: image9,
  //   title: "Possession of Residential Plots Sector J, Phase-V",
  // },
  // {
  //   imageUrl: image10,
  //   title: "Possession of Residential Plots Sector J, Phase-V",
  // },
  // {
  //   imageUrl: image12,
  //   title: "Open Auction",
  // },
];

export const phasesData = [
  {
    img: "/phasei.png",
    title: "Phase I",
    description:
      "Phase I DHA Phase I Community has been meticulously planned and designed to best standards in order to present residents with an exceptional way of life and quality living in a semi",
    link: "/phase-I-details",
    bgImg: "/pngwing.com.png",
  },
  {
    img: "/phaseii.png",
    title: "Phase II",
    description:
      "Nestled between Grand Trunk Road and Islamabad Highway lies our DHA phase II comprising of approx 15.075 kanals: All the sectors are fully urbanized and now home to a number of",
    link: "/phase-II-details",
    bgImg: "/pngwing.com.png",
  },
  {
    img: "/phase3.png",
    title: "Phase III",
    description:
      "Located in the heart of enchanting Potohár Region, DHA Phase III promises elegant town planning with beating heart concept.comprising modernized residential and commercial areas, Its town plan also",
    link: "/phase-III-details",
    bgImg: "/pngwing.com.png",
  },
  {
    img: "/phase4.png",
    title: "Phase IV",
    description:
      "Designed over an area of approx 4000 Kanals, DHA Phase IV is located adjacent to Orchard Area, DHA Phase I along Soan River. Beautifully set in a semi-hilly area having eye-catching",
    link: "/phase-IV-details",
    bgImg: "/pngwing.com.png",
  },
  {
    img: "/phase5.png",
    title: "Phase V",
    description:
      "Formerly launched as Commoner's Town in 2006, over an area of approx 7000 kanals, it has been renamed as DHA Phase V with Sector A. B, C, D,E, F, G & H. Phase-V is located along the Main Islamabad",
    link: "/phase-V-details",
    bgImg: "/pngwing.com.png",
  },
  {
    img: "/phase6.png",
    title: "Phase VI",
    description:
      "DHA Islamabad-Rawalpindi Phase VI (Ex Phase - II Ext) has launched in March 2005 and is spread over an area of 55,000 kanals (estimated). After re-designing of masterplan",
    link: "/phase-VI-details",
    bgImg: "/pngwing.com.png",
  },
];
