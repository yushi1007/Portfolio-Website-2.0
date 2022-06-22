import React, {useState, useEffect} from 'react';
import Navbar from './Navbar';
import MobileNavbar from './MobileNavbar';
import Socials from './Socials';
import { Link } from 'react-scroll';

const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
        return window.scrollY > 50 ? setBg(true) : setBg(false);
    })
  })
  return (
    <header className={`${bg ? 'h-16' : 'h-24'} flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}>
        <div className='container mx-auto h-full flex items-center justify-between px-6'>
            <Link 
                to="about" 
                activeClass='active' 
                spy={true} 
                smooth={true} 
                duration={500}
                offset={-70}
                className='cursor-pointer' 
            >
            <h1 className='w-full text-base font-bold'>Yu Shi</h1>
            </Link>
            <div className='hidden lg:block'>
                <Navbar />
            </div>
            <div className='hidden lg:block'>
                <Socials />
            </div>
            <div className='lg:hidden'>
                <MobileNavbar />
            </div>
        </div>
    </header>
  )
}

export default Header