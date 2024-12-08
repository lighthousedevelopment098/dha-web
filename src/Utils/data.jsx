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
import { label } from "framer-motion/client";

export const menuData = [
  { label: "About Us ", link: "/" },
  // {
  //   label: "Phases",
  //   subItems: [
  //     { label: "Phase ", link: "/phase" },
  //     {
  //       label: "Map",
  //       DropDown: [
  //         {
  //           label: "GIS Maps",
  //           subDropDown: [
  //             { label: "Phase I", link: "/phase-i-gismap" },
  //             { label: "Phase II", link: "/phase-ii-gismap" },
  //             { label: "Phase V", link: "/phase-v-gismap" },
  //             { label: "All Phases", link: "/all-phases-map" },
  //           ],
  //         },
  //         {
  //           label: "Phase IV Overseas Sector",
  //           link: "/phase-iv-overseas-sector",
  //         },
  //       ],
  //     },
  //   ],
  // },
  // { label: "Facilities", link: "/facilities" },
  // {
  //   label: "Media",
  //   subItems: [
  //     { label: "Advertisement", link: "/media/advertisement" },
  //     {
  //       label: "Videos",
  //       DropDown: [
  //         { label: "DHA Mobile App", link: "/media/videos/dha-mobile-app" },
  //         {
  //           label: "Public Service Message",
  //           link: "/media/public-service-message",
  //         },
  //         {
  //           label: "Avicenna Medical Centre Videos",
  //           link: "/media/videos/avicenna-medical-centre-videos",
  //         },
  //       ],
  //     },

  // {
  //   label: "EVENT & ACTIVITIES",
  //   DropDown: [
  //     { label: "PhotoGraphy", link: "/media/events" },
  //     // { label: "Videos", link: "/media/event-activities/video" },
  //   ],
  // },
  // { label: 'VR VIEW',
  //   //add the Dha phase 1
  //   DropDown: [
  //     { label: "DHA Phase 1 Head Office", link: "/media/vr-view/office" },
  //     { label: "DHA Phase 1 Masjid", link: "/media/vr-view/masjid" },
  //     { label: "DHA Phase 1 Park", link: "/media/vr-view/park" },
  //   ],
  // },
  // { label: "News", link: "/media/news" },
  // { label: "Classified / Notice", link: "/media/classified-notice" },
  // { label: "E-Newsletter", link: "/media/e-newsletter" },
  // {
  //   label: "How to Create FBR Tax Challans",
  //   link: "/media/fbr-tax-challans",
  // },
  // {
  //   label: "Future Projects",
  //   DropDown: [
  //     { label: "Round About DHA", link: "/media/future-projects/project" },
  //   ],
  // },
  //   ],
  // },
  // {
  //   label: "Procedure",
  //   subItems: [
  //     {
  //       label: "DHA VALLEY",
  //       DropDown: [
  //         { label: "File Opening", link: "/procedure/dha-valley/file-opening" },
  //         {
  //           label:
  //             "Issuance of New Allotment Certificate in Lieu of Old Allotment Certificate",
  //           link: "/procedure/dha-valley/issuance-new-allotment-certificate",
  //         },
  //         // {
  //         //   label: "Allotment Certificate Endorsement",
  //         //   link: "/procedure/dha-valley/allotment-certificate-endorsement",
  //         // },
  //         // {
  //         //   label: "Issuance of Allotment Letter to Allottee",
  //         //   link: "/procedure/dha-valley/issuance-allotment-letter",
  //         // },
  //         // {
  //         //   label: "File Conversion",
  //         //   link: "/procedure/dha-valley/file-conversion",
  //         // },
  //       ],
  //     },
  //     // {
  //     //   label: "TRANSFER PROCEDURE",
  //     //   DropDown: [
  //     //     {
  //     //       label: "Normal Transfer Procedure",
  //     //       link: "/procedure/transfer-procedure/normal-transfer",
  //     //     },
  //     //     {
  //     //       label: "Gift Transfer Procedure",
  //     //       link: "/procedure/transfer-procedure/gift-transfer",
  //     //     },
  //     //     {
  //     //       label: "Widow Transfer Procedure",
  //     //       link: "/procedure/transfer-procedure/widow-transfer",
  //     //     },
  //     //     {
  //     //       label: "SPA (Special Power of Attorney) Transfer Procedure",
  //     //       link: "/procedure/transfer-procedure/spa-transfer",
  //     //     },
  //     //     {
  //     //       label: "GPA (General Power of Attorney) Transfer Procedure",
  //     //       link: "/procedure/transfer-procedure/gpa-transfer",
  //     //     },
  //     //   ],
  //     // },
  //     // { label: "DHA Byelaws", link: "/procedure/dha-byelaws" },
  //     // {
  //     //   label: "Downloads",
  //     //   DropDown: [
  //     //     {
  //     //       label: "Download Forms",
  //     //       link: "/procedure/downloads/download-forms",
  //     //     },
  //     //     {
  //     //       label: "Revised Charges",
  //     //       link: "/procedure/downloads/revised-charges",
  //     //     },
  //     //   ],
  //     // },
  //     // {
  //     //   label: "DHA Property Rentals",
  //     //   link: "/procedure/dha-property-rentals",
  //     // },
  //   ],
  // },
  {
    label: "Our Projects",
    subItems: [
      { label: "Phases", link: "/property-dealer" },
      { label: "Ongoing Projects", link: "/search-property" },
      { label: "Upcoming Projects", link: "/affiliates/architects" },
      // { label: "Soil Test Firms", link: "/affiliates/soil-test-firms" },
      // { label: "Vetting Engineers", link: "/affiliates/vetting-engineers" },
      // { label: "PTCL", link: "/affiliates/ptcl" },
      // {
      //   label: "Structural Engineers",
      //   link: "/affiliates/structural-engineers",
      // },
      // { label: "Solar Firms", link: "/affiliates/solar-firms" },
      // { label: "MEP Engineers", link: "/affiliates/mep-engineers" },
    ],
  },
  {
    label: "Lifestyle",
    subItems: [
      {
        label: "Education",
        link: "/latest-activities/horticulture-activities",
      },
      {
        label: "Healthcare",
        link: "/latest-activities/plantation-drive-dhai-r-monsoon-2020",
      },
      {
        label: "Parks",
        link: "/latest-activities/dengue-prevention-campaign",
      },
      {
        label: "Sports",
        link: "/latest-activities/environmental-activities",
      },
      {
        label: "Hospitality",
        link: "/latest-activities/plantation-campaign",
      },
      {
        label: "Retail",
        link: "/latest-activities/plantation-campaign",
      },
      {
        label: "Infrastructue",
        link: "/latest-activities/plantation-campaign",
      },
      {
        label: "Amenities",
        link: "/latest-activities/plantation-campaign",
      },
      // {
      //   label: "Other-Activities",
      //   link: "/latest-activities/other-activities",
      // },
    ],
  },
  {
    label: "Gallery",
    subItems: [
      {
        label: "Events",
        link: "/dha-property-exchange/introduction-services",
      },
      {
        label: "Brochures",
        link: "/dha-property-exchange/price-valuation-benchmarking",
      },
      {
        label: "Maps",
        link: "/dha-property-exchange/sale-of-property",
      },
      // {
      //   label: "Rent a Properity",
      //   link: "/dha-property-exchange/rent-a-home",
      // },
      // {
      //   label: "Purchase of Property",
      //   link: "/dha-property-exchange/purchase-of-property",
      // },
      // { label: "Registration", link: "/dha-property-exchange/registration" },
      // { label: "Contact Us", link: "/dha-property-exchange/contact-us" },
    ],
  },
  { label: "Facilities ", link: "/" },
  // {
  //   label: "Member Portal",
  //   subItems: [
  //     { label: "Login", link: "/important-notices" },
  //     { label: "Guide", link: "/member-portal/complain" },
  //     { label: "How To Play", link: "/member-portal/complain" },
  //   ],
  // },
  {
    label: "Member Portal",
    subItems: [
      { label: "Login", link: "/member-portal/login" },
      { label: "Guide", link: "/member-portal/guide" },
      { label: "How to Pay", link: "/member-portal/htp" },
    ],
  },
  {
    // label: "Property Listing",
    // link: "/property"
    // subItems: [
    //   { label: "F", link: "/faqs" },
    //   // { label: "", link: "/ask-a-question" },
    // ],
  },
  // {
  //   label: "Services",
  //   subItems: [
  //     { label: "Home Servise", link: "/faqs" },
  //     // { label: "", link: "/ask-a-question" },
  //   ],
  // },
  // {
  //   label: "Services",
  //   subItems: [
  //     { label: "Home Maintenance", link: "/home-maintenance" },
  //     { label: "Cleaning Services", link: "/cleaning" },

  //     // { label: "", link: "/ask-a-question" },
  //   ],
  // },
  // {
  //   label: "New Editions",
  //   subItems: [
  //     {
  //       label: "Property Listing",
  //       link: "https://demo.phpscriptpoint.com/realspoint/",
  //     },
  //     { label: "Home Services", link: "https://captainhomeservice.com/" },
  //     { label: "Resident Portal", link: "/new-editions/portal" },
  //     {
  //       label: "Complaint management System",
  //       link: "https://demo.workdo.io/ticketgo/admin/dashboard",
  //     },
  //   ],
  // },
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
  // Add more advertisements
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
