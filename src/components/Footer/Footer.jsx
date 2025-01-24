import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

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
const Footer = () => {
  return (
    <footer className="bg-forbg text-fortext p-6 mt-20">
      <div className="container mx-auto lg:flex lg:flex-row lg:justify-around sm:flex sm:flex-col gap-10">
        <div>
          <h1 className="text-3xl font-normal  font-montserrat mb-4 pb-4 text-forHeading">
            NextGen Scholars
          </h1>
          <p className="text-forText">
            1234 Demo Ave, Austin, TX 56789,
            <br /> United States.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-normal font-montserrat mb-2 pb-4 text-forHeading">
            Main Office
          </h2>
          <p className="text-forText">+1 123-456-7890</p>
          <p className="text-forText">8:00 am - 4:00 pm</p>
        </div>
        <div>
          <h2 className="text-2xl font-normal mb-2 pb-4 font-montserrat text-forHeading">
            Attendance
          </h2>
          <p className="text-forText">+1 123-456-7891</p>
          <p className="text-forText">mail@example.com</p>
        </div>
      </div>

      <div className="mt-12 lg:flex justify-around items-center gap-5">
        <div className="flex gap-5">
          <img
            src="https://img.freepik.com/premium-vector/education-logo-letter-n-with-graduation-hat-icon-graduation-symbol_754537-7747.jpg"
            alt="Champion School Logo"
            className="lg:w-24 sm:w-20"
          />
          <p className="lg:text-3xl sm:text-2xl font-bold text-blue-main font-montserrat mt-1">
            NextGen <br />
            Scholars
          </p>
        </div>
        <div className="flex gap-5">
          {lists.map((item, idx) => {
            return (
              <div key={idx}>
                <div>
                  <Link
                    to={item.path}
                    className="cursor-pointer lg:text-[17px] sm:text-[14px] text-forText hover:text-blue-main transition-all duration-300"
                  >
                    {item.name}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex gap-3 text-xl sm:mt-5 lg:mt-0 text-blue-main cursor-pointer">
          <FaTwitter />
          <FaFacebook />
          <FaInstagram />
        </div>
      </div>

      {/* <div className="mt-8 flex justify-center space-x-4">
        <a href="#" className="text-blue-main hover:text-blue-main">
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          ></svg>
        </a>
        <a href="#" className="text-blue-main hover:text-blue-main">
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          ></svg>
        </a>
        <a href="#" className="text-blue-main hover:text-blue-main">
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          ></svg>
        </a>
      </div> */}

      <div className="mt-8 text-center">
        <p className="text-forText">
          Copyright © 2023 School | Powered by School
        </p>
      </div>
    </footer>
  );
};

export default Footer;
