// App.js
import React from "react";
import { RiDoubleQuotesL } from "react-icons/ri";

const Testimonial = () => {
  return (
    <div className="bg-forbg min-h-screen flex items-center justify-center p-6 lg:px-32">
      <div className="p-6  flex flex-col md:flex-row items-center md:items-start">
        <img
          src="https://websitedemos.net/school-02/wp-content/uploads/sites/858/2021/05/school-template-headmaster-img.jpg"
          className="lg:w-10/12 lg:h-100 rounded-md object-cover mb-4 md:mb-0 md:mr-6"
        />
        <div>
          <p className="font-montserrat italic lg:text-5xl sm:text-3xl text-forText lg:py-10  lg:px-20">
            <RiDoubleQuotesL className="text-blue-main" />
            Everyday at the NextGen Scholars is like a blessing with the active
            students and talented staff members around.
          </p>
          <p className="text-forHeading text-xl lg:px-20 lg:py-0 sm:py-5 font-montserrat">
            Jonathan Doe — Headmaster
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
