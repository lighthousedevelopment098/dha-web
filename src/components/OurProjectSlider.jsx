import React from "react";
import Slider from "react-slick";

// Import the required styles (if not imported globally)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurProjectSlider = () => {
  const slides = [
    {
      img: "/Picture1.png",
      link: "/details-1",
    },
    {
      img: "/MaskGroup1(1).png",
      link: "/details-2",
    },
    {
      img: "/MaskGroup1(2).png",
      link: "/details-3",
    },
  ];

  const settings = {
    dots: false, // Show navigation dots
    infinite: true, // Infinite looping
    speed: 200, // Transition speed
    slidesToShow: 1, // Number of slides to show
    slidesToScroll: 1, // Number of slides to scroll
    autoplay: true, // Autoplay the slides
    autoplaySpeed: 2000, // Delay between slides
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-3 px-4 md:px-0 shadow-xl shadow-primary">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <img
              src={slide.img}
              alt={`Slide ${index + 1}`}
              className="w-full md:h-[70vh] object-cover rounded-md p-0 m-0"
            />
            <div className="absolute bottom-4 left-0 bg-black opacity-50 h-20 flex items-center w-full text-start">
              <a
                href={slide.link}
                className="inline-block bg-transparent border-2  border-primary ms-4 px-6 py-2 text-sm font-bold  text-primary rounded-lg hover:bg-primary-dark transition-all"
              >
                See More
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OurProjectSlider;
