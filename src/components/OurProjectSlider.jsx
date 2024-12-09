import React from "react";
import Slider from "react-slick";

// Import the required styles (if not imported globally)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurProjectSlider = () => {
  const images = ["/Picture1.png", "/MaskGroup1(1).png", "/MaskGroup1(2).png"];

  const settings = {
    dots: false, // Show navigation dots
    infinite: true, // Infinite looping
    speed: 500, // Transition speed
    slidesToShow: 1, // Number of slides to show
    slidesToScroll: 1, // Number of slides to scroll
    autoplay: true, // Autoplay the slides
    autoplaySpeed: 3000, // Delay between slides
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-3 shadow-lg shadow-primary">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto rounded-md object-fill"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OurProjectSlider;
