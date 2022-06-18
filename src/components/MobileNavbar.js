import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { navigation } from '../data'
import { motion } from 'framer-motion'
import { RiMenu4Fill, RiCloseFill } from 'react-icons/ri'

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false); 

  const circleVariants = {
    hidden: {
      scale: 0
    },
    visible: {
      scale: 180,
      transition: {
        type: 'spring',
        stiffness: 160,
        damping: 60,
      },
    },
  };

  const ulVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
  };

  return (
    <div className='relative'>
      <div 
        onClick={() => setIsOpen(true)}
        className='cursor-pointer text-white'
        >
        <RiMenu4Fill className='w-8 h-8'/>
      </div>
      <motion.div 
        variants={circleVariants} 
        initial='hidden' 
        animate={isOpen ? 'visible' : 'hidden'}
        className='w-4 h-4 rounded-full fixed top-0 right-0 bg-slate-800'
        >
      </motion.div>
      <motion.ul 
        variants={ulVariants} 
        initial='hidden' 
        animate={isOpen ? 'visible' : ''}
        className={`${isOpen ? 'right-0' : '-right-full'} fixed top-0 bottom-0 w-full flex flex-col justify-center items-center transition-all duration-300 overflow-hidden`}
      >
        <div 
          onClick={() => setIsOpen(false)}
          className='cursor-pointer absolute top-8 right-8'>
          <RiCloseFill className='w-8 h-8'/>
        </div>
        {navigation.map((item, index) => {
            return (
            <li key={index} className='mb-8 font-semibold hover:text-sky-400'>
              <Link 
               to={item.href} 
               smooth={true} 
               duration={500} 
               offset={-70} 
               className='text-xl cursor-pointer capitalize'
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
      </motion.ul>
    </div>
  )
}

export default MobileNavbar