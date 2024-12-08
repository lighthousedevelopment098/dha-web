// import { useState, useEffect } from "react";
// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
// import { FaBars, FaTimes } from "react-icons/fa"; // For the hamburger and close icons
// import logo from "../../assets/Images/dhalogo.gif";
// import { IoMenu } from "react-icons/io5";

// const Navbar = () => {
//   const [dropdownVisible, setDropdownVisible] = useState(null);
//   const [subDropdownVisible, setSubDropdownVisible] = useState(null);
//   const [subsubDropdownVisible, setSubsubDropdownVisible] = useState(null);
//   const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   const handleMouseEnter = (index) => {
//     setDropdownVisible(index);
//   };

//   const handleMouseLeave = () => {
//     setDropdownVisible(null);
//     setSubDropdownVisible(null);
//     setSubsubDropdownVisible(null);
//   };

//   const handleSubMouseEnter = (index) => {
//     setSubDropdownVisible(index);
//   };

//   const handleSubMouseLeave = () => {
//     setSubDropdownVisible(null);
//     setSubsubDropdownVisible(null);
//   };

//   const handleSubsubMouseEnter = (index) => {
//     setSubsubDropdownVisible(index);
//   };

//   const handleSubsubMouseLeave = () => {
//     setSubsubDropdownVisible(null);
//   };

//   const toggleMobileMenu = () => {
//     setMobileMenuVisible(!mobileMenuVisible);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 700) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);


//   const menuData = [
//     { label: "Home", link: "/" },
//     { label: "About", link: "/about" },
//     { label: "Services", link: "/services" },
//     { label: "Portfolio", link: "/portfolio" },
//     { label: "Contact", link: "/contact" },
//   ];
//   return (
//     <nav
//       className={` flex p-2 px-8 lg:px-16 w-full justify-between text-primary shadow-md items-center transition-all font-bold duration-500 ${
//         isScrolled ? "bg-[#F9F9F9] " : "bg-[#F9F9F9]"
//       }`}
//       style={{ fontFamily: "system-ui" }}
//     >
//       <div className="flex items-center justify-center gap-2">
//         <IoMenu className="text-2xl" />

//         {/* <h3>Home</h3> */}
//       </div>
//       {/* Logo */}
//       {/* <div>
//         <img
//           src={logo}
//           alt="logo"
//           className="h-10 lg:h-12 text-center rounded-full transition-transform duration-500 transform ${isScrolled ? 'scale-90' : 'scale-100'}"
//         />
//       </div> */}

//       {/* Hamburger Menu for Mobile */}
//       <div
//         className="lg:hidden text-primarylight text-2xl"
//         onClick={toggleMobileMenu}
//       >
//         {mobileMenuVisible ? <FaTimes /> : <FaBars />}
//       </div>

//       {/* Menu Items - Hidden on Mobile */}

//       <ul
//         className={`lg:flex lg:flex-wrap w-[65%] space-x-4   items-center jusitfy-center hidden `}
//       >
//         {menuData.map((item, index) => (
//           <li
//             key={index}
//             className="relative group p-2"
//             onMouseEnter={() => handleMouseEnter(index)}
//             onMouseLeave={handleMouseLeave}
//           >
//             <Link to={item.link || "#"} className="hover:text-primarylight">
//               {item.label}
//             </Link>
//             {dropdownVisible === index && (item.subItems || item.DropDown) && (
//               <ul className="absolute left-0 p-2 w-52 bg-[#F9F9F9] border border-white z-50 text-primary transition duration-300 delay-200">
//                 {item.subItems &&
//                   item.subItems.map((subItem, subIndex) => (
//                     <li
//                       key={subIndex}
//                       className="relative group"
//                       onMouseEnter={() => handleSubMouseEnter(subIndex)}
//                       onMouseLeave={handleSubMouseLeave}
//                     >
//                       <Link
//                         to={subItem.link || "#"}
//                         className="block px-2 py-2 hover:bg-gray-200 hover:text-primary "
//                       >
//                         {subItem.label}
//                       </Link>
//                       {subIndex !== item.subItems.length - 1 && (
//                         <div className="border-b mr-4"></div>
//                       )}
//                       {subDropdownVisible === subIndex && subItem.DropDown && (
//                         <ul className="absolute left-[95%] w-52 top-0 p-2 bg-[#F9F9F9] z-50  border border-white transition duration-300 delay-200">
//                           {subItem.DropDown.map((dropDownItem, dropIndex) => (
//                             <li
//                               key={dropIndex}
//                               className="relative group"
//                               onMouseEnter={() =>
//                                 handleSubsubMouseEnter(dropIndex)
//                               }
//                               onMouseLeave={handleSubsubMouseLeave}
//                             >
//                               <Link
//                                 to={dropDownItem.link || "#"}
//                                 className="block px-2 py-2 hover:bg-[#F9F9F9] hover:text-primary"
//                               >
//                                 {dropDownItem.label}
//                               </Link>
//                               {dropIndex !== subItem.DropDown.length - 1 && (
//                                 <div className="border-b mr-4"></div>
//                               )}
//                               {subsubDropdownVisible === dropIndex &&
//                                 dropDownItem.subDropDown && (
//                                   <ul className="absolute left-[95%] w-52 top-0 p-2 bg-[#F9F9F9] z-50  text-primary border border-white transition duration-300 delay-200">
//                                     {dropDownItem.subDropDown.map(
//                                       (subDropDownItem, subDropDownIndex) => (
//                                         <li
//                                           key={subDropDownIndex}
//                                           className="relative group"
//                                         >
//                                           <Link
//                                             to={subDropDownItem.link || "#"}
//                                             className="block px-2 py-2 hover:bg-gray-200 hover:text-primary "
//                                           >
//                                             {subDropDownItem.label}
//                                           </Link>
//                                           {subDropDownIndex !==
//                                             dropDownItem.subDropDown.length -
//                                               1 && (
//                                             <div className="border-b mr-4"></div>
//                                           )}
//                                         </li>
//                                       )
//                                     )}
//                                   </ul>
//                                 )}
//                             </li>
//                           ))}
//                         </ul>
//                       )}
//                     </li>
//                   ))}
//               </ul>
//             )}
//           </li>
//         ))}
//       </ul>

