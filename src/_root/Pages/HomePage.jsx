import React from "react";
import Home from "../../components/Home/Home";
import ImageSlider from "../../components/ImageSlider";

const HomePage = () => {
  return (
    <div>
      {/* <HeroSectionWithHeading backgroundVideo={"/dha.mp4"}/> */}
      <ImageSlider />
      <Home />
    </div>
  );
};

export default HomePage;
