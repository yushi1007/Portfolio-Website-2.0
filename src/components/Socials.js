import React from "react";
import { social } from "../data/data";

const Socials = () => {
  return (
      <ul className="flex space-x-6">
        {social.map((item, index) => {
          const { href, icon, color, ariaLabel } = item;
          return (
            <li key={index} className="flex justify-center items-center">
              <a
                aria-label={ariaLabel}
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
