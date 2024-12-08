import React from "react";
import { Link } from "react-router-dom";

const SectionBlocks = ({ img, title, description, link, bgImg }) => {
  return (
    <div className="bg-white  rounded-md overflow-hidden border group shadow-md shadow-primary">
      {/* Image Section */}
      <div className="relative">
        <img src={img} alt={title} className="w-full h-80 object-fill" />
      </div>

      {/* Content Section */}
      <div
        className="p-4"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "all 0.3s ease",
        }}
      >
        {/* Title */}
        <h1 className="text-primary text-center font-bold text-xl mb-2 ">
          {title}
        </h1>

        {/* Description */}
        <p className="text-gray-800 border-b-2 pb-2 border-primary text-sm font-semibold mb-2">
          {description}
        </p>

        {/* Link */}
        <Link
          to={link}
          className="text-primary font-semibold hover:text-primarylight hover:scale-105 transition-transform duration-300"
        >
          See more
        </Link>
      </div>
    </div>
  );
};

export default SectionBlocks;