//       {/* Mobile Menu */}
//       {mobileMenuVisible && (
//         <ul className="lg:hidden flex flex-col space-y-4 text-white absolute top-14 left-0 w-full bg-primary p-4">
//           {menuData.map((item, index) => (
//             <li key={index} className="relative">
//               <div
//                 className="text-white uppercase cursor-pointer"
//                 onClick={() =>
//                   dropdownVisible === index
//                     ? setDropdownVisible(null)
//                     : setDropdownVisible(index)
//                 }
//               >
//                 <Link to={item.link || "#"}>{item.label}</Link>
//               </div>
//               {dropdownVisible === index &&
//                 (item.subItems || item.DropDown) && (
//                   <ul className="mt-2 bg-primary text-white border-t border-white">
//                     {item.subItems &&
//                       item.subItems.map((subItem, subIndex) => (
//                         <li key={subIndex} className="pl-4 py-2">
//                           <div
//                             className="cursor-pointer"
//                             onClick={() =>
//                               subDropdownVisible === subIndex
//                                 ? setSubDropdownVisible(null)
//                                 : setSubDropdownVisible(subIndex)
//                             }
//                           >
//                             <Link
//                               to={subItem.link || "#"}
//                               className="block px-2 py-2 hover:bg-gray-200 hover:text-primary"
//                             >
//                               {subItem.label}
//                             </Link>
//                           </div>
//                           {subDropdownVisible === subIndex &&
//                             subItem.DropDown && (
//                               <ul className="pl-4 mt-2 bg-primary">
//                                 {subItem.DropDown.map(
//                                   (dropDownItem, dropIndex) => (
//                                     <li key={dropIndex} className="py-1">
//                                       <div
//                                         className="cursor-pointer"
//                                         onClick={() =>
//                                           subsubDropdownVisible === dropIndex
//                                             ? setSubsubDropdownVisible(null)
//                                             : setSubsubDropdownVisible(
//                                                 dropIndex
//                                               )
//                                         }
//                                       >
//                                         <Link
//                                           to={dropDownItem.link || "#"}
//                                           className="block px-2 py-2 hover:bg-gray-200 hover:text-primary"
//                                         >
//                                           {dropDownItem.label}
//                                         </Link>
//                                       </div>
//                                       {subsubDropdownVisible === dropIndex &&
//                                         dropDownItem.subDropDown && (
//                                           <ul className="pl-4 mt-2 bg-primary">
//                                             {dropDownItem.subDropDown.map(
//                                               (
//                                                 subDropDownItem,
//                                                 subDropDownIndex
//                                               ) => (
//                                                 <li
//                                                   key={subDropDownIndex}
//                                                   className="py-1"
//                                                 >
//                                                   <Link
//                                                     to={
//                                                       subDropDownItem.link ||
//                                                       "#"
//                                                     }
//                                                     className="block px-2 py-2 hover:bg-gray-200 hover:text-primary"
//                                                   >
//                                                     {subDropDownItem.label}
//                                                   </Link>
//                                                 </li>
//                                               )
//                                             )}
//                                           </ul>
//                                         )}
//                                     </li>
//                                   )
//                                 )}
//                               </ul>
//                             )}
//                         </li>
//                       ))}
//                   </ul>
//                 )}
//             </li>
//           ))}
//         </ul>
//       )}
//     </nav>
//   );
// };

