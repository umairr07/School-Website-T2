import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { HiX } from "react-icons/hi";

const lists = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Academics",
    path: "/academics",
  },
  {
    name: "Activities",
    path: "/activities",
  },
  {
    name: "About Us",
    path: "/about",
  },
  {
    name: "Contact Us",
    path: "/contact",
  },
];

const Header = () => {
  const [menu, setMenu] = useState(false);
  const location = useLocation();

  return (
    <>
      <nav className="fixed top-0 p-4 left-0 w-full bg-white text-blue-600 shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          {/* Logo */}
          <Link to={"/"} className="flex items-center cursor-pointer">
            <img
              src="https://img.freepik.com/premium-vector/education-logo-letter-n-with-graduation-hat-icon-graduation-symbol_754537-7747.jpg"
              alt="Logo"
              className="w-16"
            />
            <div className="text-sm font-bold text-blue-main ">
              <p>NextGen </p>
              <p>Scholars </p>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-10">
            {lists.map((item, idx) => {
              return location.pathname === item.path ? (
                <Link
                  to={item.path}
                  className="cursor-pointer lg:text-[17px] md:text-[15px] text-blue-main transition-all duration-300"
                >
                  {item.name}
                </Link>
              ) : (
                <Link
                  to={item.path}
                  className="cursor-pointer lg:text-[17px] md:text-[15px] hover:text-blue-main transition-all duration-300 "
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-blue-600 focus:outline-none"
              onClick={() => setMenu(!menu)}
            >
              {!menu ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              ) : (
                <HiX className="text-xl" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menu && (
        <div className="fixed top-0 right-0 h-screen w-56 bg-white shadow-xl flex flex-col justify-start items-start py-5 z-50">
          <button
            className="ml-auto mr-10 mt-3 text-blue-600 hover:text-red-500"
            onClick={() => setMenu(false)}
          >
            <HiX className="text-2xl" />
          </button>
          <div className="flex flex-col gap-3 ml-5 text-blue-600">
            {lists.map((item, idx) => {
              return (
                <Link
                  key={idx}
                  to={item.path}
                  onClick={() => setMenu(false)}
                  className="hover:underline"
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
