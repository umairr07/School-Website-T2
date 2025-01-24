const curriculumData = [
  {
    title: "Computer Science",
    description:
      "Hands-on experience with the latest programming languages and technology. We have trained IT professionals who work closely with our students so they are prepared for the real world.",
    image:
      "https://websitedemos.net/school-02/wp-content/uploads/sites/858/2021/05/school-template-curriculum-img-1.jpg",
  },
  {
    title: "Fine Arts",
    description:
      "Giving wings to the artists who’d like to take it up as a career or just a hobby. Our students are trained by professionals who help them develop, learn and polish their skills while at school.",
    image:
      "https://websitedemos.net/school-02/wp-content/uploads/sites/858/2021/05/school-template-curriculum-img-2.jpg",
  },
  {
    title: "Humanities",
    description:
      "The study of ancient and modern languages, philosophy, history, and more. We take pride in offering top humanity courses from a dedicated and trained staff.",
    image:
      "https://websitedemos.net/school-02/wp-content/uploads/sites/858/2021/05/school-template-curriculum-img-3.jpg",
  },
  {
    title: "Science",
    description:
      "The study encourages scientific reasoning, discoveries and inventions. Great teachers and well-equipped laboratories help students explore, discover and experiment new things under the best supervision.",
    image:
      "https://websitedemos.net/school-02/wp-content/uploads/sites/858/2021/05/school-template-curriculum-img-4.jpg",
  },
  {
    title: "Mathematics",
    description:
      "Understanding the game of numbers and logic to solve real world problems. Learn mathematics from scholars and university toppers who not make it interesting, but also fun to learn.",
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

const AcademicsSection = () => {
  return (
    <div>
      <section className=" text-white py-8">
        <div className="text-center bg-blue-main lg:py-20 sm:py-10">
          <h1 className="lg:text-6xl sm:text-3xl font-bold mb-8 font-montserrat">
            Academics
          </h1>
        </div>

        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center lg:px-32 w-full py-10 mt-10">
          <div className="text-forText">
            <h2 className="text-lg font-medium  font-montserrat text-forHeading">
              Our Curriculum Overview
            </h2>
            <h3 className="lg:text-6xl sm:text-3xl mb-6 font-montserrat text-forHeading">
              A Commitment to Excellence
            </h3>
            <div className="lg:flex justify-around items-center gap-10 py-5">
              <p className="text-base">
                The NextGen Scholars aims at offering all our students a broad
                and balanced curriculum that provides rewarding and stimulating
                activities to prepare them for the best social and cultural
                life.
              </p>
              <p className="text-base">
                Whether it is our books or hands-on training, we make sure each
                student gets personal attention to cope up and flourish in every
                subject for better scores and a brighter future.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-forbg py-16">
        <div className="grid grid-cols-1  gap-10 lg:px-32 sm:px-5 items-center">
          {curriculumData.map((item) => (
            <div
              key={item.title}
              className="lg:flex gap-12 items-center overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-80 h-80 object-cover"
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

export default AcademicsSection;
