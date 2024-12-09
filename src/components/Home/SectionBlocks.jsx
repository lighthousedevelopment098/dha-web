import { Link } from "react-router-dom";

const SectionBlocks = ({ img, title, description, link, bgImg }) => {
  return (
    <div className="bg-white rounded-md overflow-hidden border h-full md:h-[70vh] lg:h-full  shadow-md shadow-primary">
      {/* Image Section */}
      <div className="relative w-full  m-0 p-0">
        <img src={img} alt={title} className="w-full h-full object-contain" />
      </div>

      {/* Content Section */}
      <div className="px-4 pb-4">
        <h1 className="text-primary text-center font-bold text-xl mb-2">
          {title}
        </h1>

        <div
          className="relative text-gray-600 border-b-2 pb-2 border-primary text-[.7rem] font-bold mb-2"
          style={{
            backgroundImage: `url(${bgImg})`,
            backgroundPosition: "right",
            backgroundRepeat: "no-repeat",
            backgroundSize: "150px 150px",
          }}
        >
          {description}
        </div>

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
