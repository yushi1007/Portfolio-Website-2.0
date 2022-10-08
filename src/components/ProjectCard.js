import React from "react";
import ProjectTag from "./ProjectTag";
import { MdLiveTv } from "react-icons/md";
import { DiGithubAlt } from "react-icons/di";
import { CgWebsite } from "react-icons/cg";

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
    <div className="relative overflow-hidden rounded-lg md:rounded-lg lg:rounded-lg shadow-lg shadow-indigo-200/20 cursor-pointer">
      <img
        src={projectItem.image}
        alt="project_images"
        className="object-cover w-full h-[450px] transition-all duration-500"
      />
      <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-t from-neutral-900"></div>
      <div className="absolute bottom-3 left-0 px-6 py-4">
        <h4 className="mb-5 text-4xl font-semibold tracking-tight">{projectItem.name}</h4>
        <p className="mb-5 text-[13px] leading-normal">{projectItem.description}</p>
        <div className="">
          <div className="flex flex-wrap lg:gap-1 md:gap-3 gap-2 border-b-[0.5px] border-neutral-50/60 pb-3">
            {tagItems}
          </div>
          <div className="flex flex-gap mt-4">
            <div>
              {checkLink(projectItem.repo) ? (
                <a
                  href={projectItem.repo}
                  className="lg:text-base md:text-base text-[10px] transition-all duration-300 border-2 px-4 py-2 hover:bg-indigo-600 text-indigo-300 hover:text-white border-indigo-600 rounded font-semibold flex items-center space-x-1"
                  target="_blank"
                  rel="noreferrer"
                >
                  {/* <span className="lg:text-xl md:text-xl text-sm">
                    <DiGithubAlt />
                  </span> */}
                  <span>Repo</span>
                </a>
              ) : null}
            </div>
            <div className="mr-3">
              {checkLink(projectItem.frontend) ? (
                <a
                  href={projectItem.frontend}
                  className="lg:text-base md:text-base text-[10px] transition-all duration-300 border-2 px-4 py-2 hover:bg-indigo-600 text-indigo-300 hover:text-white border-indigo-600 rounded font-semibold flex items-center space-x-1"
                  target="_blank"
                  rel="noreferrer"
                >
                  {/* <span className="lg:text-xl md:text-xl text-sm">
                    <DiGithubAlt />
                  </span> */}
                  <span>Frontend</span>
                </a>
              ) : null}
            </div>
            <div className="mr-3">
              {checkLink(projectItem.backend) ? (
                <a
                  href={projectItem.backend}
                  className="lg:text-base md:text-base text-[10px] transition-all duration-300 border-2 px-4 py-2 hover:bg-indigo-600 text-indigo-300 hover:text-white border-indigo-600 rounded font-semibold flex items-center space-x-1"
                  target="_blank"
                  rel="noreferrer"
                >
                  {/* <span className="lg:text-xl md:text-xl text-sm">
                    <DiGithubAlt />
                  </span> */}
                  <span>Backend</span>
                </a>
              ) : null}
            </div>
            <div className="mr-3">
              {checkLink(projectItem.live) ? (
                <a
                  href={projectItem.live}
                  className="lg:text-base md:text-base text-[10px] transition-all duration-300 border-2 px-4 py-2 hover:bg-indigo-600 text-indigo-300 hover:text-white border-indigo-600 rounded font-semibold flex items-center space-x-1"
                  target="_blank"
                  rel="noreferrer"
                >
                  {/* <span className="lg:text-xl md:text-xl text-sm">
                    <CgWebsite />
                  </span> */}
                  <span>Live</span>
                </a>
              ) : null}
            </div>
            <div className="mr-3">
              {checkLink(projectItem.video) ? (
                <a
                  href={projectItem.video}
                  className="lg:text-base md:text-base text-[10px] transition-all duration-300 border-2 px-4 py-2 hover:bg-indigo-600 text-indigo-300 hover:text-white border-indigo-600 rounded font-semibold flex items-center space-x-1"
                  target="_blank"
                  rel="noreferrer"
                >
                  {/* <span className="lg:text-xl md:text-xl text-sm">
                    <MdLiveTv />
                  </span> */}
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
