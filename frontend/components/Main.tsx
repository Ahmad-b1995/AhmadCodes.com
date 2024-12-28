import React from 'react';
import AboutSection from './AboutSection';
import ExperienceSection from './ExperienceSection';
import Blog from './Blog';

const Main = () => {
    return (
        <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
            <AboutSection />
            <ExperienceSection />
            {/* <ProjectSection /> */}
            <Blog/>
        </main>
    );
};

export default Main;
