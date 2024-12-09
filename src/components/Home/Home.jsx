import React, { useEffect } from "react";
import HeroSection from "./HeroSection";
import SectionBlocks from "./SectionBlocks";
import AOS from "aos";
import "aos/dist/aos.css";
import ImageSlider from "../ImageSlider";
import OurProjectSlider from "../OurProjectSlider";
import LifeStyleSlider from "../LifeStyleSlider";
import AboutUs from "../AboutUs/AboutUs";
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
        {/* Phase I */}
        <div className="m-0 p-0" data-aos="fade-up">
          <SectionBlocks
            img="/Picture2.png"
            title="Phase I"
            description="DHA Phase I Community has been meticulously planned and designed to best standards in order to present residents with an exceptional way of life and quality living in a semi-urban setting."
            link="/phase-I-details"
            bgImg="/pngwing.com.png"
          />
        </div>

        {/* Phase II - Reversed Layout */}
        <div className="" data-aos="fade-up">
          <SectionBlocks
            img="/Picture2.png"
            title="Phase I"
            description="DHA Phase I Community has been meticulously planned and designed to best standards in order to present residents with an exceptional way of life and quality living in a semi-urban setting."
            link="/phase-I-details"
            bgImg="/pngwing.com.png"
          />
        </div>

        {/* Phase III */}
        <div className="" data-aos="fade-up">
          <SectionBlocks
            img="/Picture2.png"
            title="Phase I"
            description="DHA Phase I Community has been meticulously planned and designed to best standards in order to present residents with an exceptional way of life and quality living in a semi-urban setting."
            link="/phase-I-details"
            bgImg="/pngwing.com.png"
          />
        </div>

        {/* Phase IV - Reversed Layout */}
        <div className="" data-aos="fade-up">
          <SectionBlocks
            img="/Picture2.png"
            title="Phase I"
            description="DHA Phase I Community has been meticulously planned and designed to best standards in order to present residents with an exceptional way of life and quality living in a semi-urban setting."
            link="/phase-I-details"
            bgImg="/pngwing.com.png"
          />
        </div>

        {/* Phase V */}
        <div className="" data-aos="fade-up">
          <SectionBlocks
            img="/Picture2.png"
            title="Phase I"
            description="DHA Phase I Community has been meticulously planned and designed to best standards in order to present residents with an exceptional way of life and quality living in a semi-urban setting."
            link="/phase-I-details"
            bgImg="/pngwing.com.png"
          />
        </div>

        {/* Phase VI - Reversed Layout */}
        <div className="" data-aos="fade-up">
          <SectionBlocks
            img="/Picture2.png"
            title="Phase I"
            description="DHA Phase I Community has been meticulously planned and designed to best standards in order to present residents with an exceptional way of life and quality living in a semi-urban setting."
            link="/phase-I-details"
            bgImg="/pngwing.com.png"
          />
        </div>

        {/* DHA Valley */}
        <div className="" data-aos="fade-up">
          <SectionBlocks
            img="/Picture2.png"
            title="Phase I"
            description="DHA Phase I Community has been meticulously planned and designed to best standards in order to present residents with an exceptional way of life and quality living in a semi-urban setting."
            link="/phase-I-details"
            bgImg="/pngwing.com.png"
          />
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <h1 className=" text-center text-primary text-lg  md:text-3xl font-bold">
          <span className="border-b-2 border-primary"> Our Project</span>
        </h1>
        <OurProjectSlider />
      </div>

      <div>
        <h1 className=" text-center text-primary text-lg uppercase  md:text-3xl font-bold">
          <span className="border-b-2 border-primary"> LifeStyle</span>
        </h1>
        <LifeStyleSlider />
      </div>
      <div className="max-w-4xl mx-auto px-4 my-5 grid grid-cols-2 md:grid-cols-5 gap-4">
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
