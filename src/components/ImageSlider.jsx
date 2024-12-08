import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "0px",
    arrows: true,
    fade: true,
    cssEase: "ease-in-out",
    nextArrow: (
      <div className="slick-arrow slick-next bg-primary p-4 rounded-full text-white hover:bg-white hover:text-primary">
        →
      </div>
    ),
    prevArrow: (
      <div className="slick-arrow slick-prev bg-primary p-4 rounded-full text-white hover:bg-white hover:text-primary">
        ←
      </div>
    ),
    customPaging: (i) => (
      <div className="dot w-3 h-3 rounded-full bg-white mx-2"></div>
    ),
  };

  const slides = [
    {
      img: "/Facebook.png",
    },
    {
      img: "/WhatsApp Image 2024-.png",
    },
    {
      img: "/Mask Group 1.png",
    },
  ];

  return (
    <div
      className="max-w-full mt-10 px-4 sm:px-8 lg:p-10"
      style={{
        backgroundImage: "url('/observation-urban-bu.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className="relative group rounded-lg overflow-hidden shadow-xl"
          >
            {/* Image */}
            <img
              src={slide.img}
              alt={`Slide ${index + 1}`}
              className="w-full md:h-[90vh] object-cover rounded-md transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 rounded-md bg-gradient-to-b from-transparent to-black opacity-60"></div>

            {/* Text Content */}
            <div className="absolute bottom-10 rounded-md left-10 text-white group-hover:opacity-100 opacity-0 transition-opacity duration-500 ease-in-out">
              <h2 className="text-2xl font-semibold text-primary border-2 border-primary py-2 px-6 rounded-md mb-3 hover:bg-white hover:text-black transition-all duration-300 ease-in-out">
                See More
              </h2>
            </div>

            {/* Hover Effects */}
            <div className="absolute inset-0 rounded-md group-hover:bg-black group-hover:opacity-50 transition-all duration-300 ease-in-out"></div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
