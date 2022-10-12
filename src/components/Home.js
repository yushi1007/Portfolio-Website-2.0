import React from "react";
import Fade from "react-reveal/Fade";
import TypeWriter from "./TypeWriter";
import Background from "../assets/img/background.png";
import { Link } from "react-scroll";
import ParticlesBackground from "./ParticlesBackground";

const Home = () => {
  return (
    <div
      id="home"
      className="text-white lg:h-[100vh] md:h-[100vh] h-[100vh] flex items-center lg:bg-cover lg:bg-center lg:bg-no-repeat lg:py-0 overflow-hidden"
    >
      <div
        id="background"
        className="absolute w-full h-screen bg-no-repeat bg-cover min-w-[2100px] min-h-[1500px] -right-10 -z-10 lg:block hidden"
      ></div>
      <div
        id="tablet-background"
        className="absolute w-full h-screen bg-no-repeat bg-cover min-w-[2100px] min-h-[1500px] -right-10 -z-10 lg:hidden md:block hidden"
      ></div>
      <div
        id="mobile-background"
        className="absolute w-full h-screen bg-no-repeat bg-cover min-w-[2100px] min-h-[1500px] -right-10 -z-10 lg:hidden md:hidden block"
      ></div>
      <div className="relative container mx-auto h-full px-6">
        <div className="flex items-center h-full pt-8">
          <div className="flex-1 flex flex-col mt-12 items-center lg:items-start">
            <Fade delay={1000} bottom cascade>
              <div>
                <h1 className="font-bold leading-normal md:leading-normal lg:leading-normal text-5xl md:text-6xl lg:text-7xl text-center">
                  Hi There 👋 ,
                </h1>
              </div>
            </Fade>
            <Fade delay={1200} bottom cascade>
              <div>
                <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl text-center">
                  I'm <span className="text-indigo-600">Yu</span>
                </h1>
              </div>
            </Fade>
            <Fade delay={1400} bottom cascade>
              <div>
                <h1 className="leading-10 md:leading-loose lg:leading-loose font-semibold text-2xl md:text-2xl lg:text-4xl text-center mt-3">
                  I am a <TypeWriter />
                </h1>
              </div>
            </Fade>
            <Fade delay={1600} bottom cascade>
              <div>
                <div className="w-full flex justify-center md:justify-center lg:justify-start">
                  <Link
                    to="about"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    duration={700}
                    offset={-150}
                  >
                    <button className="transition-all duration-300 animate-float px-5 py-4 border-2 border-indigo-600 hover:bg-indigo-600 font-bold mt-12 flex items-center space-x-3 rounded">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path
                            fillRule="evenodd"
                            d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span>DISCOVER MORE</span>
                    </button>
                  </Link>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
