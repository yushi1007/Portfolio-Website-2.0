import React from "react";
import Logo from "../assets/img/logo.png";
import { social } from "../data/data";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="py-8 mt-40 text-white flex justify-between items-center mx-auto px-6 md:px-6 lg:px-6 w-full"
    >
      <div className="container mx-auto px-6">
        <div className="pb-8 flex justify-center">
          <a href="/">
            <img className="h-14" src={Logo} alt="logo" />
          </a>
        </div>
        <div className="text-xs leading-loose tracking-wider text-gray-400 flex justify-center items-center text-center">
          <a
            className="transition-all duration-300 hover:text-indigo-300"
            href="https://github.com/yushi1007/Portfolio-2.0-Website"
            target="_blank"
            rel="noreferrer"
          >
            <p>Designed &amp; Created by Yu Shi</p>
            <p>Built with React &amp; Tailwind CSS</p>
          </a>
        </div>
        <div className="flex justify-center py-8">
          <div className="flex space-x-6 items-center justify-center">
            {social.map((item, index) => {
              const { href, icon, color, ariaLabel } = item;
              return (
                <a
                  aria-label={ariaLabel}
                  href={href}
                  key={index}
                  className={`text-base ${color} hover:text-white border-2 p-2 border-indigo-600 hover:bg-indigo-600 rounded-full transition-all duration-300`}
                >
                  {icon}
                </a>
              );
            })}
          </div>
        </div>
        <div className="flex justify-center items-center text-gray-400 text-center text-[10px] lg:text-xs leading-loose">
          <p>Copyright &copy; 2022 Yu Shi All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
