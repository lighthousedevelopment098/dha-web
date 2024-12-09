import React from "react";
import PhasesDetails from "../../components/PhasesDetails";

const PhaseVIDetailsPage = () => {
  const phaseData = {
    // Overall background image
    phaseTitle: "DHA PHASE-VI",
    mainImage: "/phasevi.png", // Main section image
    descriptionTitle:
      "Discover the unique lifestyle and scenic beauty of DHA Phase I Community",
    descriptionText: `
            DHA Islamabad-Rawalpindi Phase VI (Ex Phase II Ext) was launched in March 2005 and is spread over an area of approximately 55,000 kanals (estimated). Following the redesign of the master plan, incorporating the Overseas Sector, DHA Valley, and DHA Expressway, the contract for the development of Phase VI (Ex Phase II Ext) has been concluded, and development work is underway.
          `,
    galleryImages: [
      "/phasevi1.png",
      "/phasevi2.png",
      "/phasevi3.png",
      "/phasevi4.png", // Add more image paths as needed
    ],
    dec2: "  Since June 25, 2009, DHA Islamabad-Rawalpindi has mobilized massive equipment and resources worth 4.5 billion rupees to complete the development of Phase VI (Ex Phase II Ext). Onsite project offices have been established to supervise and ensure fast-track development. According to the new design, Phase VI (Ex Phase II Ext) has been divided into four sectors (A,",
  };
  return (
    <div>
      <PhasesDetails
        phaseTitle={phaseData.phaseTitle}
        mainImage={phaseData.mainImage}
        descriptionTitle={phaseData.descriptionTitle}
        descriptionText={phaseData.descriptionText}
        galleryImages={phaseData.galleryImages}
        dec2={phaseData.dec2}
      />
    </div>
  );
};

export default PhaseVIDetailsPage;
