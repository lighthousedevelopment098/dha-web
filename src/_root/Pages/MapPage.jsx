import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import SectionBlocks from "../../components/Home/SectionBlocks";
import { phasesData } from "../../Utils/data";

const LatestProjects = [
  {
    title: "Phase III",
    link: "/phase-III-details",

    img: "upcoming1.jfif",
    description:
      "Located at the heart of enchanting Potohar Region, DHA Phase III promises elegant town planning with modernized residential...",
  },
  {
    title: "Phase IV",
    link: "/phase-IV-details",

    img: "/upcoming2.jpg",
    description:
      "Designed over an area of approx 4000 Kanals, DHA Phase IV is located adjacent to Orchard Area, DHA Phase I...",
  },
  {
    title: "Phase VI (Ex Phase - II Ext)",
    link: "/phase-VI-details",
    videoUrl:
      "/DHA Phase 2 Islamabad Central Park  4K  Drone Cinematics720p.mp4",
    img: "/upcoming3.jfif",
    description:
      "DHA Islamabad-Rawalpindi Phase VI (Ex Phase – II Ext) has launched in March 2005 and is spread over an area of 55,000 kanals...",
  },
];

const MapPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);
  return (
    <>
      <div
        className=" text-white px-5 py-4  "
        style={{
          backgroundImage: "url(/bgimg.jpg)",
          // backgroundPosition: "center",
          //   backgroundRepeat: "no-repeat",
          // backgroundSize: "150px 150px",
        }}
      >
        <div className="w-full max-w-4xl mx-auto my-3 px-4">
          <h1 className=" text-center text-primary text-lg my-5  md:text-3xl font-bold">
            <span className="border-b-2 border-primary">Maps</span>
          </h1>
          {/* <SectionTitle title="" /> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 ">
            {phasesData.map((phase, index) => (
              <div
                key={index}
                className="transform transition-transform hover:scale-102 hover:shadow-xl hover:bg-opacity-90 duration-300 ease-in-out   rounded-lg"
                data-aos="zoom-in"
              >
                <SectionBlocks
                  img={phase.img}
                  imageUrl={phase.imageUrl}
                  title={phase.title}
                  description={phase.description}
                  link={phase.link}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MapPage;
