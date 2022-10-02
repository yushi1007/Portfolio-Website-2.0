import React from "react";
import { Link } from "react-scroll";
import Bounce from 'react-reveal/Bounce';
import { navigation } from "../data/data";

const Navbar = () => {
  return (
    <div>
      <Bounce top cascade duration={800}>
        <ul className="flex space-x-12 capitalize text-[15px]">
          {navigation.map((item, index) => {
            return(
              <li 
              className="text-white text-base font-semibold hover:text-indigo-400 cursor-pointer" 
              key={index}
              >
                <Link 
                  to={item.href} 
                  activeClass='active' 
                  spy={true} 
                  smooth={true} 
                  duration={500}
                  offset={-70}
                  className='transition-all duration-300'
                >
                  {item.name}
                </Link>
              </li>
            )
          })}
          <li className="text-white text-base font-semibold cursor-pointer">
            <Link 
                  to="contact" 
                  activeClass='active' 
                  spy={true} 
                  smooth={true} 
                  duration={500}
                  offset={-70}
                  className='transition-all duration-300 border-2 px-4 py-2 hover:bg-indigo-600 text-indigo-300 hover:text-white border-indigo-600 rounded' 
            >
              Contact
            </Link>
          </li>
        </ul>
      </Bounce>
    </div>
  )
}

export default Navbar;