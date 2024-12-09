

// import React, { useState, useEffect } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// const ImageSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0); // Track the current image index

//   const slides = [
//     { img: "/Facebook.png" },
//     { img: "/WhatsApp Image 2024-.png" },
//     { img: "/Mask Group 1.png" },
//   ];

//   // Automatically change slide every 2 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
//     }, 2000);
//     return () => clearInterval(interval); // Clear interval when the component unmounts
//   }, [slides.length]);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length); // Go to the next slide
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? slides.length - 1 : prevIndex - 1
//     ); // Go to the previous slide
//   };

//   return (
//     <div
//       className="max-w-full mt-10 px-4 sm:px-8 lg:p-10 relative overflow-hidden"
//       style={{
//         backgroundImage: "url('/observation-urban-bu.png')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       {/* Slider */}
//       <div className="relative">
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className={`${
//               index === currentIndex ? "block" : "hidden"
//             } relative rounded-lg overflow-hidden flex items-center justify-center`}
//           >
//             {/* Main Image */}
//             <img
//               src={slide.img}
//               alt={`Slide ${index + 1}`}
//               className="w-full sm:w-[80%] md:w-[70%] lg:w-[60%] h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] object-cover rounded-md mx-auto"
//             />
//             {/* See More Button */}
//             <button
//               className="absolute bottom-10 left-5 md:left-32 lg:left-80 px-6 py-2 bg-transparent text-primary border border-primary font-semibold shadow-md hover:bg-gray-200"
//               style={{ zIndex: 10 }}
//             >
//               See More
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Right-side Skewed Image */}
//       <div
//         className="absolute shadow-xl top-1/2 right-[-60px] transform -translate-y-1/2 w-[20%] overflow-hidden z-10 skew-y-12"
//         style={{
//           height: "calc(70vh)", // Dynamically set to match main image height
//           transition: "transform 0.5s ease-in-out",
//         }}
//       >
//         <img
//           src={slides[(currentIndex + 1) % slides.length].img} // Get the next image in the sequence
//           alt="Next Image"
//           className="object-cover w-full h-full"
//         />
//       </div>

//       {/* Navigation Arrows */}
//       <div className="absolute top-1/2 left-5 z-10 transform -translate-y-1/2 sm:left-5 sm:right-auto md:left-20 lg:left-64">
//         <button
//           onClick={handlePrev}
//           className="text-white text-3xl p-2 bg-black rounded-md hover:bg-gray-800"
//         >
//           <FaChevronLeft />
//         </button>
//       </div>
//       <div className="absolute top-1/2 right-5 z-10 transform -translate-y-1/2 sm:right-5 sm:left-auto md:right-20 lg:right-64">
//         <button
//           onClick={handleNext}
//           className="text-white text-3xl p-2 bg-black rounded-md hover:bg-gray-800"
//         >
//           <FaChevronRight />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ImageSlider;













import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { img: "/Facebook.png" },
    { img: "/WhatsApp Image 2024-.png" },
    { img: "/Mask Group 1.png" },
  ];

  // Automatically change slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  // Calculate indices for main and skewed images
  const mainIndex = currentIndex;
  const skewIndex = (currentIndex + 1) % slides.length;

  return (
    <div
      className="relative max-w-full mt-10 px-4 sm:px-8 lg:p-10 overflow-hidden"
      style={{
        backgroundImage: "url('/observation-urban-bu.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Main Image */}
      <div className="relative transition-all duration-500">
        <img
          src={slides[mainIndex].img}
          alt="Main Slide"
          className="w-full sm:w-[80%] md:w-[70%] lg:w-[60%] h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] object-cover rounded-md mx-auto"
        />
        <button
          className="absolute bottom-10 left-5 md:left-32 lg:left-80 px-6 py-2 bg-transparent text-primary border border-primary font-semibold shadow-md hover:bg-gray-200"
          style={{ zIndex: 10 }}
        >
          See More
        </button>
      </div>

      {/* Skewed Side Image */}
      <div
        className="absolute top-1/2 right-[-60px] transform -translate-y-1/2 w-[20%] overflow-hidden z-10 skew-y-12 transition-all duration-500"
        style={{
          height: "calc(70vh)",
        }}
      >
        <img
          src={slides[skewIndex].img}
          alt="Skewed Slide"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Navigation Arrows */}
      <div className="absolute top-1/2 left-0 md:left-28  lg:left-64 z-10 transform -translate-y-1/2">
        <button
          onClick={handlePrev}
          className="text-white text-3xl p-2 bg-black rounded-md hover:bg-gray-800"
        >
          <FaChevronLeft />
        </button>
      </div>
      <div className="absolute top-1/2 right-0 md:right-28  lg:right-64 z-10 transform -translate-y-1/2">
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




