
// import React, { useState, useEffect } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// const ImageSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const slides = [
//     { img: "/Facebook.png" },
//     { img: "/WhatsApp Image 2024-.png" },
//     { img: "/Mask Group 1.png" },
//   ];

//   // Automatically change slide every 2 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       handleNext();
//     }, 2000);
//     return () => clearInterval(interval);
//   }, []);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? slides.length - 1 : prevIndex - 1
//     );
//   };

//   // Calculate indices for main and skewed images
//   const mainIndex = currentIndex;
//   const skewIndex = (currentIndex + 1) % slides.length;

//   return (
//     <div
//       className="relative max-w-full mt-10 px-4 sm:px-8 lg:p-10 overflow-hidden"
//       style={{
//         backgroundImage: "url('/observation-urban-bu.png')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       {/* Main Image */}
//       <div className="relative transition-all duration-500">
//         <img
//           src={slides[mainIndex].img}
//           alt="Main Slide"
//           className="w-full sm:w-[80%] md:w-[70%] lg:w-[60%] h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] object-cover rounded-md mx-auto"
//         />
//         <button
//           className="absolute bottom-10 left-5 md:left-32 lg:left-80 px-6 py-2 bg-transparent text-primary border border-primary font-semibold shadow-md hover:bg-gray-200"
//           style={{ zIndex: 10 }}
//         >
//           See More
//         </button>
//       </div>

//       {/* Skewed Side Image */}
//       <div
//         className="absolute top-1/2 right-[-60px] transform -translate-y-1/2 w-[20%] overflow-hidden z-10 skew-y-12 transition-all duration-500"
//         style={{
//           height: "calc(70vh)",
//         }}
//       >
//         <img
//           src={slides[skewIndex].img}
//           alt="Skewed Slide"
//           className="object-cover w-full h-full"
//         />
//       </div>

//       {/* Navigation Arrows */}
//       <div className="absolute top-1/2 left-0 md:left-28  lg:left-64 z-10 transform -translate-y-1/2">
//         <button
//           onClick={handlePrev}
//           className="text-white text-3xl p-2 bg-black rounded-md hover:bg-gray-800"
//         >
//           <FaChevronLeft />
//         </button>
//       </div>
//       <div className="absolute top-1/2 right-0 md:right-28  lg:right-64 z-10 transform -translate-y-1/2">
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

  // Automatically change slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
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

  return (
    <div className="relative w-full h-[70vh] flex justify-center items-center bg-gray-100 overflow-hidden p-6"
    style={{
              backgroundImage: "url('/uper gradiant copy.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}

    >
      {/* Skewed Previous Image */}
      <div
        className="absolute top-0 left-[-100px] md:left-[-60px]  lg:left-[-60px] w-0  md:w-48 lg:w-[20%] h-full overflow-hidden  z-10 p-10 translate-x-4 -skew-y-12 transition-all duration-500 cursor-pointer"
        onClick={handlePrev}
      >
        <img
          src={slides[(currentIndex - 1 + slides.length) % slides.length].img}
          alt="Previous Slide"
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      {/* Main Image */}
      <div className="w-full md:w-[60%] h-full relative z-10">
        <img
          src={slides[currentIndex].img}
          alt="Main Slide"
          className="w-full h-full object-cover rounded-md shadow-lg"
        />
        <button className="absolute bottom-5 left-[60px] md:left-[80px] transform -translate-x-1/2 px-2 py-1 md:px-4 md:py-2 lg:px-6 lg:py-3 bg-transparent border border-primary text-primary font-semibold rounded shadow-md hover:bg-red-700">
          See More
        </button>
      </div>

      {/* Skewed Next Image */}
      <div
        className="absolute top-0 right-0 md:right-[-60px] w-0 md:w-48  lg:w-[20%] h-full overflow-hidden z-10 p-10 translate-x-4   skew-y-12 transition-all duration-500 cursor-pointer"
        onClick={handleNext}
      >
        <img
          src={slides[(currentIndex + 1) % slides.length].img}
          alt="Next Slide"
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute  left-2  md:left-36  lg:left-64 top-1/2 transform -translate-y-1/2 bg-black text-white p-3 rounded-large hover:bg-gray-700 z-20"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={handleNext}
        className="absolute  right-2 md:right-36  lg:right-64 top-1/2 transform -translate-y-1/2 bg-black text-white p-3 rounded-large hover:bg-gray-700 z-20"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default ImageSlider;



