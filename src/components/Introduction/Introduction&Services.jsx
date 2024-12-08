import React from "react";


const IntroductionService = () => {
  const imageUrls = [
    "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRCZ2Tk9g0GxuRuWXrS5XgJA_Syn1Md3QVAuO3cxKoKy35BS0Jq",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwJFqLs65B4JvjlGzm6sLq7G67w9n9H4unPVsaVnYEsM66NkxF",
    "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQCgeZ06OPisfPzQ-NFy2al85K4vbKv8GP6jP7-E_mv_Eshzbno",
  ];

  return (
    <div className=" text-cream bg-cover " style={{ backgroundImage: 'url("/property-bg.png")'}}>
        <div className="">
     <h1 className="flex justify-center items-center p-4 text-3xl font-bold underline text-primary uppercase">Introduction</h1></div>
      <div className="w-[80%] mx-auto">
      <div className="flex flex-col gap-5 justify-start items-start py-5 text-start">
  <div className="bg-white text-gray-500 shadow-lg p-4 rounded-md w-full ">
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
              className="h-56 w-full object-cover object-top"
            />
          ))}
        </div>

        <div className="flex flex-col gap-4 justify-center items-center py-4 text-start ">
          <h1 className="text-cream w-[80vw] text-[1rem] md:text-[1rem] font-bold ml-12">
            Services
          </h1>
          <ul className="text-[1rem] leading-7 px-4  text-start list-disc list-inside shadow-lg bg-white text-gray-500">
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