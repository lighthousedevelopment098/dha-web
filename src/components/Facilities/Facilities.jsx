import React, { useEffect } from "react";
import FacilitiesCard from "./FacilitiesCard";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroSectionWithHeading from "../Share/HeroScetionWithHeading";

const facilitiesData = [
  {
    title: "Mobile Transfer Van",
    description:
      "Data Required.",
    imageUrl:
      "/facilityOne.jpg",
  },
  {
    title: "Complaint Management Service",
    description:
      "Automated Complaint Management System In pursuance to enhance quality of service for valued residents, DHAI-R launches automated and interactive Complaint Management System.",
    imageUrl:
      "/facilityTwo.jpg",
  },
  {
    title: "Online Payment",
    description:
      "Islamabad-Rawalpindi is pleased to introduce online payment system! To make your payment to DHAI-R online, sign up on the DHAI-R Online",
    imageUrl:
      "/facilityThree.jpg",
  },
  {
    title: "Emergency Relief Services",
    description:
      "Data Required",
    imageUrl:
      "/facilityFour.jpg",
  },
  {
    title: "Resident App",
    description:
      "Data Required",
    imageUrl:
      "/facilityFive.jpg",
  },
  
];

const Facilities = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <div
    className="text-white bg-brand pb-5 bg-cover"
    style={{ backgroundImage: 'url("/bg-img.jpg")' }}
  >
       <HeroSectionWithHeading
        backgroundImage="https://cdn.pk.emaar.com/wp-content/uploads/2023/09/Dusk-Close-1620x832.jpg"
        heading="Facilities"
      />
  
    {/* Facilities Cards Grid */}
    <div
      className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full lg:w-[60%] p-4 mx-auto"
      data-aos="zoom-in"
    >
      {facilitiesData.map((facility, index) => (
        <FacilitiesCard
          key={index}
          title={facility.title}
          description={facility.description}
          imageUrl={facility.imageUrl}
        />
      ))}
    </div>
  </div>
  
  );
};

export default Facilities;