// Navbar.propTypes = {
//   menuData: PropTypes.arrayOf(
//     PropTypes.shape({
//       label: PropTypes.string.isRequired,
//       link: PropTypes.string,
//       subItems: PropTypes.arrayOf(
//         PropTypes.shape({
//           label: PropTypes.string.isRequired,
//           link: PropTypes.string,
//           DropDown: PropTypes.arrayOf(
//             PropTypes.shape({
//               label: PropTypes.string.isRequired,
//               link: PropTypes.string,
//               subDropDown: PropTypes.arrayOf(
//                 PropTypes.shape({
//                   label: PropTypes.string.isRequired,
//                   link: PropTypes.string,
//                 })
//               ),
//             })
//           ),
//         })
//       ),
//       DropDown: PropTypes.arrayOf(
//         PropTypes.shape({
//           label: PropTypes.string.isRequired,
//           link: PropTypes.string,
//           subDropDown: PropTypes.arrayOf(
//             PropTypes.shape({
//               label: PropTypes.string.isRequired,
//               link: PropTypes.string,
//             })
//           ),
//         })
//       ),
//     })
//   ).isRequired,
// };

// export default Navbar;




import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

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

  const menuData = [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    { label: "Services", link: "/services" },
    { label: "Portfolio", link: "/portfolio" },
    { label: "Contact", link: "/contact" },
  ];

  const dropdownData = [
    {
      main: "Property Exchange",
      link: "/property-exchange",
      sub: [
        { label: "Introduction & Services", link: "/Introduction&Services" },
        { label: "Price Valuation & Benchmarking", link: "/price-valuation" },
        { label: "Sales Of Property", link: "/sale-of-property" },
        { label: "Purchase Of Property", link: "/purchase-property" },
        { label: "Registration", link: "/registration" },
        { label: "Contact Us", link: "/contact-us" },
      ],
    },
    {
      main: "Affiliates",
      link: "/affiliates",
      sub: [
        { label: "Property Dealers", link: "/property-dealers" },
        { label: "Architects", link: "/architects" },
        { label: "Soil Test Firms", link: "/soil-test-firms" },
        { label: "Vetting Engineers", link: "/vetting-engineers" },
        { label: "PTCL", link: "/ptcl" },
        { label: "Structural Engineers", link: "/structural-engineers" },
        { label: "Solar Firms", link: "/solar-firms" },
        { label: "MEP Engineers", link: "/mep-engineers" },
      ],
    },
    {
      main: "Official Notice",
      link: "/official-notice",
      sub: [
        { label: "DHA ByLaws", link: "/dha-bylaws" },
        { label: "Transfer Procedure", link: "/transfer-procedure" },
        { label: "DHA Valley", link: "/dha-valley" },
        { label: "DHA Property Rentals", link: "/dha-property-rentals" },
        { label: "Downloads", link: "/downloads" },
      ],
    },
  ];

  return (
    <nav
      className={`flex p-4 px-8 lg:px-16 w-full justify-between text-primary shadow-md items-center transition-all font-bold duration-500 ${
        isScrolled ? "bg-[#F9F9F9]" : "bg-[#F9F9F9]"
      }`}
      style={{ fontFamily: "system-ui" }}
    >
      {/* Menu Icon and Home Link */}
      <div
        className="flex items-center gap-2 relative"
        onMouseEnter={() => setMenuHoverVisible(true)}
        onMouseLeave={() => setMenuHoverVisible(false)}
      >
        <IoMenu className="text-2xl text-black" />
        <Link to="/" className="text-primary">
          Home
        </Link>
        {menuHoverVisible && (
          <ul
            className="absolute grid grid-cols-1 md:grid-cols-2 top-full left-0 bg-[#D8EFD3] shadow-lg z-50  w-[18rem] md:w-[30rem]"
            // style={{ minWidth: "18rem" }}
          >
            {dropdownData.map((item, index) => (
              <li key={index} className="p-2 border-r border-gray-200">
                <Link to={item.link} className="font-bold underline block">
                  {item.main}
                </Link>
                <div className="flex flex-col mt-2">
                  {item.sub.map((sub, subIndex) => (
                    <Link
                      key={subIndex}
                      to={sub.link}
                      className="text-sm text-primary hover:bg-gray-200 "
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

      {/* Desktop Menu */}
      <ul className="hidden lg:flex space-x-4 justify-center flex-grow">
        {menuData.slice(1).map((item, index) => (
          <li key={index} className="hover:text-primarylight">
            <Link to={item.link}>{item.label}</Link>
          </li>
        ))}
      </ul>

      {/* Hamburger Menu */}
      <div
        className="lg:hidden text-primarylight text-2xl"
        onClick={() => setMobileMenuVisible(!mobileMenuVisible)}
      >
        {mobileMenuVisible ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
      {mobileMenuVisible && (
        <ul className="lg:hidden flex flex-col space-y-4 text-white absolute top-14 left-0 w-full bg-primary p-4">
          {menuData.map((item, index) => (
            <li key={index}>
              <Link to={item.link} className="block text-white">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;


