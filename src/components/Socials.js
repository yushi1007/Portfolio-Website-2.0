import React from "react";
import { social } from "../data/data";
import Bounce from "react-reveal/Bounce";

const Socials = () => {
  return (
    <Bounce top cascade duration={800}>
      <ul className="flex space-x-6">
        {social.map((item, index) => {
          const { href, icon, color } = item;
          return (
            <li key={index} className="flex justify-center items-center">
              <a
                href={href}
                className={`text-base ${color}`}
                target="_blank"
                rel="noreferrer"
              >
                {icon}
              </a>
            </li>
          );
        })}
      </ul>
    </Bounce>
  );
};

export default Socials;
