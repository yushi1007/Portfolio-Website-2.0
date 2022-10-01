import React from 'react'

const Tag = ({ tag }) => {
  return (
    <div className=''>
      <span className='text-xs inline-block border border-indigo-300 rounded-full px-2 py-0.25 mr-1'>{tag}</span>
    </div>
  )
}

export default Tag;