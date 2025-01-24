import React from "react";

const data = [
  {
    title: "Athletics",
    description:
      "Our students are passionate about sports and athletics and have the freedom to choose the one they like and wish to take up. We also participate in inter-school, district, state and national level competitions.",
    image:
      "https://websitedemos.net/school-02/wp-content/uploads/sites/858/2021/05/school-template-activities-img-1.jpg",
  },
  {
    title: "In-house Publications",
    description:
      "We have several writers who are encouraged to come up with creations that are regularly published in our in-house magazines. We host a book sale every 2 years to promote our writers and their work.",
    image:
      "https://websitedemos.net/school-02/wp-content/uploads/sites/858/2021/05/school-template-activities-img-2.jpg",
  },
  {
    title: "Performing Arts & Music",
    description:
      "With professionals on board, we take pride in training our students in art forms like dance, drama, painting and more. We organize exhibitions, concerts and musical events to encourage our students to own their talent and flourish in those fields.",
    image:
      "https://websitedemos.net/school-02/wp-content/uploads/sites/858/2021/05/school-template-activities-img-3.jpg",
  },
];

const ActivitesPage = () => {
  return (
    <div>
      <section className="bg-forbg text-white py-8">
        <div className="text-center bg-blue-main lg:py-20 sm:py-10">
          <h1 className="lg:text-6xl sm:text-3xl font-bold mb-8 font-montserrat">
            Co-curricular Activities
          </h1>
        </div>
      </section>
      <section className="bg-forbg lg:py-20">
        <div className="grid grid-cols-1  gap-10 lg:px-32 sm:px-5 items-center ">
          {data.map((item) => (
            <div
              key={item.title}
              className="lg:flex gap-12 items-center overflow-hidden w-[100%]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-[500px] h-96 object-cover rounded-lg"
              />
              <div className="p-4">
                <h3 className="text-4xl py-3 font-montserrat mb-2 text-forHeading">
                  {item.title}
                </h3>
                <p className="text-base text-forText">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ActivitesPage;
