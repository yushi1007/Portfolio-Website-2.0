import React from 'react'
import { aboutMe } from '../data/data'
import Image from '../assets/img/mymemoji.jpg'

const About = () => {
  return (
    <div id='about' className='text-white mt-40 flex justify-between items-center mx-auto px-6 md:px-6 lg:px-6 w-full'>
      <div className='container mx-auto px-6'>
        <h2 class="text-3xl before:block before:mb-1 before:rounded-full before:h-2 before:w-16 before:-translate-y-2 before:bg-indigo-600 before:content-[''] mb-20">About Me</h2>
        <div className='flex flex-col xl:flex-row gap-24'>
          <div>
            <img src={Image} alt=''/>  
          </div>
          <div className='flex felx-col items-center lg:items-start text-center md:text-center lg:text-left'>
            <div className='flex flex-col'>
              <h2 className='text-2xl md:text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3'>Yu Shi</h2>
              <p className="mb-4 text-indigo-400 after:block after:mb-8 after:rounded-full after:h-1 after:w-16 after:translate-y-3 after:bg-indigo-600 after:content-['']">Web Developer</p>
              <ul className='space-y-8'>
              {aboutMe.map((item,index) => {
                return(
                  <li key={index}>
                    <p>{item.description}</p>
                  </li>            
                )
              })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About