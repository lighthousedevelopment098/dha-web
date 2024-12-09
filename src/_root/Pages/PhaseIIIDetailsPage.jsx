import React from "react";
import PhasesDetails from "../../components/PhasesDetails";

const PhaseIIIDetailsPage = () => {
  const phaseData = {
    // Overall background image
    phaseTitle: "DHA PHASE-III",
    mainImage: "/phaseiii.png", // Main section image
    descriptionTitle:
      "Discover the unique lifestyle and scenic beauty of DHA Phase III Community",
    descriptionText: `
            Located at the heart of enchanting Potohar Region, DHA Phase III promises elegant town planning with modernized residential and commercial areas set in a serene & secure environment. Development of this Phase has commenced since Dec 2016 with full swing and so far approx 3500 Kanal has been developed. Stretch your imagination to fill in your address at DHA Phase III. Its grand landscapes are a full delight and its proximity to major schools, hospitals, banks, shopping mall, restaurants and cineplexes maximizes your living joy... Come live life at its bountiful best!.
          `,

    galleryImages: [
      "/phase41.png",
      "/phase42.png",
      "/phase43.png",
      "/phase44.png", // Add more image paths as needed
    ],
    dec2: " Cellular services of both Jazz & Ufone made available along with Zong. Where, Transworld services over FTTH network are already in place.",
    desTitle: " Telecom Services",
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

export default PhaseIIIDetailsPage;
