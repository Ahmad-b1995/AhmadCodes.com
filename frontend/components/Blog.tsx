import React from "react";
import NavigationWrapper from "./NavigationWrapper";
import Image from "next/image";

const Blog = () => {
  return (
    <NavigationWrapper elementName="blog">
      <section
        id="blog"
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        aria-label="Blog articles"
      >
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-300 lg:sr-only">
            Blog
          </h2>
        </div>
        <div>
          <ul className="group/list">
            {/* Article 1 */}
            <li className="mb-12">
              <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-blue-100/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <div className="z-10 sm:order-2 sm:col-span-6">
                  <h3> 
                    <a
                      className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-blue-300 focus-visible:text-blue-300 group/link text-base"
                      href="https://your-blog-link-1.com"
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="Article 1 (opens in a new tab)"
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span>Understanding Tokenomics in Crypto</span>
                    </a>
                  </h3>
                  <p className="mt-2 text-sm leading-normal">
                    An in-depth guide to tokenomics, exploring the principles
                    behind token supply, demand, and distribution. Learn how to
                    assess a cryptocurrency&apos;s potential through its tokenomics
                    model.
                  </p>
                </div>
                <Image
                  alt="Tokenomics article"
                  loading="lazy"
                  width="200"
                  height="48"
                  decoding="async"
                  className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                  style={{ color: "transparent" }}
                  src="/_next/image?url=%2Fimages%2Fblog%2Ftokenomics.png&w=640&q=75"
                />
              </div>
            </li>

            {/* Article 2 */}
            <li className="mb-12">
              <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-blue-100/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <div className="z-10 sm:order-2 sm:col-span-6">
                  <h3>
                    <a
                      className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-blue-300 focus-visible:text-blue-300 group/link text-base"
                      href="https://your-blog-link-2.com"
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="Article 2 (opens in a new tab)"
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span>
                        Building Scalable Apps with Next.js and NestJS
                      </span>
                    </a>
                  </h3>
                  <p className="mt-2 text-sm leading-normal">
                    A technical walkthrough on building scalable full-stack
                    applications using Next.js for the front-end and NestJS for
                    the back-end. Covers best practices, patterns, and
                    deployment strategies.
                  </p>
                </div>
                <Image
                  alt="Next.js and NestJS article"
                  loading="lazy"
                  width="200"
                  height="48"
                  decoding="async"
                  className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                  style={{ color: "transparent" }}
                  src="/_next/image?url=%2Fimages%2Fblog%2Fnext-nest.png&w=640&q=75"
                />
              </div>
            </li>
          </ul>
        </div>
      </section>
    </NavigationWrapper>
  );
};

export default Blog;
