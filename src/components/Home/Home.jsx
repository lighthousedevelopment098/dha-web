import { useEffect } from "react";

import SectionBlocks from "./SectionBlocks";
import AOS from "aos";
import "aos/dist/aos.css";

import OurProjectSlider from "../OurProjectSlider";
import LifeStyleSlider from "../LifeStyleSlider";

import { phasesData } from "../../Utils/data";
const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 500, // Animation duration in ms
      easing: "ease-in-out", // Smooth easing for animations
      once: false, // Whether animation should happen only once
    });
  }, []);

  const images = [
    "/download.jpeg",
    "/images5.png",
    "/imges22.png",
    "/images5(2).png",
    "/images4.png",
  ];

  return (
    <>
      <div className="text-white grid grid-cols-1 md:grid-cols-2 px-4 gap-6 py-5 mx-auto max-w-4xl">
        {phasesData.map((phase, index) => (
          <div key={index} className="">
            {/* data-aos="zoom-in" */}
            <SectionBlocks
              img={phase.img}
              title={phase.title}
              description={phase.description}
              link={phase.link}
              bgImg={phase.bgImg}
            />
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto" data-aos="zoom-in">
        <h1 className=" text-center text-primary text-lg  md:text-3xl font-bold">
          <span className="border-b-2 border-primary"> Our Project</span>
        </h1>
        <OurProjectSlider />
      </div>

      <div>
        <h1
          className="pt-4 text-center text-primary text-lg uppercase  md:text-3xl font-bold"
          // data-aos="zoom-in"
        >
          <span className="border-b-2 border-primary"> LifeStyle</span>
        </h1>
        <LifeStyleSlider />
      </div>
      <div className="max-w-4xl mx-auto p-4 my-5 grid grid-cols-2 md:grid-cols-5 gap-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className="object-fill h-32 rounded-md shadow-md shadow-primary"
          />
        ))}
      </div>
    </>
  );
};

export default Home;
