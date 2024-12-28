import React from "react";
import NavigationWrapper from "./NavigationWrapper";
import Link from "next/link";

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
        <div >
          <ol className="group/list">
            {/* Experience 1: DexTrading */}
            <li className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 hover:bg-blue-100/50 hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg rounded-md p-4">
                <header
                  className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                  aria-label="Nov 2023 to Present"
                >
                  Nov 2023 — Present
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-400">
                    <div>
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-slate-400 hover:text-blue-300 focus-visible:text-blue-300 group/link text-base"
                        href="https://dextrading.com"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="Full Stack Developer at DexTrading (opens in a new tab)"
                      >
                        <span>
                          Full Stack Developer · DexTrading
                        </span>
                      </a>
                    </div>
                  </h3>
                  <ul className="list-outside space-y-1 mt-2 text-sm leading-normal">
                    <li>
                      Full redevelopment of DexTrading&apos;s website using Next.js
                    </li>
                    <li>
                      Developed backend using Node.jsNestJS & Python/Django
                    </li>
                    <li>
                      Built an admin panel with React for content management.
                    </li>
                  </ul>
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
                        Node.js/NestJS
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-300">
                        Python/Django
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-300">
                        Figma
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
                  aria-label="June 2023 to Nov 2023"
                >
                  June 2023 — Nov 2023
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
                        <span>Full Stack Developer · Azer Tech</span>
                      </a>
                    </div>
                  </h3>
                  <ul className="list-outside space-y-1 mt-2 text-sm leading-normal">
                    <li>
                      Developed a multi-language Next.js application
                    </li>
                    <li>
                      Created a CI/CD pipeline by setting up Docker and GitLab
                    </li>
                    <li>
                      Built an admin panel with React for content management.
                    </li>
                  </ul>
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
                        Node.js
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-300">
                        NestJS
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
                  aria-label="June 2022 — July 2023"
                >
                  June 2022 — July 2023
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
                        <span>Full Stack Developer · Chargoon</span>
                      </a>
                    </div>
                  </h3>
                  <ul className="list-outside space-y-1 mt-2 text-sm leading-normal">
                    <li>Built and maintained React components for frontend</li>
                    <li>Developed backend logic using .NET framework</li>
                    <li>Optimized JavaScript codebase by consolidating functions</li>
                  </ul>
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
                  aria-label="Feb 2021 — June 2022"
                >
                  Feb 2021 — June 2022
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
                  <ul className="list-outside space-y-1 mt-2 text-sm leading-normal">
                    <li>Built a PWA fitness platform using Angular</li>
                    <li>Dockerized Angular app for faster deployments</li>
                    <li>Designed a CMS for streamlined video uploads</li>
                    <li>Conducted A/B testing to optimize performance</li>
                    <li>Implemented HLS for stable video playback</li>
                  </ul>

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
                  aria-label="Sep 2019 to Nov 2020"
                >
                  Sep 2019 — Nov 2020
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-400">
                    <div>
                      <span>Full Stack Developer · TivanCar</span>
                    </div>
                  </h3>
                  <ul className="list-outside space-y-1 mt-2 text-sm leading-normal">
                    <li>Built full-stack services with Vue.js and Express.js</li>
                    <li>Designed user-focused UI through research and testing</li>
                  </ul>
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
                  aria-label="Aug 2018 — Nov 2019"
                >
                  Aug 2018 — Nov 2019
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-400">
                    <div>
                      <span>Full Stack Developer · GamAlef</span>
                    </div>
                  </h3>
                  <ul className="list-outside space-y-1 mt-2 text-sm leading-normal">
                    <li>Built full-stack components with Vue.js and Node.js</li>
                    <li>Designed intuitive UI with UI/UX research</li>
                  </ul>

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
            <Link
              className="inline-flex items-baseline leading-tight hover:text-blue-300 focus-visible:text-blue-300 font-semibold text-slate-400 group/link text-base"
              href="https://drive.google.com/file/d/1MkYlq4cLPWFTqDk0x4ZWghZNsXPUhxu9/view?usp=drive_link"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="View Full Résumé (opens in a new tab)"
            >
              <span>
                View Full <span className="inline-block">Résumé</span>
              </span>
            </Link>
          </div>
        </div>
      </section>
    </NavigationWrapper>
  );
};

export default ExperienceSection;
