// Import the ChevronDown icon
import Header from "./Header";
import { useState } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/about-us", label: "About" ,
    dropdown:[
      {
        path:'/about-us', label:"About"
      },
      { path: "/about-us/authority-aphorism", label: "Authority Aphorism" },

    ]
  },
  { path: "/academic", label: "Academic" },
  {
    path: "/courses",
    label: "Courses",
    dropdown: [
      { path: "/courses", label: " All Course" },
      { path: "/courses/bsc", label: "BSC Courses" },
      { path: "/courses/diploma", label: "Diploma Courses" },
      { path: "/courses/short", label: "Short Courses" },
    ],
  },
  { path: "/online-admission", label: "Admission" },
  { path: "/result", label: "Result" },
  { path: "/apply-for-institution", label: "Apply for Institute" },
  { path: "/v-doctor-information", label: "V Doctor Information" },
  { path: "/news", label: "News" },
  { path: "/notice", label: "Notices" },
  { path: "/branch-office", label: "Branch" },
  // { path: "/authority-aphorism", label: "Authority Aphorism" },
  { path: "/contact-us", label: "Contact" },
];

const Nav = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path) && location.pathname !== "/";
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <header className="w-full z-50 no-print">
      {" "}
      {/* Ensure navbar stays on top */}
      <Header />
      <nav className="container relative mx-auto flex justify-between items-center bg-gray-200 py-2 px-2   z-50">
        {" "}
        {/* Z-index added */}
        {/* Hamburger Icon for Mobile */}
        <button
          onClick={toggleMenu}
          className="text-2xl lg:hidden focus:outline-none"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        {/* Full Menu for Large Screens */}
        <div className="hidden lg:flex w-full justify-between items-center">
          {navItems.map((item, index) => (
            <div className="relative group" key={index}>
              <Link
                to={item.path}
                className={`text-sm font-medium px-3 py-2 rounded-md transition-colors duration-200 ease-in-out flex ${
                  isActive(item.path)
                    ? "bg-[#0C7DCE] text-white"
                    : "text-gray-700 hover:bg-blue-100"
                }`}
              >
                {item.label}
                {item.dropdown && (
                  <FaChevronDown className="inline ml-2" /> // Add Down Chevron Icon
                )}
              </Link>
              {/* Dropdown for courses */}
              {item.dropdown && (
                <div className="absolute hidden group-hover:flex flex-col bg-white shadow-md rounded-md mt-0 w-48 z-50">
                  {item.dropdown.map((dropdownItem) => (
                    <Link
                      key={dropdownItem.path}
                      to={dropdownItem.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
                    >
                      {dropdownItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-12 left-0 w-full bg-gray-200 flex flex-col items-start px-6 py-4 z-50">
            {navItems.map((item, index) => (
              <div key={item.path} className="w-full">
                <Link to={item.path}>
                  <button
                    onClick={() =>
                      item.dropdown ? toggleDropdown(index) : toggleMenu()
                    }
                    className={`block w-full text-left text-sm font-medium px-4 py-2 my-1 rounded-md transition-colors duration-200 ease-in-out ${
                      isActive(item.path)
                        ? "bg-[#0C7DCE] text-white"
                        : "text-gray-700 hover:bg-blue-100"
                    }`}
                  >
                    {item.label}
                    {item.dropdown && (
                      <FaChevronDown
                        className={`inline ml-2 transition-transform ${
                          activeDropdown === index ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>
                </Link>

                {/* Dropdown for mobile */}
                {item.dropdown && activeDropdown === index && (
                  <div className="flex flex-col bg-white rounded-md shadow-md mt-1 ml-4">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.path}
                        to={dropdownItem.path}
                        onClick={toggleMenu}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Nav;
