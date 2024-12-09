import React from "react";
import PhasesDetails from "../../components/PhasesDetails";

const PhaseIIDetailsPage = () => {
  const phaseData = {
    // Overall background image
    phaseTitle: "DHA PHASE-II",
    mainImage: "/phase2m (1).png", // Main section image
    descriptionTitle:
      "Discover the unique lifestyle and scenic beauty of DHA Phase II Community",
    descriptionText: `
           Nestled between Grand Trunk Road and Islamabad Highway lies our DHA Phase II, comprising approximately 15,075 kanals. All the sectors are fully urbanized and now home to a number of families. This phase exhibits peace, harmony, security, luxury, and convenience.
        `,
    galleryImages: [
      "/phase2m (2).png",
      "/phase2m (3).png",
      "/phase2m (4).png",
      "/phase2m (5).png", // Add more image paths as needed
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

export default PhaseIIDetailsPage;
