import React from "react";

function Subscribe() {
  return (
    <div className=" lg:px-40 ">
      <div className="bg-blue-main lg:py-28 sm:p-10 text-center rounded-lg text-white">
        <h2 className="lg:text-3xl sm:text-2xl font-montserrat py-5 font-semibold mb-4">
          Wish to know more about admissions and updates? Subscribe now!
        </h2>
        <div className="flex justify-center items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 lg:pr-24 rounded border border-forBorder text-forText outline-none"
          />
          <button className="bg-white text-blue-main font-bold px-4 py-2 rounded hover:bg-gray-200">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
