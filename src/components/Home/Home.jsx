import React, { useEffect } from "react";
import HeroSection from "./HeroSection";
import SectionBlocks from "./SectionBlocks";
import AOS from "aos";
import "aos/dist/aos.css";
import ImageSlider from "../ImageSlider";
const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 500, // Animation duration in ms
      easing: "ease-in-out", // Smooth easing for animations
      once: false, // Whether animation should happen only once
    });
  }, []);
  return (
    <div className="text-white grid grid-cols-2 gap-6 py-5 mx-auto max-w-4xl">
      {/* Phase I */}
      <div className="" data-aos="fade-up">
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
  );
};

export default Home;
