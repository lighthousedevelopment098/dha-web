// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const ImageSlider = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     centerMode: true,
//     centerPadding: "0px",
//     arrows: true,
//     fade: true,
//     cssEase: "ease-in-out",
//     nextArrow: (
//       <div className="slick-arrow slick-next bg-primary p-4 rounded-full text-white hover:bg-white hover:text-primary">
//         →
//       </div>
//     ),
//     prevArrow: (
//       <div className="slick-arrow slick-prev bg-primary p-4 rounded-full text-white hover:bg-white hover:text-primary">
//         ←
//       </div>
//     ),
//     customPaging: (i) => (
//       <div className="dot w-3 h-3 rounded-full bg-white mx-2"></div>
//     ),
//   };

//   const slides = [
//     {
//       img: "/Facebook.png",
//     },
//     {
//       img: "/WhatsApp Image 2024-.png",
//     },
//     {
//       img: "/Mask Group 1.png",
//     },
//   ];

//   return (
//     <div
//       className="max-w-full mt-10 px-4 sm:px-8 lg:p-10"
//       style={{
//         backgroundImage: "url('/observation-urban-bu.png')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       <Slider {...settings}>
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className="relative group rounded-lg overflow-hidden shadow-xl"
//           >
//             {/* Image */}
//             <img
//   src={slide.img}
//   alt={`Slide ${index + 1}`}
//   className="w-[70%] md:h-[80vh] object-cover rounded-md mx-auto transition-transform duration-700 ease-out group-hover:scale-105"
// />


//             {/* Overlay */}
//             <div className="absolute inset-0 rounded-md bg-gradient-to-b from-transparent to-black opacity-60"></div>

//             {/* Text Content */}
//             <div className="absolute bottom-10 rounded-md left-10 text-white group-hover:opacity-100 opacity-0 transition-opacity duration-500 ease-in-out">
//               <h2 className="text-2xl font-semibold text-primary border-2 border-primary py-2 px-6 rounded-md mb-3 hover:bg-white hover:text-black transition-all duration-300 ease-in-out">
//                 See More
//               </h2>
//             </div>

//             {/* Hover Effects */}
//             <div className="absolute inset-0 rounded-md group-hover:bg-black group-hover:opacity-50 transition-all duration-300 ease-in-out"></div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default ImageSlider;

import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current image index

  const slides = [
    { img: "/Facebook.png" },
    { img: "/WhatsApp Image 2024-.png" },
    { img: "/Mask Group 1.png" },
  ];

  // Automatically change slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 2000);
    return () => clearInterval(interval); // Clear interval when the component unmounts
  }, [slides.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length); // Go to the next slide
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    ); // Go to the previous slide
  };

  return (
    <div
      className="max-w-full mt-10 px-4 sm:px-8 lg:p-10 relative overflow-hidden"
      style={{
        backgroundImage: "url('/observation-urban-bu.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Slider */}
      <div className="relative">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${
              index === currentIndex ? "block" : "hidden"
            } relative rounded-lg overflow-hidden flex items-center justify-center`}
          >
            {/* Main Image */}
            <img
              src={slide.img}
              alt={`Slide ${index + 1}`}
              className="w-full sm:w-[80%] md:w-[70%] lg:w-[60%] h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] object-cover rounded-md mx-auto"
            />
            {/* See More Button */}
            <button
              className="absolute bottom-10 left-5 md:left-32 lg:left-80 px-6 py-2 bg-transparent text-primary border border-primary font-semibold shadow-md hover:bg-gray-200"
              style={{ zIndex: 10 }}
            >
              See More
            </button>
          </div>
        ))}
      </div>

      {/* Right-side Skewed Image */}
      <div
        className="absolute shadow-xl top-1/2 right-[-100px] transform -translate-y-8 w-[20%] h-auto overflow-hidden z-10 skew-y-12"
        style={{ transition: "transform 0.5s ease-in-out" }}
      >
        <img
          src={slides[(currentIndex + 1) % slides.length].img} // Get the next image in the sequence
          alt="Next Image"
          className="object-cover w-[60%]"
        />
      </div>

      {/* Navigation Arrows */}
      <div className="absolute top-1/2 left-5 z-10 transform -translate-y-1/2 sm:left-5 sm:right-auto md:left-20 lg:left-64">
        <button
          onClick={handlePrev}
          className="text-white text-3xl p-2 bg-black rounded-md hover:bg-gray-800"
        >
          <FaChevronLeft />
        </button>
      </div>
      <div className="absolute top-1/2 right-5 z-10 transform -translate-y-1/2 sm:right-5 sm:left-auto md:right-20 lg:right-64">
        <button
          onClick={handleNext}
          className="text-white text-3xl p-2 bg-black rounded-md hover:bg-gray-800"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;















