import React, { useEffect } from "react";
import SectionTitle from "../Card/SectionTitle";

import AOS from "aos";
import "aos/dist/aos.css";

import PhaseCard from "../Card/PhaseCard";
import HeroSectionWithHeading from "../Share/HeroScetionWithHeading";
const LatestProjects = [
  {
    title: "Phase III",
    link: "/phase-i-gismap",
    videoUrl: "/dha1.mp4",

    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpez-wM6yclpeLOqSZ-vH2LtPrPQ6996gt7A&s",
    description:
      "Located at the heart of enchanting Potohar Region, DHA Phase III promises elegant town planning with modernized residential...",
  },
  {
    title: "Phase IV",
    link: "/all-phases-map",
    videoUrl: "/dha1.mp4",
    imageUrl:
      "https://theleadmarketing.com/wp-content/uploads/2023/01/DHA-Phase-4-Islamabad.jpg",
    description:
      "Designed over an area of approx 4000 Kanals, DHA Phase IV is located adjacent to Orchard Area, DHA Phase I...",
  },
  {
    title: "Phase VI (Ex Phase - II Ext)",
    link: "/all-phases-map",
    videoUrl:
      "/DHA Phase 2 Islamabad Central Park  4K  Drone Cinematics720p.mp4",
    imageUrl:
      "https://media.licdn.com/dms/image/D4D12AQGB2C5p01W4FA/article-cover_image-shrink_720_1280/0/1683022326498?e=2147483647&v=beta&t=BbEswTdCIWoZLgPvqjHFLZ0wIin--OuiWmHP7rimiHg",
    description:
      "DHA Islamabad-Rawalpindi Phase VI (Ex Phase – II Ext) has launched in March 2005 and is spread over an area of 55,000 kanals...",
  },
];

const Upcoming = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      easing: "ease-in-out", // Smooth easing for animations
      once: false, // Whether animation should happen only once
    });
  }, []);
  return (
    <>
      <HeroSectionWithHeading
        heading="Some of Our Upcoming Projects:"
        backgroundVideo="/DHA Phase 2 Islamabad Central Park  4K  Drone Cinematics720p.mp4"
      />
      <div className="bg-brand text-white px-5 py-4">
        {/* <SectionTitle title="" /> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {LatestProjects.map((LatestProject, index) => (
            <div
              key={index}
              className=" transform transition-transform hover:scale-102 hover:shadow-xl hover:bg-opacity-90 duration-300 ease-in-out   rounded-md"
              data-aos="zoom-in"
            >
              <PhaseCard
                imageUrl={LatestProject.imageUrl}
                title={LatestProject.title}
                description={LatestProject.description}
                link={LatestProject.link}
                videoUrl={LatestProject.videoUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Upcoming;
