import React from 'react'
import {
    FiInstagram,
    FiGithub,
  
  } from 'react-icons/fi';
import { FaLinkedin, FaMediumM, FaGithubAlt } from 'react-icons/fa'

const Socials = () => {
  return (
    <ul className='flex space-x-6'>
        <li className='flex justify-center items-center'>
            <a className='text-base text-sky-500' href="https://www.linkedin.com/in/yushi95" target="_blank" rel="noreferrer">
                <FaLinkedin />
            </a>
        </li>
        <li className='flex justify-center items-center'>
            <a className='text-base text-pink-600' href="https://www.instagram.com/yushi.95" target="_blank" rel="noreferrer">
                <FiInstagram />
            </a>
        </li>
        <li className='flex justify-center items-center'>
            <a className='text-base' href="https://github.com/yushi1007" target="_blank" rel="noreferrer">
                <FiGithub />
            </a>
        </li>
        <li className='flex justify-center items-center'>
            <a className='text-base' href="https://yushi95.medium.com/" target="_blank" rel="noreferrer">
                <FaMediumM />
            </a>
        </li>
    </ul>
  )
}

export default Socials