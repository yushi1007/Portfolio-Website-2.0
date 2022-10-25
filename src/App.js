import React from 'react';
import './styles/App.css'
import Header from './components/Header';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Blogs from './components/sections/Blogs';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Blogs />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
