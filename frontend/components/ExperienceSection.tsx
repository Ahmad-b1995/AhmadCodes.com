import React from "react";
import NavigationWrapper from "./NavigationWrapper";

const ExperienceSection = () => {
  return (
    <NavigationWrapper elementName="experience">
      <section
        id="experience"
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        aria-label="Work experience"
      >
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-300 lg:sr-only">
            Experience
          </h2>
        </div>
        <div>
          <ol className="group/list">
            {/* Experience 1: DexTrading */}
            <li className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 hover:bg-blue-100/50 hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg rounded-md p-4">
                <header
                  className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                  aria-label="July 2023 to Present"
                >
                  July 2023 — Present
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-400">
                    <div>
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-slate-400 hover:text-blue-300 focus-visible:text-blue-300 group/link text-base"
                        href="https://dextrading.com"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="Full Stack Developer & Designer at DexTrading (opens in a new tab)"
                      >
                        <span>
                          Full Stack Developer & Designer · DexTrading
                        </span>
                      </a>
                    </div>
                  </h3>
                  <p className="mt-2 text-sm leading-normal">
                    Led the complete redevelopment of DexTrading&apos;s website using
                    Next.js, enhancing code quality and user experience.
                    Developed the front-end from scratch using Figma and Zeplin
                    for design. Created a new backend for the blog using NestJS
                    and built an admin panel with React for streamlined content
                    management.
                  </p>
                  <ul
                    className="mt-2 flex flex-wrap"
                    aria-label="Technologies used"
                  >
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-300">
                        Next.js
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-300">
                        React
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-300">
                        NestJS
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-300">
                        Figma
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-300">
                        Zeplin
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            {/* Experience 2: Azer Tech */}
            <li className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 hover:bg-blue-100/50 hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg rounded-md p-4">
                <header
                  className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                  aria-label="July to November 2023"
                >
                  July 2023 — Nov 2023
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-400">
                    <div>
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-slate-400 hover:text-blue-300 focus-visible:text-blue-300 group/link text-base"
                        href="#"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="Front End Developer at Azer Tech (opens in a new tab)"
                      >
                        <span>Front End Developer · Azer Tech</span>
                      </a>
                    </div>
                  </h3>
                  <p className="mt-2 text-sm leading-normal">
                    Provided web development solutions using Next.js, React, and
                    TypeScript. Collaborated with design and back-end teams to
                    optimize application performance and create seamless user
                    experiences.
                  </p>
                  <ul
                    className="mt-2 flex flex-wrap"
                    aria-label="Technologies used"
                  >
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-300">
                        Next.js
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-300">
                        React
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-300">
                        TypeScript
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            {/* Experience 3: Chargoon */}
            <li className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 hover:bg-blue-100/50 hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg rounded-md p-4">
                <header
                  className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                  aria-label="Dec 2022 to July 2023"
                >
                  Dec 2022 — July 2023
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-400">
                    <div>
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-slate-400 hover:text-blue-300 focus-visible:text-blue-300 group/link text-base"
                        href="https://chargoon.com"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="Front End Developer at Chargoon (opens in a new tab)"
                      >
                        <span>Front End Developer · Chargoon</span>
                      </a>
                    </div>
                  </h3>
                  <p className="mt-2 text-sm leading-normal">
                    Developed HR automation software pages and components,
                    increasing efficiency by 15%. Led code reviews to ensure
                    best practices and collaborated with back-end developers to
                    design and implement API endpoints.
                  </p>
                  <ul
                    className="mt-2 flex flex-wrap"
                    aria-label="Technologies used"
                  >
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-300">
                        React
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-300">
                        TypeScript
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-300">
                        REST API
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            {/* Experience 4: Hamisheh */}
            <li className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 hover:bg-blue-100/50 hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg rounded-md p-4">
                <header
                  className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                  aria-label="Sep 2021 to Nov 2022"
                >
                  Sep 2021 — Nov 2022
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-400">
                    <div>
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-slate-400 hover:text-blue-300 focus-visible:text-blue-300 group/link text-base"
                        href="https://hamisheh.app"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="Front End Developer at Hamisheh (opens in a new tab)"
                      >
                        <span>Front End Developer · Hamisheh</span>
                      </a>
                    </div>
                  </h3>
                  <p className="mt-2 text-sm leading-normal">
                    Developed a PWA-compatible fitness video streaming
                    application, enhancing user engagement by 20%. Built a CMS
                    for content management, streamlining the video upload
                    process by 30%.
                  </p>
                  <ul
                    className="mt-2 flex flex-wrap"
                    aria-label="Technologies used"
                  >
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-300">
                        React
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-300">
                        TypeScript
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-300">
                        PWA
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            {/* Experience 5: TivanCar */}
            <li className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 hover:bg-blue-100/50 hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg rounded-md p-4">
                <header
                  className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                  aria-label="Sep 2020 to Nov 2021"
                >
                  Sep 2020 — Nov 2021
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-400">
                    <div>
                      <span>Full Stack Developer · TivanCar</span>
                    </div>
                  </h3>
                  <p className="mt-2 text-sm leading-normal">
                    Developed a full-stack auto-parts e-commerce platform using
                    Vue.js, Node.js, and MongoDB. Implemented Docker & Docker
                    Compose for efficient development and deployment workflows.
                    Assisted in staffing and training new developers.
                  </p>
                  <ul
                    className="mt-2 flex flex-wrap"
                    aria-label="Technologies used"
                  >
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-300">
                        Vue.js
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-300">
                        Node.js
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-300">
                        MongoDB
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-300">
                        Docker
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            {/* Experience 6: GamAlef */}
            <li className="mb-12 ">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 hover:bg-blue-100/50 hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg rounded-md p-4">
                <header
                  className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                  aria-label="Aug 2019 to Oct 2020"
                >
                  Aug 2019 — Oct 2020
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-400">
                    <div>
                      <span>Full Stack Developer · GamAlef</span>
                    </div>
                  </h3>
                  <p className="mt-2 text-sm leading-normal">
                    Developed a full-stack book e-commerce platform,
                    contributing to a 25% increase in online sales. Provided
                    front-end and UX design consulting, utilizing Tailwind CSS
                    and Docker for scalable development.
                  </p>
                  <ul
                    className="mt-2 flex flex-wrap"
                    aria-label="Technologies used"
                  >
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-300">
                        Vue.js
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-300">
                        Node.js
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-300">
                        Tailwind CSS
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-300">
                        Docker
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ol>
          <div className="mt-12">
            <a
              className="inline-flex items-baseline leading-tight hover:text-blue-300 focus-visible:text-blue-300 font-semibold text-slate-400 group/link text-base"
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="View Full Résumé (opens in a new tab)"
            >
              <span>
                View Full <span className="inline-block">Résumé</span>
              </span>
            </a>
          </div>
        </div>
      </section>
    </NavigationWrapper>
  );
};

export default ExperienceSection;
