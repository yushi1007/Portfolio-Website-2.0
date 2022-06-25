import './styles/App.css'
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <div className='relative'>
      <Header />
      <Home />
      <About />
      <div style={{ height: '2000px' }}></div>
    </div>
  );
}

export default App;
