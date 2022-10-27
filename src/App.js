import React, { useState, useEffect } from "react";
import "./styles/App.css";
import Loader from "./components/Loader";
import Header from "./components/Header";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Blogs from "./components/sections/Blogs";
import Contact from "./components/sections/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const delay = 1.5;

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => setLoading(true), delay * 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [loading]);

  return (
    <div className="app">
      {!loading ? (
        <Loader />
      ) : (
        <div className="portfolio">
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
      )}
    </div>
  );
};

export default App;
