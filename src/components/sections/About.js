import React from "react";
import { aboutMe, skills } from "../../data/data";

const About = () => {
  return (
    <div
      id="about"
      className="text-white mt-40 flex justify-between items-center mx-auto px-6 md:px-6 lg:px-6 w-full"
    >
      <div className="container mx-auto lg:px-6 md:px-6">
        <header className="flex flex-col items-center text-center">
          <h2 className="font-bold text-4xl mb-20 text-transform: uppercase after:mx-auto after:mb-0 after:block after:mt-9 after:rounded-full after:h-1 after:w-24 after:-translate-y-1 after:bg-indigo-600 after:content-['']">
            About Me
          </h2>
        </header>
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-2/5 flex items-center justify-center">
            <div className="w-2/3 flex justify-center mb-16">
              <div className="profile_img"></div>
            </div>
          </div>
          <div className="w-full lg:w-6/12 order-last">
            <ul className="space-y-8">
              {aboutMe.map((item, index) => {
                return (
                  <li key={index}>
                    <p className="text-gray-400 leading-relaxed mb-3 font-normal">
                      {item.description}
                    </p>
                  </li>
                );
              })}
            </ul>
            <ul className="flex flex-wrap text-gray-400">
              {skills.map((skill, index) => {
                return (
                  <p key={index} className="w-1/2 font-medium mb-2.5">
                    <span className="before:content-['▸'] before:mr-3 before:text-indigo-600"></span>
                    {skill.name}
                  </p>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
