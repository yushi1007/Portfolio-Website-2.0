import React from "react";
import ProjectTag from "./ProjectTag";
import { MdLiveTv } from 'react-icons/md'
import { DiGithubAlt } from 'react-icons/di'
import { CgWebsite } from 'react-icons/cg'

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
    <div className="h-screen select-none relative cursor-pointer group overflow-hidden">
      <img
        src={projectItem.image}
        alt="project_images"
        className="absolute inset-0 object-cover w-full h-full group-hover:scale-105 transition-all duration-500"
      />
      <div className="absolute right-0 w-full h-full bg-gradient-to-t from-neutral-900"></div>
      <div className="px-14 lg:px-36 py-[24vh] absolute bottom-0 w-full max-w-[92vw] lg:max-w-none">
        <div className="transition-transform duration-500 group-hover:-translate-y-full">
          <h4 className="mt-1 text-3xl md:text-4xl lg:text-6xl font-display font-bold leading-[1.1] lg:leading-[1.1] mb-5">
            {projectItem.name}
          </h4>
        </div>
        <div className="overflow-hidden -translate-y-full group-hover:translate-y-0 transition-transform duration-500 absolute lg:bottom-[30vh] md:bottom-[28vh] bottom-[27vh]">
          <p className="text-sm md:text-base text-neutral-50/80 leading-relaxed max-w-prose mt-10 translate-y-full group-hover:-translate-y-[10%] transition-transform duration-500">
            {projectItem.description}
          </p>
        </div>
        <div className="group-hover:translate-y-[100%] transition-transform duration-500">
          <div className="flex flex-wrap lg:gap-3 md:gap-3 gap-2 border-b-[0.5px] border-neutral-50/60 pb-3">
            {tagItems}
          </div>
          <div className="flex flex-gap mt-4">
            <div>
              {checkLink(projectItem.repo) ? (
                <a
                  href={projectItem.repo}
                  className="lg:text-base md:text-base text-[10px] transition-all duration-300 py-1 px-1 text-blue-dark bg-indigo-600 hover:bg-indigo-800 font-semibold flex items-center space-x-1 rounded"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="lg:text-xl md:text-xl text-sm">
                    <DiGithubAlt />
                  </span>
                  <span>Repo</span>
                </a>
              ) : null}
            </div>
            <div className="mr-3">
              {checkLink(projectItem.frontend) ? (
                <a
                  href={projectItem.frontend}
                  className="lg:text-base md:text-base text-[10px] transition-all duration-300 py-1 px-1 text-blue-dark bg-indigo-600 hover:bg-indigo-800 font-semibold flex items-center space-x-1 rounded"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="lg:text-xl md:text-xl text-sm">
                    <DiGithubAlt />
                  </span>
                  <span>Frontend</span>
                </a>
              ) : null}
            </div>
            <div className="mr-3">
              {checkLink(projectItem.backend) ? (
                <a
                  href={projectItem.backend}
                  className="lg:text-base md:text-base text-[10px] transition-all duration-300 py-1 px-1 text-blue-dark bg-indigo-600 hover:bg-indigo-800 font-semibold flex items-center space-x-1 rounded"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="lg:text-xl md:text-xl text-sm">
                    <DiGithubAlt />
                  </span>
                  <span>Backend</span>
                </a>
              ) : null}
            </div>
            <div className="mr-3">
              {checkLink(projectItem.live) ? (
                <a
                  href={projectItem.live}
                  className="lg:text-base md:text-base text-[10px] transition-all duration-300 py-1 px-1 text-blue-dark bg-indigo-600 hover:bg-indigo-800 font-semibold flex items-center space-x-1 rounded"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="lg:text-xl md:text-xl text-sm">
                    <CgWebsite />
                  </span>
                  <span>Live</span>
                </a>
              ) : null}
            </div>
            <div className="mr-3">
              {checkLink(projectItem.video) ? (
                <a
                  href={projectItem.video}
                  className="lg:text-base md:text-base text-[10px] transition-all duration-300 py-1 px-1 text-blue-dark bg-indigo-600 hover:bg-indigo-800 font-semibold flex items-center space-x-1 rounded"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="lg:text-xl md:text-xl text-sm">
                    <MdLiveTv />
                  </span>
                  <span>Video</span>
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
