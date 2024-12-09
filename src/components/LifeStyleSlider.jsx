import React from "react";
import Slider from "react-slick";

// Import the required styles (if not imported globally)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LifeStyleSlider = () => {
  const images = [
    { src: "/sports.png", buttonText: "Sports" },
    { src: "/DJI_0287.png", buttonText: "Park" },
    { src: "/DSC_9794.png", buttonText: "Education" },
    { src: "/3RWDS.png", buttonText: "HealthCare" },

    { src: "/aminities.jpeg", buttonText: "Amenities" },
  ];

  const settings = {
    dots: false, // Show navigation dots
    infinite: true, // Infinite looping
    speed: 500, // Transition speed
    slidesToShow: 3, // Number of slides to show
    slidesToScroll: 1, // Number of slides to scroll
    autoplay: false, // Autoplay the slides
    autoplaySpeed: 3000, // Delay between slides
    responsive: [
      {
        breakpoint: 1024, // For medium screens (laptop)
        settings: {
          slidesToShow: 2, // Show 2 slides
        },
      },
      {
        breakpoint: 640, // For small screens (mobile)
        settings: {
          slidesToShow: 2, // Show 1 slide
        },
      },
    ],
  };

  return (
    <div className="w-full max-w-5xl mx-auto my-3 py-3 rounded-md shadow-lg shadow-primary">
      <Slider {...settings} className="">
        {images.map((image, index) => (
          <div key={index} className="relative px-2 md:px-5 ">
            {/* Gap between slides */}
            <img
              src={image.src}
              alt={`Slide ${index + 1}`}
              className="w-full h-56 md:h-96 object-cover"
            />
            {/* Button positioned at the bottom-left */}
            <div className="absolute bottom-4  left-4 md:left-6 w-32 sm:w-64 md:w-72 flex items-center justify-start backdrop-blur-sm bg-white/20 p-2 rounded-md">
              <button className="px-2 py-1 sm:px-4 sm:py-2 md:px-5 md:py-1 text-[.5rem] sm:text-base md:text-lg bg-[#BBB2B1] text-black font-bold rounded-md shadow-lg hover:bg-primary-dark transition duration-300">
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
