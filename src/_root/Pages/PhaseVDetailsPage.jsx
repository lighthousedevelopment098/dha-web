import React from "react";
import PhasesDetails from "../../components/PhasesDetails";

const PhaseVDetailsPage = () => {
  const phaseData = {
    // Overall background image
    phaseTitle: "DHA PHASE-V",
    mainImage: "/phasev.png", // Main section image
    descriptionTitle:
      "Discover the unique lifestyle and scenic beauty of DHA Phase V Community",
    descriptionText: `
           Formerly launched as Commoner's Town in 2006, over an area of approx 7000 kanals, it has been renamed as DHA Phase V with Sector A, B, C, D, E, F, G & H. Phase-V is located along the Main Islamabad Highway, having dual access through DHA Expressway and L.A.K Boulevard. It exists in an area with tremendous landscape and natural beauty.
          `,
    galleryImages: [
      "/phasev1.png",
      "/phasev2.png",
      "/phasev3.png",
      "/phasev4.png", // Add more image paths as needed
    ],
    dec2: "  Expansion of FTTH network caring PTCL and Transworld services is currently in progress. Cellular operators are engaged to enhance services in the area.",
    desTitle: " Location ",
  };
  return (
    <div>
      <PhasesDetails
        phaseTitle={phaseData.phaseTitle}
        mainImage={phaseData.mainImage}
        descriptionTitle={phaseData.descriptionTitle}
        descriptionText={phaseData.descriptionText}
        galleryImages={phaseData.galleryImages}
        desTitle={phaseData.desTitle}
        dec2={phaseData.dec2}
      />
    </div>
  );
};

export default PhaseVDetailsPage;
