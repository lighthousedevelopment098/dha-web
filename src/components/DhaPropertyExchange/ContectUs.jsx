// import React from "react";

// const ContactPage = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-8">
//       <h1 className="text-3xl text-primary underline uppercase font-semibold">Contact Us</h1>
//       <div className="text-start">
//         <h2 className="">Contact Our Team</h2>
//         </div>
//       {/* Wrapper */}
//       <div className="flex flex-col md:flex-row md:items-start max-w-6xl w-full">
//         {/* Left Section: Text Boxes */}
//         <div className="w-full md:w-1/2">
//           {/* First Text Box */}
//           <div className="bg-white w-96 shadow-md rounded-lg p-10 mb-8 ml-0">
//             <h3 className="text-lg font-bold text-[#007BFF]">Name: Faizan Ahmed</h3>
//             <p className="text-gray-700 mt-2">Designation: Marketing & Sales Executive</p>
//             <p className="text-gray-700 mt-1">Ext: 1236</p>
//           </div>

//           {/* Second Text Box */}
//           <div className="bg-white shadow-md rounded-lg p-6 mb-8 ml-10">
//             <h3 className="text-lg font-bold text-[#007BFF]">Name: Shafaat Sadiq</h3>
//             <p className="text-gray-700 mt-2">Designation: Marketing & Sales Executive</p>
//             <p className="text-gray-700 mt-1">Ext: 1236</p>
//           </div>

//           {/* Third Text Box */}
//           <div className="bg-white shadow-md rounded-lg p-6 mb-8 ml-16">
//             <h3 className="text-lg font-bold text-[#007BFF]">Name: Mudassaar Naseer</h3>
//             <p className="text-gray-700 mt-2">Designation: Marketing & Sales Executive</p>
//             <p className="text-gray-700 mt-1">Ext: 1236</p>
//           </div>
//         </div>

//         {/* Right Section: Image */}
//         <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center">
//           <img
//             src="/path-to-your-image.jpg"
//             alt="Contact Illustration"
//             className="w-[300px] md:w-[400px] lg:w-[500px] object-contain"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactPage;




import React from "react";

const ContactUs = () => {
  const teamMembers = [
    {
      name: "Faizan Ahmed",
      designation: "Marketing & Sales Executive",
      ext: "1236",
    },
    {
      name: "Shafaat Sadiq",
      designation: "Marketing & Sales Executive",
      ext: "1236",
    },
    {
      name: "Mudassaar Naseer",
      designation: "Marketing & Sales Executive",
      ext: "1236",
    },
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center relative px-4"
      style={{ backgroundImage: 'url("/path-to-your-background.jpg")' }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-white/70"></div>

      {/* Page Content */}
      <div className="relative z-10 max-w-6xl mx-auto py-16">
        {/* Title */}
        <h1 className="text-center text-3xl md:text-4xl font-bold text-[#007BFF] mb-8">
          Contact Us
        </h1>

        {/* Subheading */}
        <p className="text-left text-xl text-gray-700 font-semibold mb-4">
          Contact Our Team
        </p>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 border border-gray-200"
            >
              <h3 className="text-lg font-bold text-[#007BFF]">
                Name: {member.name}
              </h3>
              <p className="text-gray-700 mt-2">
                Designation: {member.designation}
              </p>
              <p className="text-gray-700 mt-1">Ext: {member.ext}</p>
            </div>
          ))}
        </div>

        {/* Illustration */}
        <div className="mt-12 flex justify-center">
          <img
            src="/path-to-your-illustration.png"
            alt="Contact Illustration"
            className="w-[300px] md:w-[400px] lg:w-[500px]"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
