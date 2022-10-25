import React from "react";
import { projects } from "../../data/data";
import ProjectCard from "../ProjectCard";

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
      className="text-white mt-40 flex justify-between items-center mx-auto px-6 md:px-6 lg:px-6 w-full"
    >
      <div className="container mx-auto h-full w-full lg:px-6 md:px-6">
        <header className="flex flex-col items-center text-center">
          <h2 className="font-bold text-4xl mb-20 text-transform: uppercase after:mx-auto after:mb-0 after:block after:mt-9 after:rounded-full after:h-1 after:w-24 after:-translate-y-1 after:bg-indigo-600 after:content-['']">
            Technical Projects
          </h2>
        </header>
        <div className="grid grid-cols-0 md:grid-cols-1 lg:grid-cols-2 gap-14 w-full">
          {projectItems}
        </div>
      </div>
    </div>
  );
};

export default Projects;
