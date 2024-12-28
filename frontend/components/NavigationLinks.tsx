"use client";
import React from "react";
import { Link } from "react-scroll";

const NavigationLinks = () => {
  return (
    <nav className="nav hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-16 w-max">
        <li>
          <Link
            className="group flex items-center py-3 cursor-pointer"
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active" 
            offset={-100} 
          >
            <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
            <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-300 group-focus-visible:text-slate-300">
              About
            </span>
          </Link>
        </li>
        <li>
          <Link
            className="group flex items-center py-3 cursor-pointer"
            to="experience"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active" 
            offset={-100} 
          >
            <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
            <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-300 group-focus-visible:text-slate-300">
              Experience
            </span>
          </Link>
        </li>
        {/* <li>
          <Link
            className="group flex items-center py-3 cursor-pointer"
            to="projects"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active" 
            offset={-150} 
          >
            <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
            <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-300 group-focus-visible:text-slate-300">
              Projects
            </span>
          </Link>
        </li> */}
        <li>
          <Link
            className="group flex items-center py-3 cursor-pointer"
            to="blog"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active" 
            offset={-150} 
          >
            <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
            <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-300 group-focus-visible:text-slate-300">
              Blog
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationLinks;
