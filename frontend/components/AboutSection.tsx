import React from "react";
import NavigationWrapper from "./NavigationWrapper";

const AboutSection = () => {
  return (
    <NavigationWrapper elementName="about">
      <section
        id="about"
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        aria-label="About me"
      >
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-300 lg:sr-only">
            About
          </h2>
        </div>
        <div>
          <p className="mb-4">
            I started my journey as a front-end developer in 2016, building
            engaging web applications using React.js, Angular, and Next.js. Over
            the years, I&apos;ve honed my skills in building scalable, maintainable
            solutions with a strong focus on performance, user experience, and
            code quality. In 2021, I transitioned into full-stack development,
            expanding my expertise to include back-end technologies like NestJS.
          </p>
          <p className="mb-4">
            Currently, I am focused on developing my own crypto generator
            service, where I leverage the full development stack — from planning
            and design to the final product. My work revolves around building
            robust applications using modern technologies such as NestJS,
            Next.js, with a strong passion for optimizing every step of the
            development process.
          </p>
          <p className="mb-4">
            As a Linux enthusiast, I rely on terminal commands and automation to
            streamline my workflow. I firmly believe in the power of efficient
            development environments and practices, using tools like Docker and
            various testing libraries to ensure top-notch code quality.
          </p>
          <p className="mb-4">
            Outside of coding, I am an avid reader. Whether it&apos;s diving into new
            programming concepts, staying updated with the latest technology
            trends, or exploring a wide variety of subjects like business,
            personal growth, and health and fitness, reading is an integral part
            of my life.
          </p>
        </div>
      </section>
    </NavigationWrapper>
  );
};

export default AboutSection;
