import React from "react";

const PhasesDetails = ({
  phaseTitle,
  mainImage,
  descriptionTitle,
  descriptionText,
  galleryImages,
  desTitle,
  dec2,
}) => {
  return (
    <div
      className="min-h-screen bg-cover bg-fixed bg-center text-[#707070]"
      style={{
        backgroundImage: "url('/1111.png')", // Replace with your overall background image path
      }}
    >
      {/* Background Section */}
      <div className="relative min-h-screen max-w-6xl mt-10 mx-auto bg-cover bg-center flex items-center justify-center">
        {/* Main Content */}
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">
            <span className="border-b-2 border-[#707070]">{phaseTitle}</span>
          </h1>
          <div className="relative max-w-5xl inline-block">
            <img
              src={mainImage} // Dynamic main image
              alt="Phase Details"
              className="rounded-md object-cover shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="mt-5 px-4 py-2 mx-auto max-w-5xl bg-white shadow-md shadow-gray-800 lg:px-16 text-center">
        <p className="text-sm font-bold">{descriptionTitle}</p>
        <p className="mt-4 text-[.7rem] font-bold leading-relaxed max-w-4xl mx-auto">
          {descriptionText}
        </p>
        <h1 className="text-[.7rem] py-2 font-bold">{desTitle}</h1>
        <p className="text-[.7rem] pb-1 font-bold">{dec2}</p>
      </div>

      {/* Images Section */}
      <div className="mt-5 pb-5">
        <h2 className="text-center text-2xl font-bold mb-8">
          <span className="border-b-2 border-[#707070]">Images</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 px-4 md:px-10 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <img
              key={index}
              src={image} // Dynamic gallery images
              alt={`Gallery Image ${index + 1}`}
              className="rounded-lg shadow-lg object-cover w-full h-56"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhasesDetails;
