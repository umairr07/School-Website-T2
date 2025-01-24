import React from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import Glance from "./Glance";

const StatsSection = () => {
  return (
    <div>
      <div className="">
        <Glance />
        <div>
          <img
            src="https://www.sanofi.com/optim/dotcom/pages/images/our-company/social-impact/people-in-and-beyond-the-workplace/a-million-conversations/sanofi-nextgen-scholars/thumbnail-youtube-compilation_20240228083300.jpg?size=medium"
            alt=""
            className="rounded-lg w-[90%] py-5 m-auto"
          />
        </div>
      </div>
      >
      <div className="bg-forbg py-20 px-4">
        <p className="font-montserrat italic lg:text-6xl sm:text-3xl text-forHeading lg:px-32 sm:px-5">
          <RiDoubleQuotesL className="text-blue-main" />
          We aim at inspiring our students to dream more, learn more, do more,
          and become more in their respective journeys of life.
        </p>
        <p className="text-forHeading text-xl lg:px-32 sm:px-5 lg:py-10 sm:py-5 font-montserrat">
          Jonathan Doe — Headmaster
        </p>
      </div>
    </div>
  );
};

export default StatsSection;
