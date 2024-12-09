import React from "react";
import PhasesDetails from "../../components/PhasesDetails";

const PhaseIDetailsPage = () => {
  const phaseData = {
    backgroundImage: "/1111.png", // Overall background image
    phaseTitle: "DHA PHASE-I",
    mainImage: "/Screenshot 2024-11-2.png", // Main section image
    descriptionTitle:
      "Discover the unique lifestyle and scenic beauty of DHA Phase I Community",
    descriptionText: `
          DHA Phase I Community has been meticulously planned and designed to meet the highest standards,
          offering residents an exceptional way of life and quality living in a semi-mountainous area with
          breathtaking views. Residents enjoy a contemporary lifestyle that is exclusive to DHA.
        `,
    galleryImages: [
      "/unknown1 (2).png",
      "/unknown1 (1).png",
      "/unknown (1).png",
      "/phases4.png", // Add more image paths as needed
    ],
  };
  return (
    <div>
      <PhasesDetails
        phaseTitle={phaseData.phaseTitle}
        mainImage={phaseData.mainImage}
        descriptionTitle={phaseData.descriptionTitle}
        descriptionText={phaseData.descriptionText}
        galleryImages={phaseData.galleryImages}
      />
    </div>
  );
};

export default PhaseIDetailsPage;
