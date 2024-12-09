import React from "react";
import Slider from "react-slick";

// Import the required styles (if not imported globally)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LifeStyleSlider = () => {
  const images = [
    { src: "/DJI_0287.png", buttonText: "Park" },
    { src: "/DSC_9794.png", buttonText: "Education" },
    { src: "/3RWDS.png", buttonText: "HealthCare" },
  ];

  const settings = {
    dots: false, // Show navigation dots
    infinite: true, // Infinite looping
    speed: 500, // Transition speed
    slidesToShow: 3, // Number of slides to show
    slidesToScroll: 1, // Number of slides to scroll
    autoplay: false, // Autoplay the slides
    autoplaySpeed: 3000, // Delay between slides
  };

  return (
    <div className="w-full max-w-5xl mx-auto my-3 shadow-lg shadow-primary">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="relative px-5">
            {" "}
            {/* Gap between slides */}
            <img
              src={image.src}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto rounded-md object-cover"
            />
            {/* Button positioned at the bottom-left */}
            <div className="absolute bottom-4 left-6 w-72 flex items-center justify-start backdrop-blur-sm bg-white/20 p-2 rounded-md">
              <button className="px-4 py-1 bg-[#BAB2B2] text-black font-bold rounded-md shadow-lg hover:bg-primary-dark transition duration-300">
                {image.buttonText}
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LifeStyleSlider;
