import React from "react";
import NavigationWrapper from "./NavigationWrapper";
import Image from "next/image";
import { getAllPosts } from "@/http/article.http";

const Blog = async () => {
  const articles = await getAllPosts().then((data) => {
    console.log(data.articles)
    return data.articles;
  });

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
          {articles.map((article) => (
              <li key={article.id} className="mb-12">
                <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-blue-100/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <div className="z-10 sm:order-2 sm:col-span-6">
                    <h3>
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-blue-300 focus-visible:text-blue-300 group/link text-base"
                        href={article.id.toString()}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`${article.title} (opens in a new tab)`}
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>{article.title}</span>
                      </a>
                    </h3>
                    <p className="mt-2 text-sm leading-normal">
                      {article.description}
                    </p>
                  </div>
                  <Image
                    alt={article.image.alt}
                    loading="lazy"
                    width={article.image.width}
                    height={article.image.height}
                    decoding="async"
                    className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                    style={{ color: "transparent" }}
                    src={article.image.src}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </NavigationWrapper>
  );
};

export default Blog;
