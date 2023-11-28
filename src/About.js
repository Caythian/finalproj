import './App.css';
import Menu from './Components/Menu';
import Footer from './Components/Footer';
import { Routes, Route } from 'react-router-dom';

function About(){
    return(
        <div>
        <Menu/>
        {/* <Placeholder/> */}
        <div className="title">About: the making of this website</div>
        <div className="subtitle">shdf</div>
        <div className="body">shkf</div>
        </div>
    )
}
export default About;