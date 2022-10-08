import React, { useState } from "react";
import { projects } from "../data/data";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projectItems = projects.map((projectItem, index) => {
    return (
      <ProjectCard
        key={index}
        projectItem={projectItem}
        projectTags={projectItem.tags}
      />
    );
  });

  return (
    <div
      id="projects"
      className="text-white flex justify-center items-center lg:bg-cover lg:bg-center lg:bg-no-repeat pt-40 overflow-hidden"
    >
      <div className="h-full w-full">
        <header className="flex flex-col items-center text-center">
          <h2 className="font-bold text-4xl mb-20 text-transform: uppercase after:mx-auto after:mb-0 after:block after:mt-9 after:rounded-full after:h-1 after:w-24 after:-translate-y-1 after:bg-indigo-600 after:content-['']">
            Technical Projects
          </h2>
        </header>
        <div className="">{projectItems}</div>
      </div>
    </div>
  );
};

export default Projects;
