// App.js
import React from "react";

const data = [
  {
    title: "Mission Statement",
    content:
      "Our mission at Champion school is to develop the unique abilities and potential of each child by offering an enriched educational program. We strive for excellence through a hands-on approach. Rich traditions rooted in our innovative curriculum grow productive, caring, and intellectually curious citizens.",
  },
  {
    title: "Our Core Values",
    content:
      "We have a culture that is modern, relevant, and inspires students to have a brighter future. We are determined in our approach to learning, are creative in our thinking, and bold in our ambitions.",
  },
  {
    title: "Our Philosophy",
    content:
      "We, at Champion School, follow a child-centered educational approach. We make sure that it is based on scientific observations from birth to adulthood. We believe that a child is naturally curious and is capable of initiating learning in a supportive and thoughtfully prepared environment.",
  },
];

const OurMissions = () => {
  return (
    <div className=" py-10 px-6">
      {data.map((item, index) => (
        <div
          key={index}
          className="border-t border-forBorder py-8 grid lg:grid-cols-2 sm:grid-cols-1 lg:px-56"
        >
          <div>
            <h3 className="text-xl font-montserrat font-bold text-forHeading mb-4">
              {item.title}
            </h3>
          </div>
          <div>
            <p className="text-forText text-base">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OurMissions;
