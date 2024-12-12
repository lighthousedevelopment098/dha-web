// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { IoMenu } from "react-icons/io5";
// import { dropdownData, menuData } from "../../Utils/data";

// const Navbar = () => {
//   const [menuHoverVisible, setMenuHoverVisible] = useState(false);
//   const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 700);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <nav
//       className={`flex p-4 px-8 lg:px-16 w-full  justify-between text-primary shadow-md items-center transition-all font-bold duration-500 ${
//         isScrolled ? "bg-[#F9F9F9]" : "bg-[#F9F9F9]"
//       }`}
//       style={{ fontFamily: "system-ui" }}
//     >
//       {/* Menu Icon and Home Link */}
//       <div
//         className="flex items-center gap-2 relative"
//         onMouseEnter={() => setMenuHoverVisible(true)}
//         onMouseLeave={() => setMenuHoverVisible(false)}
//       >
//         <IoMenu className="text-2xl text-black" />
//         <Link to="/" className="text-primary">
//           Home
//         </Link>
//         {menuHoverVisible && (
//           <ul
//             className="absolute grid grid-cols-1 md:grid-cols-2 top-full left-0 bg-[#D8EFD3] shadow-lg z-50  w-[18rem] md:w-[30rem]"
//             // style={{ minWidth: "18rem" }}
//           >
//             {dropdownData.map((item, index) => (
//               <li key={index} className="p-2 border-r border-gray-200">
//                 <Link to={item.link} className="font-bold underline block">
//                   {item.main}
//                 </Link>
//                 <div className="flex flex-col mt-2">
//                   {item.sub.map((sub, subIndex) => (
//                     <Link
//                       key={subIndex}
//                       to={sub.link}
//                       className="text-sm text-primary hover:bg-gray-200 "
//                     >
//                       {sub.label}
//                     </Link>
//                   ))}
//                 </div>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>

//       {/* Desktop Menu */}
//     {/* Desktop Menu with Subheadings */}
// <ul className="hidden lg:flex space-x-4 justify-center flex-grow">
//   {menuData.slice(1).map((item, index) => (
//     <li key={index} className="group relative hover:text-primary ">
//       <Link to={item.link}>{item.label}</Link>
//       {item.sub && (
//         <ul className="absolute w-40 text-nowrap hidden group-hover:block top-full left-0 bg-[#D8EFD3] shadow-lg z-50 p-4">
//           {item.sub.map((subItem, subIndex) => (
//             <li key={subIndex} className="py-1 hover:bg-gray-200">
//               <Link to={subItem.link} className="text-sm">
//                 {subItem.subLabel}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       )}
//     </li>
//   ))}
// </ul>

//       {/* Hamburger Menu */}
//       <div
//         className="lg:hidden text-primary text-2xl"
//         onClick={() => setMobileMenuVisible(!mobileMenuVisible)}
//       >
//         {mobileMenuVisible ? <FaTimes /> : <FaBars />}
//       </div>

//       {/* Mobile Menu */}
//       {/* Mobile Menu with Subheadings */}
// {mobileMenuVisible && (
//   <ul className="lg:hidden flex flex-col space-y-4 text-white absolute top-14 left-0 w-full bg-primary p-4">
//     {menuData.map((item, index) => (
//       <li key={index}>
//         <Link to={item.link} className="block text-white">
//           {item.label}
//         </Link>
//         {item.sub && (
//           <ul className="mt-2 pl-4 text-nowrap">
//             {item.sub.map((subItem, subIndex) => (
//               <li key={subIndex} className="py-1 text-sm">
//                 <Link to={subItem.link} className="text-gray-200">
//                   {subItem.subLabel}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         )}
//       </li>
//     ))}
//   </ul>
// )}

//     </nav>
//   );
// };

// export default Navbar;

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { dropdownData, menuData } from "../../Utils/data";

const Navbar = () => {
  const [menuHoverVisible, setMenuHoverVisible] = useState(false);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 700);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenuHoverVisible = () => {
    setMenuHoverVisible(!menuHoverVisible); // Toggle hover menu visibility
  };

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible); // Toggle mobile menu visibility
  };

  return (
    <nav
      className={`flex p-4 px-8 lg:px-16 w-full justify-between text-primary shadow-md items-center transition-all font-bold duration-500 ${
        isScrolled ? "bg-[#F9F9F9]" : "bg-[#F9F9F9]"
      }`}
      style={{ fontFamily: "system-ui" }}
    >
      {/* Left Section: Menu Icon and Home */}
      <div className="flex items-center gap-4">
        {/* Menu Icon */}
        <div
          className="relative"
          onMouseEnter={() => setMenuHoverVisible(true)} // Open on hover
          onMouseLeave={() => setMenuHoverVisible(false)} // Close on hover leave
        >
          <IoMenu
            className="text-2xl text-black cursor-pointer"
            onClick={toggleMenuHoverVisible} // Toggle on click
          />
          {menuHoverVisible && (
            <ul className="absolute grid grid-cols-1 md:grid-cols-2 top-full left-0 bg-[#D8EFD3] shadow-lg z-50 w-[18rem] md:w-[35vw]">
              {dropdownData.map((item, index) => (
                <li key={index} className="p-2 border-r border-gray-200">
                  <Link to={item.link} className="font-bold  underline ">
                    {item.main}
                  </Link>
                  <div className="flex flex-col mt-2">
                    {item.sub.map((sub, subIndex) => (
                      <Link
                        key={subIndex}
                        to={sub.link}
                        className="text-sm w-full px-3 py-1 hover:bg-[#55AE9C] hover:text-white rounded-sm "
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Home Link */}
        <Link to="/" className="text-primary">
          Home
        </Link>
      </div>

      {/* Desktop Menu with Subheadings */}
      <ul className="hidden  lg:flex space-x-4 justify-center flex-grow">
        {menuData.slice(1).map((item, index) => (
          <li key={index} className="group relative hover:text-primary">
            <Link to={item.link}>{item.label}</Link>
            {item.sub && (
              <ul className="absolute  text-nowrap hidden group-hover:block top-full left-0 bg-[#D8EFD3] shadow-lg z-50 p-4">
                {item.sub.map((subItem, subIndex) => (
                  <li key={subIndex} className="">
                    <Link
                      to={subItem.link}
                      className="text-sm px-4 py-1 hover:bg-[#55AE9C] hover:text-white rounded-sm"
                    >
                      {subItem.subLabel}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      {/* Hamburger Menu */}
      <div
        className="lg:hidden text-primary text-2xl"
        onClick={toggleMobileMenu}
      >
        {mobileMenuVisible ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu with Subheadings */}
      {mobileMenuVisible && (
        <ul className="lg:hidden flex flex-col space-y-4 text-primary absolute top-14 left-0 w-full bg-[#D8EFD3] p-4">
          {menuData.map((item, index) => (
            <li key={index}>
              <Link to={item.link} className="block ">
                {item.label}
              </Link>
              {item.sub && (
                <ul className="mt-2 pl-4 text-nowrap">
                  {item.sub.map((subItem, subIndex) => (
                    <li key={subIndex} className="py-1 text-sm">
                      <Link
                        to={subItem.link}
                        className="text-sm px-4 py-1 hover:bg-[#55AE9C] hover:text-white rounded-sm"
                      >
                        {subItem.subLabel}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
