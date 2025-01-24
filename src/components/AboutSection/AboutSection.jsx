import React from "react";

const AboutSection = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto items-start border-b-2 border-forBorder">
        <div className="py-10">
          <h1 className="font-merriweather text-forHeading lg:text-6xl sm:text-4xl font-medium leading-tight">
            Learning Begins <br />
            <span>With Us</span>
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 sm:grid-cols-1 lg:gap-20 sm:gap-10 mb-16">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-forText text-lg">
              We, at NextGen Scholars, offer supportive and inspirational
              environments for young enquiring minds to learn and grow with us.
              Our passion for learning means we achieve more than outstanding
              results. We strive to build confident and creative thinkers and
              aim at delivering an education that is truly relevant to their
              future.
            </p>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <p className="text-forText text-lg">
              We are an early learning academy focused on social-emotional
              development and early literacy and numeracy. Our students walk out
              with the character and confidence to make their mark in the world,
              equipped with the knowledge and real-world skills that take them
              way ahead in the industry they may serve.
            </p>
            <a
              href="#"
              className="text-blue-main underline font-semibold flex items-center space-x-2"
            >
              <span>Know More About Us</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
