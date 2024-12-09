import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import PhaseCard from "../Card/PhaseCard";
import HeroSectionWithHeading from "../Share/HeroScetionWithHeading";
const onGoings = [
  {
    title: "Margalla Orchard",
    videoUrl:
      "/DHA Phase 2 Islamabad Central Park  4K  Drone Cinematics720p.mp4",
    // link: "/phase-i-gismap",
    imageUrl: "/margalla.jpg",
    description:
      "The FGEHA, in partnership with DHA and SCBA, has launched the 'Margalla Orchards' housing project on Park Road, Islamabad.",
  },
  {
    title: "Kuri Model Scheme",
    videoUrl: "/dha1.mp4",
    // link: "/phase-i-gismap",
    imageUrl: "/images.jpeg",
    description:
      "The DHA and CDA have partnered to develop a 10,000-kanal housing scheme in Islamabad’s Zone IV, with plots shared under a land-sharing formula.",
  },
];

const OnGoing = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      easing: "ease-in-out", // Smooth easing for animations
      once: false, // Whether animation should happen only once
    });
  }, []);
  return (
    <>
      <HeroSectionWithHeading
        heading="Some of Our OnGoing Projects:"
        backgroundVideo="/DHA Phase 2 Islamabad Central Park  4K  Drone Cinematics720p.mp4"
      />
      <div className="bg-brand text-white px-5 py-4">
        {/* <SectionTitle title="" /> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {onGoings.map((OnGoing, index) => (
            <div
              key={index}
              className="transform transition-transform hover:scale-102 hover:shadow-xl hover:bg-opacity-90 duration-300 ease-in-out   rounded-lg"
              data-aos="zoom-in"
            >
              <PhaseCard
                imageUrl={OnGoing.imageUrl}
                title={OnGoing.title}
                description={OnGoing.description}
                link={OnGoing.link}
                videoUrl={OnGoing.videoUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OnGoing;
