import React from "react";
import ProjectTag from "./ProjectTag";
import { Fade } from "react-awesome-reveal";

const ProjectCard = ({ projectItem, projectTags }) => {
  const tagItems = projectTags.map((tag, index) => {
    return <ProjectTag key={index} tag={tag} />;
  });

  const checkLink = (link) => {
    if (link.length > 0) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <Fade direction="up" cascade triggerOnce="true">
      <div className="relative overflow-hidden rounded-lg md:rounded-lg lg:rounded-lg shadow-lg shadow-indigo-200/20 cursor-pointer group">
        <img
          src={projectItem.image}
          alt="project_images"
          className="object-cover w-full h-[450px] group-hover:scale-110 transition-all duration-500"
        />
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-t from-neutral-900"></div>
        <div className="absolute bottom-3 left-0 lg:px-6 md:px-6 px-4 py-4 w-full">
          <h1 className="mb-5 text-3xl lg:text-4xl md:text-4l font-semibold tracking-tight">
            {projectItem.name}
          </h1>
          <p className="mb-5 text-[13px] leading-normal">
            {projectItem.description}
          </p>
          <div className="">
            <div className="flex flex-wrap lg:gap-1 md:gap-3 gap-2 border-b-[0.5px] border-neutral-50/60 pb-3">
              {tagItems}
            </div>
            <div className="flex flex-gap mt-4">
              <div>
                {checkLink(projectItem.repo) ? (
                  <a
                    href={projectItem.repo}
                    className="lg:text-base md:text-base text-[10px] transition-all duration-300 border-2 px-3 py-2 lg:px-4 lg:py-2 md:px-4 md:py-2 hover:bg-indigo-600 text-indigo-300 hover:text-white border-indigo-600 rounded font-semibold flex items-center space-x-1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>Repo</span>
                  </a>
                ) : null}
              </div>
              <div className="mr-3">
                {checkLink(projectItem.frontend) ? (
                  <a
                    href={projectItem.frontend}
                    className="lg:text-base md:text-base text-[10px] transition-all duration-300 border-2 px-3 py-2 lg:px-4 lg:py-2 md:px-4 md:py-2 hover:bg-indigo-600 text-indigo-300 hover:text-white border-indigo-600 rounded font-semibold flex items-center space-x-1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>Frontend</span>
                  </a>
                ) : null}
              </div>
              <div className="mr-3">
                {checkLink(projectItem.backend) ? (
                  <a
                    href={projectItem.backend}
                    className="lg:text-base md:text-base text-[10px] transition-all duration-300 border-2 px-3 py-2 lg:px-4 lg:py-2 md:px-4 md:py-2 hover:bg-indigo-600 text-indigo-300 hover:text-white border-indigo-600 rounded font-semibold flex items-center space-x-1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>Backend</span>
                  </a>
                ) : null}
              </div>
              <div className="mr-3">
                {checkLink(projectItem.live) ? (
                  <a
                    href={projectItem.live}
                    className="lg:text-base md:text-base text-[10px] transition-all duration-300 border-2 px-3 py-2 lg:px-4 lg:py-2 md:px-4 md:py-2 hover:bg-indigo-600 text-indigo-300 hover:text-white border-indigo-600 rounded font-semibold flex items-center space-x-1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>Live</span>
                  </a>
                ) : null}
              </div>
              <div className="mr-3">
                {checkLink(projectItem.video) ? (
                  <a
                    href={projectItem.video}
                    className="lg:text-base md:text-base text-[10px] transition-all duration-300 border-2 px-3 py-2 lg:px-4 lg:py-2 md:px-4 md:py-2 hover:bg-indigo-600 text-indigo-300 hover:text-white border-indigo-600 rounded font-semibold flex items-center space-x-1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>Video</span>
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default ProjectCard;
