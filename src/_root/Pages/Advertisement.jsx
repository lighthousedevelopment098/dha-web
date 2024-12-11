import React from "react";
import HeroSectionWithHeading from "../../components/Share/HeroScetionWithHeading";
import { advertisementData } from "../../Utils/data";
import AdvertisementCard from "../../components/Advertisement/AdvertisementCard";

const Advertisement = () => {
  return (
    <div
      className=""
      style={{
        backgroundImage: "url('/bgimg.jpg')", // Replace with your overall background image path
      }}
    >
      {" "}
      <h1 className=" text-center text-primary text-lg mb-5 py-5 md:text-3xl font-bold">
        <span className="border-b-2 uppercase border-primary">Brochures</span>
      </h1>
      {/* <HeroSectionWithHeading
        backgroundImage="/Zameen-Ace-Mall-dha-2-islamabad.jpeg"
        heading="Brochures"
      /> */}
      <div className="w-full max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-4 p-4">
          {advertisementData.map((ad, index) => (
            <AdvertisementCard
              key={index}
              imageUrl={ad.imageUrl}
              title={ad.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
