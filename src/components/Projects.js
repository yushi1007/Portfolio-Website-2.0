import React, { useState, useEffect, useRef} from 'react'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import ProjectImage1 from '../assets/img/travelatr.png'
import ProjectImage2 from '../assets/img/fotoset.png'
import ProjectImage3 from '../assets/img/quickpix.png'

const projectImages = [
  ProjectImage1,
  ProjectImage2,
  ProjectImage3,
]

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
    }, 3000);
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
    count = (count + 1) % projectImages.length;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };

  const handleOnPrevClick = () => {
    const imagesLength = projectImages.length;
    count = (currentIndex + imagesLength - 1) % imagesLength;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };

  return (
    <div id='projects' ref={slideRef} className='text-white mt-40 flex justify-between items-center mx-auto px-6 md:px-6 lg:px-6 w-full'>
      <div className='container mx-auto px-6'>
        <header className='flex flex-col items-center text-center'>
          <h2 className="font-medium text-4xl mb-20 text-transform: uppercase after:mx-auto after:mb-0 after:block after:mt-9 after:rounded-full after:h-1 after:w-24 after:-translate-y-1 after:bg-indigo-600 after:content-['']">Technical Projects</h2>
        </header>
        <div className='w-full select-none relative cursor-pointer'>
          <div className='aspect-w-16 aspect-h-9'>
            <img src={projectImages[currentIndex]} alt='project_images' />
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

export default Projects