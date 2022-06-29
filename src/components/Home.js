import React from 'react'
import ParticlesBackground from './ParticlesBackground'
import TypeWriter from './TypeWriter'

const Home = () => {
  return (
    <div id="home" className='text-white lg:h-[100vh] flex items-center lg:bg-cover lg:bg-center lg:bg-no-repeat lg:py-0 overflow-hidden'>
      <ParticlesBackground id="tsparticles" />
      <div className='container mx-auto h-full px-6'>
        <div className='flex items-center h-full pt-8'>
          <div className='flex-1 flex flex-col mt-12 items-center lg:items-start'>
            <h1 className='font-bold leading-normal md:leading-normal lg:leading-normal text-5xl md:text-6xl lg:text-7xl text-center'>Hi There 👋 ,</h1>
            <h1 className='font-bold text-5xl md:text-6xl lg:text-7xl text-center'>I'm <span className='text-indigo-600'>Yu</span></h1>
            <h1 className='leading-10 md:leading-loose lg:leading-loose text-2xl md:text-2xl lg:text-4xl text-center mt-3'>
              I am a <TypeWriter />
            </h1>
            <div className='w-full flex justify-center md:justify-center lg:justify-start'>
              <button className='transition-all duration-300 animate-float px-5 py-4 bg-indigo-600 hover:bg-indigo-800 font-bold mt-12 flex items-center space-x-3 rounded-lg'>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
                  </svg>
                </div>
                <span>DISCOVER MORE</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home