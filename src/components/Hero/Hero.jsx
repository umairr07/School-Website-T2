import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/premium-photo/happy-young-asian-indian-college-students-reading-generative-ai_849906-11044.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <div className="relative text-center text-white px-6 md:px-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 font-merriweather">
          Empowering Education for a Brighter Future
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Discover knowledge, embrace learning, and achieve your dreams with us.
        </p>
        <Link
          to={"/academics"}
          className="px-6 py-3 bg-blue-main text-white hover:bg-white hover:text-blue-main font-semibold rounded-lg shadow-lg transition-all ease-in duration-200"
        >
          Our Academics
        </Link>
      </div>
    </div>
  );
};

export default Hero;
