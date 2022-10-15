import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Socials from "./Socials";
import { Link } from "react-scroll";
import { RiMenu4Fill, RiCloseFill } from "react-icons/ri";
import Bounce from "react-reveal/Bounce";
import MobileNavbar from "./MobileNavbar";
import { navigation } from "../data/data";

const Header = () => {
  const [bg, setBg] = useState(false);
  const [open, setOpen] = useState(false);

  const handleNavbarClick = () => {
    setOpen((open) => !open);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  return (
    <div id="navbar" className="navbar-box">
      <div
        className={`${
          open ? "navbar active" : "navbar"
        } w-full h-full lg:flex lg:items-center lg:justify-between items-center backdrop-filter backdrop-blur-lg bg-opacity-30 border-b-[0.5px] border-gray-600`}
      >
        <div className="list-container container mx-auto flex h-full items-center justify-between px-6">
            <div className="logo flex items-center h-[50px]">
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
          <Bounce top cascade duration={800}>
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
            <div className="social lg:block hidden">
              <Socials />
            </div>
          <div
            className={open ? "hamburger active" : "hamburger"}
            onClick={handleNavbarClick}
          >
            <li className="line"></li>
            <li className="line"></li>
            <li className="line"></li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

// <header
//   className={`${
//     bg
//       ? "backdrop-filter backdrop-blur-lg bg-opacity-30 border-b-[0.5px] h-16"
//       : "h-24"
//   } flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300 border-gray-600`}
// >
//   <div className="container mx-auto h-full flex items-center justify-between px-6">
//     <Link
//       to="about"
//       activeClass="active"
//       spy={true}
//       smooth={true}
//       duration={500}
//       offset={-70}
//       className="cursor-pointer"
//     >
//       <Bounce top cascade duration={800}>
//         <h1 className="w-full text-base font-semibold uppercase">Yu Shi</h1>
//       </Bounce>
//     </Link>
//     <div className="hidden lg:block">
//       <Navbar />
//     </div>
//     <div className="hidden lg:block">
//       <Socials />
//     </div>
//     <div className="lg:hidden">
//       <MobileNavbar />
//     </div>
//   </div>
// </header>
