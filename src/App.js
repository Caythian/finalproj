import './App.css';
import Menu from './Components/Menu';
import Footer from './Components/Footer';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Menu/>
      <Footer/>
    </div>
  );
}

export default App;
