import React from "react";
import { skillImages } from "../../data/data";

const Skills = () => {
  return (
    <div
      id="skills"
      className="bg-gray-800 text-white mt-40 flex justify-between items-center mx-auto px-6 md:px-6 lg:px-6 w-full lg:py-12 md:10 py-8"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-8 md:grid-flow-row lg:grid-flow-row">
          {skillImages.map((skillImage, index) => {
            return (
              <div className="flex items-center justify-center" key={index}>
                <img
                  className="h-8 md:h-16 lg:h-20"
                  src={skillImage.image}
                  alt="skill png"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
