import './styles/App.css'
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Blogs from './components/Blogs';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Blogs />
    </div>
  );
}

export default App;
