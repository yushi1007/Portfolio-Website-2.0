import React from "react";

const ProjectTag = ({ tag }) => {
  return (
    <span className="text-[8px] lg:text-xs md:text-xs rounded-full px-2 bg-indigo-600">
      {tag}
    </span>
  );
};

export default ProjectTag;
