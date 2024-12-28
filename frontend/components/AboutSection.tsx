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
            With over seven years of experience as a senior Full Stack Developer, I have been privileged to build over 10 web applications from scratch, all of which were built with scalability and future growth in mind. This journey has taken me through five different startups, each uniquely challenging and presenting unique opportunities. These experiences honed my ability to think ahead, design for the future, and make sure that the solutions I build could grow as fast as the companies they supported.
          </p>
          <p className="mb-4">
            I prefer to work in places that value initiative on their merits. Be it with processes, stress-testing Continuous Integration/Continuous Deployment pipelines, or workflows, for good measure, I am constantly investigating room for improvement. I'd go deep into the deep core of a project structure, ensuring every decision fits into a reason that feels coherent with the best practice in engineering and industry standard standards. My focus would go toward setting up something to last: a product able to scale and to grow without compromise.
          </p>
          <p className="mb-4">
            Problem-solving is my happy place. Throw a challenge my way, and I'll not only find a solution but likely enjoy the process a little too much! Analytical thinking comes naturally, but so does creativity-an essential trait when you've spent as much time in startups as I have. Navigating the fast-paced, ever-changing world of entrepreneurship has sharpened my ability to adapt quickly, deliver effectively, and make a meaningful impact in lean, high-energy environments.
          </p>
          <p className="mb-4">
            Beyond code, I bring a strong design sensibility to the table. A background in UI/UX design has given me an eye to create intuitive and visually appealing interfaces. For me, good design is not just about looking good; it is about crafting seamless user experiences that keep people engaged, coming back for more. This, married with my technical expertise, allows me to bridge the gap between form and function with ease.
          </p>
          <p className="mb-4">
            Ultimately, I look at every project as an opportunity to leave something behind, be it shaping the architectural vision, mentoring a team, or just writing clean and efficient code. I bring passion and commitment to everything I do. Startups can be chaotic, but that's where the magic happens for me, and I wouldn't have it any other way.
          </p>
        </div>
      </section>
    </NavigationWrapper>
  );
};

export default AboutSection;
