import './styles/App.css'
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className='relative'>
      <Header />
      <Home />
      <div style={{ height: '2000px' }}></div>
    </div>
  );
}

export default App;
