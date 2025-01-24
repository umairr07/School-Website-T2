import { FaDotCircle } from "react-icons/fa";

const data = [
  {
    title: "Athletics",
    description:
      "Our students are passionate about sports and athletics and have the freedom to choose the one they like and wish to take up.",
  },
  {
    title: "In-house Publications",
    description:
      "We have several writers who are encouraged to come up with creations that are regularly published in our in-house magazines.",
  },
  {
    title: "Performing Arts & Music",
    description:
      "With professionals on board, we take pride in training our students in art forms like dance, drama, painting and more.",
  },
];

const Activities = () => {
  return (
    <div className="grid lg:grid-cols-2 sm:grid-cols-1 lg:px-56 sm:px-5 py-20">
      <div>
        <img
          src="https://websitedemos.net/school-02/wp-content/uploads/sites/858/2021/05/school-template-activities-img.jpg"
          alt=""
          className="rounded-lg w-96"
        />
      </div>

      <div>
        <div>
          <p className="lg:text-5xl sm:text-3xl font-normal text-forHeading font-montserrat sm:pt-7 lg:pt-0">
            Our Co-curricular <br />
            Activities
          </p>
        </div>

        <div className="flex flex-col gap-10 mt-10">
          {data.map((item, idx) => {
            return (
              <div key={idx} className="">
                <div className="flex items-center gap-5">
                  <FaDotCircle className="text-blue-main" />
                  <h1 className="text-forHeading font-montserrat text-2xl">
                    {item.title}
                  </h1>
                </div>
                <p className="ml-8 text-forText">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Activities;
