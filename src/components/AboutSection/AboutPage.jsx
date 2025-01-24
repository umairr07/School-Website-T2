import Glance from "../StatsSection/Glance";
import Testimonial from "../Testimonials/Testimonials";
import OurMissions from "./OurMissions";

const AboutPage = () => {
  return (
    <div>
      <section className=" text-white py-8">
        <div className="text-center bg-blue-main lg:py-20 sm:py-10">
          <h1 className="lg:text-6xl sm:text-3xl font-bold mb-8 font-montserrat">
            About Us
          </h1>
        </div>

        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center lg:px-32 w-full py-10 mt-10">
          <div className="text-forText">
            <div>
              <h3 className="lg:text-6xl sm:text-3xl mb-6 font-montserrat text-forHeading">
                NextGen Scholars
              </h3>
            </div>
            <div className="space-y-10">
              <p className="text-base">
                As the oldest continuously run educational institution, The
                NextGen Scholars remains committed to providing an academically
                rigorous education to students who will walk out of school ready
                for lives of leadership and service to their community. From
                literacy to music and art, each day at the NextGen Scholars is
                filled with activities that are both enriching and fun.
              </p>
              <p className="text-base">
                We strive to be committed to the students we are privileged to
                serve, in our alumni association, our dedicated, talented
                faculty and staff. We also take pride in having the most active
                and helpful group of partners, visionary parents, well-wishers,
                alumni and friends.
              </p>
            </div>
          </div>
        </div>

        <div className="py-10">
          <Testimonial />
        </div>
        <div className="py-10">
          <Glance />
        </div>
        <div className="py-10">
          <OurMissions />
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
