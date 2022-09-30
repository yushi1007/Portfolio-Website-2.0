import React from 'react'
import Tag from './Tag'

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
    <>BlogCard</>
  )
}

export default BlogCard;