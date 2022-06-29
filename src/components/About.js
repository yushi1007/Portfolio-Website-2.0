import React from 'react'
import { aboutMe } from '../data/data'
import Image from '../assets/img/mymemoji.jpg'

const About = () => {
  return (
    <div id='about' className='text-white mt-40 flex justify-between items-center mx-auto px-6 md:px-6 lg:px-6 w-full'>
      <div className='container mx-auto px-6'>
        <h2 class="subject-title uppercase text-4xl">About Me</h2>
        <div className='flex flex-col xl:flex-row gap-24'>
          <img className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-full' src={Image} alt=''/>
          <div className='flex felx-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
              <h2 className='text-2xl md:text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3'>Yu Shi</h2>
              <p className='mb-4 text-indigo-400'>Web Developer</p>
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