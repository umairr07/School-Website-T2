import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { MdMarkEmailRead } from "react-icons/md";

const ContactUs = () => {
  return (
    <div>
      <section className="py-8">
        <div className="text-center bg-blue-main lg:py-20 sm:py-10">
          <h1 className="lg:text-6xl sm:text-3xl font-bold mb-8 text-white font-montserrat">
            Contact Us
          </h1>
        </div>

        <div className="bg-forbg text-forText py-12 px-6 sm:px-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Side - Contact Information */}
            <div>
              <h2 className="text-forHeading lg:text-2xl sm:text-xl font-bold mb-4 font-montserrat">
                Wish to enquire about admissions, syllabus, or anything else?
              </h2>
              <p className="mb-6">
                You can walk in during office hours, give us a call, or simply
                submit the form here.
              </p>
              <div className="mb-6">
                <div className="flex items-center gap-3">
                  <FaLocationDot />
                  <h3 className="text-forHeading text-lg font-semibold">
                    Address
                  </h3>
                </div>
                <p className="lg:px-7 sm:px-7">
                  1234 Demo Ave, Austin, TX 56789, United States.
                </p>
              </div>
              <div className="mb-6">
                <div className="flex items-center gap-3">
                  <IoMdCall />
                  <h3 className="text-forHeading text-lg font-semibold">
                    Phone
                  </h3>
                </div>
                <p className="lg:px-7 sm:px-7">+01 - 123 456 7890</p>
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <MdMarkEmailRead />
                  <h3 className="text-forHeading text-lg font-semibold">
                    Email
                  </h3>
                </div>
                <p className="lg:px-7 sm:px-7">mail@example.com</p>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-white p-6 shadow-md rounded-md border border-forBorder">
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-forHeading font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    className="w-full p-3 border border-forBorder rounded-md focus:outline-none focus:ring focus:ring-blue-main"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-forHeading font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your Email"
                    className="w-full p-3 border border-forBorder rounded-md focus:outline-none focus:ring focus:ring-blue-main"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-forHeading font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Your Message"
                    rows="4"
                    className="w-full p-3 border border-forBorder rounded-md focus:outline-none focus:ring focus:ring-blue-main"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-main text-white py-3 px-6 rounded-md hover:bg-blue-600 transition"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
