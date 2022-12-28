import React, { useState, useEffect } from "react";
import "./styles/App.css";
import Loader from "./components/Loader";
import ScrollToTop from "./components/ScrollToTop";
import { Header, Home, About, Projects, Skills, Blogs, Contact, Footer } from "./container"

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
