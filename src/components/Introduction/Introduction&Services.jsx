import React from "react";


const IntroductionService = () => {
  const imageUrls = [
    "/introOne.png",
    "/introTwo.jpeg",
    "/introThree.png",
  ];

  return (
    <div className="text-cream bg-cover" style={{ backgroundImage: 'url("/bg-img.jpg")' }}>
    <div className="">
      <h1 className="flex justify-center items-center p-4 text-3xl font-bold underline text-primary uppercase">
        Introduction
      </h1>
    </div>
  
    <div className="w-[90%] mx-auto"> {/* Parent container with increased width */}
      <div className="flex flex-col gap-5 justify-start items-start py-5 text-start">
        <div className="bg-white text-gray-500 shadow-lg p-6 rounded-md w-full"> {/* Increased padding */}
          <p className="leading-6">
            DHA Property Exchange Islamabad-Rawalpindi was established in Nov 2008
            with the core purpose to provide valued property services in a
            customer-friendly environment that helps you to Buy, Sell, and Rent
            out property in DHA Islamabad-Rawalpindi with faith and confidence.
          </p>
        </div>
      </div>
  
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-5 pb-5">
        {imageUrls.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`img-${index}`}
            className="h-48 w-80 p-2 object-cover object-top rounded-lg"
          />
        ))}
      </div>
  
      <div className="flex flex-col gap-4 justify-center items-center py-4 text-start">
        <h1 className="text-[#717272] underline uppercase text-[1.2rem] md:text-[1rem] font-bold w-full">
          Services
        </h1>
        <ul className="text-[1rem] leading-7 px-6 w-full bg-white text-gray-500 shadow-lg rounded-md list-disc list-inside">
          <li>
            Our team will facilitate valuable clients/members with a price valuation system to determine the value of their properties at any given time.
          </li>
          <li>
            The team will try to give you the best rate/offer for your property.
          </li>
          <li>
            The team will ensure end-to-end transparent dealings and facilitation.
          </li>
          <li>
            1% Service Charges will be charged on the total sale consideration.
          </li>
          <li>
            * For details/rates, please contact our team at Mob No: 0321-5355988.
          </li>
        </ul>
      </div>
    </div>
  </div>
  
  );
};

export default IntroductionService;