import React from "react";

const statsData = [
  { value: "2K+", label: "Current Enrollments" },
  { value: "90+", label: "Qualified Staff" },
  { value: "80+", label: "Clubs & Activities" },
  { value: "100+", label: "Active PTFA Members" },
];

const Glance = () => {
  return (
    <div className="text-center py-8 lg:px-32">
      <h2 className="lg:text-3xl sm:text-xl font-bold mb-16 text-forHeading font-montserrat">
        NextGen Scholars at a Glance
      </h2>
      <div className="lg:flex lg:flex-row sm:flex sm:flex-col justify-around gap-12">
        {statsData.map((stat, index) => (
          <div key={index} className="text-center">
            <p className="lg:text-6xl sm:text-3xl font-bold text-blue-main">
              {stat.value}
            </p>
            <p className="text-forText">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Glance;
