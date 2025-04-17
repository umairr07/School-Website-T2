import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { HiX } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { setError, setHeaders, setLoading } from "../../Redux/Slice/slice";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const { headers, loading, error } = useSelector((state) => state.header);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(setLoading());
      try {
        const response = await fetch(
          "http://localhost:8000/api/v1/header/get-all-headers"
        );
        const data = await response.json();
        dispatch(setHeaders(data));
        console.log(data);
      } catch (err) {
        dispatch(setError(err.message));
      }
    };

    fetchData();
  }, [dispatch]);

  const headerData = headers?.data?.[0];

  return (
    <>
      <nav className="fixed top-0 p-4 left-0 w-full bg-white text-blue-600 shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          {/* Logo from API */}
          <Link to="/" className="flex items-center cursor-pointer">
            <img
              src={headerData?.logo?.url}
              alt={headerData?.logo?.altText || "Logo"}
              className="w-16"
            />
            <div className="text-sm font-bold text-blue-main">
              <p>{headerData?.name || "School Name"}</p>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-10">
            {headerData?.navigation?.map((item) => (
              <Link
                key={item._id}
                to={item.link}
                className={`cursor-pointer lg:text-[17px] md:text-[15px] transition-all duration-300 ${
                  location.pathname === item.link
                    ? "text-blue-main"
                    : "hover:text-blue-main"
                }`}
              >
                {item.title}
              </Link>
            ))}
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
            <HiX className="text-2xl text-forText" />
          </button>
          <div className="flex flex-col gap-6 ml-5 text-blue-600">
            {headerData?.navigation?.map((item) => (
              <Link
                key={item._id}
                to={item.link}
                onClick={() => setMenu(false)}
                className="hover:underline"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
