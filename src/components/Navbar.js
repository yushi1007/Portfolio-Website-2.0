import React from "react";
import { Link } from "react-scroll";
import { navigation } from "../data";
import { HiOutlineMenuAlt2 } from 'react-icons/hi'

const Navbar = () => {

  return (
    <div>
      <ul className="flex space-x-8 capitalize text-[15px]">
        {navigation.map((item, index) => {
          return(
            <li 
            className="text-white hover:bg-sky-600 cursor-pointer" 
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
      </ul>
    </div>
  )
}

export default Navbar