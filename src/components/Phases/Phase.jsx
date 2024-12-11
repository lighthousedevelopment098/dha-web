import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import SectionBlocks from "../Home/SectionBlocks";

const phases = [
  {
    title: "Phase I",
    link: "/phase-I-details",
    img: "/phaseee1.png",
    description:
      "DHA Phase I Community has been meticulously planned and designed to best standards in order to present residents with an exceptional way of life and quality living in a semi",
  },
  {
    title: "Phase II",
    link: "/phase-II-details",
    img: "/phaseee2.png",
    description:
      "Nestled between Grand Trunk Road and Islamabad Highway lies our DHA phase II comprising of approx 15,075 kanals. All the sectors are fully urbanized and now home to a number of",
  },
  {
    title: "Phase III",
    link: "/phase-III-details",
    img: "/phaseee3.png",
    description:
      "Located in the heart of enchanting Potohar Region, DHA Phase III promises elegant town planning with beating heart concept.comprising modernized residential and commercial areas. Its town plan also",
  },
  {
    title: "Phase IV",
    link: "/phase-IV-details",
    img: "/phaseee4.png",
    description:
      "Designed over an area of approx 4000 Kanals, DHA Phase IV is located adjacent to Orchard Area, DHA Phase I along Soan River. Beautifully set in a semi-hilly area having eye catching",
  },
  {
    title: "Phase V",
    link: "/phase-V-details",
    img: "/phaseee5.png",
    description:
      "Formerly launched as Commoner's Town in 2006, over an area of approx 7000 kanals, It has been renamed as: DHA Phase V with Sector A, B, C, D,E, F, G & H. Phase-V is located along the Main Islamabad",
  },
  {
    title: "Phase VI (Ex Phase - II Ext)",
    link: "/phase-VI-details",

    img: "/phaseee6.png",
    description:
      "DHA Islamabad-Rawalpindi Phase VI (Ex Phase II Ext) has launched in March 2005 and is spread over an area of 55,000 kanals (estimated). After re-designing of masterplan",
  },
];

const Phase = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      easing: "ease-in-out", // Smooth easing for animations
      once: false, // Whether animation should happen only once
    });
  }, []);
  return (
    <>
      <div
        className=" text-white px-5 py-4  "
        style={{
          backgroundImage: "url(/1111.png)",
          // backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          // backgroundSize: "150px 150px",
        }}
      >
        <div className="w-full max-w-4xl mx-auto my-3 px-4">
          <h1 className=" text-center text-primary text-lg my-5  md:text-3xl font-bold">
            <span className="border-b-2 border-primary">Phases</span>
          </h1>
          {/* <SectionTitle title="" /> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 ">
            {phases.map((phase, index) => (
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

export default Phase;
