import React from "react";
import { Link } from "react-scroll";
import Bounce from "react-reveal/Bounce";
import { navigation } from "../data/data";

const Navbar = () => {
  return (
    <div>
      <Bounce top cascade duration={800}>
        <ul className="navlink flex space-x-12 capitalize text-[15px]">
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
              href=""
              className="transition-all duration-300 border-2 px-4 py-2 hover:bg-indigo-600 text-indigo-300 hover:text-white border-indigo-600 rounded"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
      </Bounce>
    </div>
  );
};

export default Navbar;
