import React, { useState, useEffect } from "react";
import Socials from "./Socials";
import { Link } from "react-scroll";
import { navigation } from "../data/data";
import Resume from '../assets/resume/Resume.pdf'

const Header = () => {
  const [bg, setBg] = useState(false);
  const [open, setOpen] = useState(false);

  const handleNavbarClick = () => {
    setOpen((open) => !open);
  };

  const closeNavbar = () => {
    setOpen(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 || open ? setBg(true) : setBg(false);
    });
  });

  return (
    <div id="navbar" className="navbar-box">
      <div
        className={`
        ${open ? "navbar active" : "navbar"} 
        ${
          bg || open
            ? "backdrop-filter backdrop-blur-lg bg-opacity-30 h-16 shadow-md shadow-indigo-200/10"
            : "h-24"
        } 
         w-full h-full lg:flex lg:items-center lg:justify-between items-center`}
      >
        <div className="list-container container mx-auto flex h-full items-center justify-between px-6">
          <div className="logo flex items-center h-[64px]">
            <Link
              to="about"
              activeClass="active"
              spy={true}
              smooth={true}
              duration={700}
            >
              <h3 className="">Yu Shi</h3>
            </Link>
          </div>
          <div className="link-container">
            <ul className="navlink text-white flex justify-center items-center lg:space-x-12 capitalize text-[15px]">
              {navigation.map((item, index) => {
                return (
                  <li
                    className="
                          relative 
                          text-base 
                          font-normal 
                          text-white 
                          hover:text-indigo-300 
                          cursor-pointer 
                          before:content-[''] 
                          before:absolute 
                          before:block 
                          before:w-full 
                          before:h-[2px] 
                          before:left-0 
                          before:-bottom-1
                          before:bg-indigo-300
                          before:hover:scale-x-100
                          before:scale-x-0 
                          before:origin-top-left
                          before:transition 
                          before:ease-in-out 
                          before:duration-300"
                    key={index}
                  >
                    <Link
                      onClick={closeNavbar}
                      to={item.href}
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      duration={700}
                      offset={-150}
                      className="transition-all duration-300"
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
              <li className="text-white text-base font-normal cursor-pointer">
                <a
                  href={Resume}
                  className="transition-all duration-300 border-2 px-4 py-2 hover:bg-indigo-600 text-indigo-300 hover:text-white border-indigo-600 rounded"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
          <div
            className={open ? "hamburger active" : "hamburger"}
            onClick={handleNavbarClick}
          >
            <ul>
              <li className="line"></li>
              <li className="line"></li>
              <li className="line"></li>
            </ul>
          </div>
          <div className="social lg:block hidden">
            <Socials />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;