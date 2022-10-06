import React, { useState, useEffect, useRef } from 'react'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight, MdLiveTv } from 'react-icons/md'
import { DiGithubAlt } from 'react-icons/di'
import { CgWebsite } from 'react-icons/cg'
import { projects } from '../data/data'

//Reassigning value inside the component
let count = 0;
let slideInterval;
const Projects = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef();

  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  }

  const imageSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 4000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  }

  useEffect(() => {
    slideRef.current.addEventListener("animationend", removeAnimation);
    slideRef.current.addEventListener("mouseenter", pauseSlider);
    slideRef.current.addEventListener("mouseleave", imageSlider);
    imageSlider()
    return () => {
      pauseSlider()
    }
  }, [])

  const handleOnNextClick = () => {
    count = (count + 1) % projects.length;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };

  const handleOnPrevClick = () => {
    const projectsLength = projects.length;
    count = (currentIndex + projectsLength - 1) % projectsLength;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };

  const checkLink = (link) => {
    if (link.length > 0) {
      return true
    } else {
      return false
    }
  }

  return (
    <div id='projects' ref={slideRef} className='text-white flex justify-center items-center lg:bg-cover lg:bg-center lg:bg-no-repeat pt-40 overflow-hidden'>
      <div className='h-full w-full'>
        <header className='flex flex-col items-center text-center'>
          <h2 className="font-bold text-4xl mb-20 text-transform: uppercase after:mx-auto after:mb-0 after:block after:mt-9 after:rounded-full after:h-1 after:w-24 after:-translate-y-1 after:bg-indigo-600 after:content-['']">Technical Projects</h2>
        </header>
        <div className='h-screen select-none relative cursor-pointer group overflow-hidden'>
          <img src={projects[currentIndex].image} alt='project_images' className='absolute inset-0 object-cover w-full h-full group-hover:scale-105 transition-all duration-500' />
          <div className='absolute right-0 w-full h-full bg-gradient-to-t from-neutral-900'></div>
          <div className='px-14 lg:px-36 py-[24vh] absolute bottom-0 w-full max-w-[92vw] lg:max-w-none'>
            <div className='transition-transform duration-500 group-hover:-translate-y-full'>
              <h4 className='mt-1 text-3xl md:text-4xl lg:text-6xl font-display font-bold leading-[1.1] lg:leading-[1.1] mb-5'>
                {projects[currentIndex].name}
              </h4>
            </div>
            <div className='overflow-hidden -translate-y-full group-hover:translate-y-0 transition-transform duration-500 absolute lg:bottom-[30vh] md:bottom-[28vh] bottom-[27vh]'>
              <p className='text-sm md:text-base text-neutral-50/80 leading-relaxed max-w-prose mt-10 translate-y-full group-hover:-translate-y-[10%] transition-transform duration-500'>
                {projects[currentIndex].description}
              </p>
            </div>
            <div className='group-hover:translate-y-[100%] transition-transform duration-500'>
              <div className='flex flex-wrap lg:gap-3 md:gap-3 gap-2 border-b-[0.5px] border-neutral-50/60 pb-3'>
                {projects[currentIndex].tags.map((tag, index) => {
                  return (
                    <span key={index} className='text-xs lg:text-sm'>{tag}</span>
                  )
                })}
              </div>
              <div className='flex flex-wrap mt-4'>
                <div>
                  {checkLink(projects[currentIndex].repo) ? <a href={projects[currentIndex].repo} className='lg:text-base md:text-base text-[10px] transition-all duration-300 py-1 px-1 text-blue-dark bg-indigo-600 hover:bg-indigo-800 font-semibold flex items-center space-x-1 rounded' target="_blank" rel="noreferrer">
                    <DiGithubAlt size={20} />
                    <span>Repo</span>
                  </a> : null}
                </div>
                <div className='mr-3'>
                  {checkLink(projects[currentIndex].frontend) ? <a href={projects[currentIndex].frontend} className='lg:text-base md:text-base text-[10px] transition-all duration-300 py-1 px-1 text-blue-dark bg-indigo-600 hover:bg-indigo-800 font-semibold flex items-center space-x-1 rounded' target="_blank" rel="noreferrer">
                    <DiGithubAlt size={20} />
                    <span>Frontend</span>
                  </a> : null}
                </div>
                <div className='mr-3'>
                  {checkLink(projects[currentIndex].backend) ? <a href={projects[currentIndex].backend} className='lg:text-base md:text-base text-[10px] transition-all duration-300 py-1 px-1 text-blue-dark bg-indigo-600 hover:bg-indigo-800 font-semibold flex items-center space-x-1 rounded' target="_blank" rel="noreferrer">
                    <DiGithubAlt size={20} />
                    <span>Backend</span>
                  </a> : null}
                </div>
                <div className='mr-3'>
                  {checkLink(projects[currentIndex].live) ? <a href={projects[currentIndex].live} className='lg:text-base md:text-base text-[10px] transition-all duration-300 py-1 px-1 text-blue-dark bg-indigo-600 hover:bg-indigo-800 font-semibold flex items-center space-x-1 rounded' target="_blank" rel="noreferrer">
                    <CgWebsite size={20} />
                    <span>Live</span>
                  </a> : null}
                </div>
                <div className='mr-3'>
                  {checkLink(projects[currentIndex].video) ? <a href={projects[currentIndex].video} className='lg:text-base md:text-base text-[10px] transition-all duration-300 py-1 px-1 text-blue-dark bg-indigo-600 hover:bg-indigo-800 font-semibold flex items-center space-x-1 rounded' target="_blank" rel="noreferrer">
                    <MdLiveTv size={20} />
                    <span>Video</span>
                  </a> : null}
                </div>
              </div>
            </div>
          </div>
          <div className='absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center'>
            <button onClick={handleOnPrevClick} className='bg-black text-white p-0.5 md:p-2 lg:p-2 rounded-full bg-opacity-40 cursor-pointer hover:bg-opacity-60 transition' >
              <MdOutlineKeyboardArrowLeft size={35} />
            </button>
            <button onClick={handleOnNextClick} className='bg-black text-white p-0.5 md:p-2 lg:p-2 rounded-full bg-opacity-40 cursor-pointer hover:bg-opacity-60 transition' >
              <MdOutlineKeyboardArrowRight size={35} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;