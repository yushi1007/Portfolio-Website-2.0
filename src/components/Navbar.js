import React from "react";
import { Link } from "react-scroll";
import { navigation } from "../data";

const Navbar = () => {

  return (
    <div>
      <ul className="flex space-x-12 capitalize text-[15px]">
        {navigation.map((item, index) => {
          return(
            <li 
            className="text-white text-base font-semibold hover:text-sky-400 cursor-pointer" 
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
        <li className="text-white text-base font-semibold  cursor-pointer">
          <Link 
                to="contact" 
                activeClass='active' 
                spy={true} 
                smooth={true} 
                duration={500}
                offset={-70}
                className='transition-all duration-300 px-6 py-2 bg-indigo-600 hover:bg-indigo-800 rounded-bl-lg rounded-tr-lg' 
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar