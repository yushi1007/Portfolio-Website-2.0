import React from 'react'
import Tag from './Tag'
import { MdArrowForward } from 'react-icons/md'

const BlogCard = ({title, image, link, tags, pubDate}) => {
    
    const blogTags = tags.map((tag, index) => {
        return (
            <Tag 
            key={index}
            tag={tag}
            />
        )
    })

  return (
    <div className='cursor-pointer p-4 sm:w-1/2 md:w-2/4 lg:w-1/3'>
      <div className='hover:bg-indigo-600 h-full border border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
        <a href={link} target="_blank" rel="noreferrer">
          <img className='lg:h-72 md:h-48 h-72 w-full object-cover object-center hover:scale-105 transition-all duration-500' src={image} alt='blog'/>
        </a>
        <div className='p-6 hover:text-white transition duration-300 ease-in'>
          <h2 className='text-base font-medium text-indigo-300 mb-1'>{pubDate}</h2>
          <h1 className='text-1xl font-semibold mb-3'>{title}</h1>
          <div className='flex flex-wrap mb-3'>
            {blogTags}
          </div>
          <div>
            <a href={link} className="text-indigo-300 inline-flex items-center" target="_blank" rel="noreferrer">
              Read More
              <button className="animate-bounce w-4 h-4 ml-2">
                <MdArrowForward />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogCard;