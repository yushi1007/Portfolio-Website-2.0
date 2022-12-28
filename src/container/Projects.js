import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/data";
import { Fade } from "react-awesome-reveal";
import { CgMoreO } from "react-icons/cg";

const Projects = () => {
  const [visible, setVisible] = useState(6);

  const projectItems = projects.slice(0, visible).map((projectItem, index) => {
    return (
      <ProjectCard
        key={index}
        projectItem={projectItem}
        projectTags={projectItem.tags}
      />
    );
  });

  const showMore = () => {
    setVisible((visible) => visible + 2);
  };

  return (
    <div
      id="projects"
      className="text-white mt-40 flex justify-between items-center mx-auto px-6 md:px-6 lg:px-6 w-full"
    >
      <div className="container mx-auto h-full w-full lg:px-6 md:px-6">
        <Fade direction="up" cascade triggerOnce="true">
          <header className="flex flex-col items-center text-center">
            <h2 className="font-bold text-4xl mb-20 text-transform: uppercase after:mx-auto after:mb-0 after:block after:mt-9 after:rounded-full after:h-1 after:w-24 after:-translate-y-1 after:bg-indigo-600 after:content-['']">
              Technical Projects
            </h2>
          </header>
        </Fade>
        <div className="grid grid-cols-0 md:grid-cols-1 lg:grid-cols-2 gap-14 w-full mb-24">
          {projectItems}
        </div>
        {visible < projects.length && (
          <Fade direction="up" cascade triggerOnce="true">
            <div className="items-center text-center">
              <button
                onClick={showMore}
                className="transition-all duration-300 hover:bg-indigo-600 text-indigo-300 hover:text-white border-2 border-indigo-600 text-2xl font-medium py-2 px-4 rounded inline-flex items-center tracking-widest"
              >
                <CgMoreO
                  className="mr-3 h-6 w-6 text-white"
                  aria-hidden="true"
                />
                <span>Load More</span>
              </button>
            </div>
          </Fade>
        )}
      </div>
    </div>
  );
};

export default Projects;
