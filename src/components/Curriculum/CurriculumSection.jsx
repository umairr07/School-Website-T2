import { MdOutlineHorizontalRule } from "react-icons/md";

const curriculumData = [
  {
    title: "Computer Science",
    description:
      "Hands-on experience with the latest programming languages and technology.",
    image:
      "https://websitedemos.net/school-02/wp-content/uploads/sites/858/2021/05/school-template-curriculum-img-1.jpg",
  },
  {
    title: "Fine Arts",
    description:
      "Giving wings to the artists who'd like to take it up as a career or just a hobby.",
    image:
      "https://websitedemos.net/school-02/wp-content/uploads/sites/858/2021/05/school-template-curriculum-img-2.jpg",
  },
  {
    title: "Humanities",
    description:
      "The study of ancient and modern languages, philosophy, history, and more.",
    image:
      "https://websitedemos.net/school-02/wp-content/uploads/sites/858/2021/05/school-template-curriculum-img-3.jpg",
  },
  {
    title: "Science",
    description:
      "The study that encourages scientific reasoning, discoveries and inventions.",
    image:
      "https://websitedemos.net/school-02/wp-content/uploads/sites/858/2021/05/school-template-curriculum-img-4.jpg",
  },
  {
    title: "Mathematics",
    description:
      "Understanding the game of numbers and logic to solve real-world problems.",
    image:
      "https://websitedemos.net/school-02/wp-content/uploads/sites/858/2021/05/school-template-curriculum-img-5.jpg",
  },
  {
    title: "Languages",
    description:
      "Learning more modes of communication from different parts of the world.",
    image:
      "https://websitedemos.net/school-02/wp-content/uploads/sites/858/2021/05/school-template-curriculum-img-6.jpg",
  },
];

const CurriculumSection = () => {
  return (
    <div className="py-12 lg:px-32 sm:px-5 mt-20">
      <div className="lg:flex justify-around w-[100%]">
        <div>
          <h2 className="lg:text-5xl sm:text-3xl font-normal font-montserrat">
            Curriculum <br /> Overview
          </h2>
        </div>
        <div className="lg:w-[50%]">
          <p className="text-forText mt-2">
            The NextGen Scholars aims at offering all our students a broad and
            balanced curriculum that provides rewarding and stimulating
            activities to prepare them for the best social and cultural life.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-10 mt-16">
        {curriculumData.map((item, index) => (
          <div key={index} className="">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-96 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl text-forHeading font-semibold">
              {item.title}
            </h3>
            <p className="text-forText mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurriculumSection;
