import React from "react";
import { social } from "../data/data";

const Socials = () => {
  return (
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
  );
};

export default Socials;
