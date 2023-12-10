import React from 'react';
import '../Components/Column.css';
import '../App.css';
import { Link } from 'react-router-dom';
import totkimg2 from '../Images/totkimg2.jpeg';
import totkimg3 from '../Images/totkimg3.jpeg';
import totkimg4 from '../Images/totkimg4.jpeg';
import totkimg8 from '../Images/totkimg8.jpeg';

function Column() {
  return (
    <div className="container">
      <div className="row">
        <div className="column">
          <div className="h1">Immersive Design: Creating A Realistic Fantasy</div>
          <div className="p1">Learn how the game developers create a sense of reality in environmental design, while the terrain still serves the game's storytelling. </div>          
          <img src={totkimg8} alt="on horseback"></img>
          <Link to="/gamedesign" className="button1">Click Here</Link> 
        </div>
        <div className="column">
          <div className="h1">Escapism: A Product of Immersive Gaming</div>
          <div className="p1">Explore the notion of escapism in gaming, and the potential of utilizing the immersive experience in gaming.</div>
          <img src={totkimg3} alt="sky islands"></img>
          <Link to="/escapism" className="button1">Click Here</Link> 
        </div>
        <div className="column">
          <div className="h1">Future of Gaming</div>
          <div className="p1">Discover the potentiality of immersive gaming and its application beyond entertainment in the future.</div>
          <img src={totkimg4} alt="Kakoriko Village"></img>
          <Link to="/more" className="button1">Click Here</Link> 
        </div>
        <div className="column">
          <div className="h1">About</div>
          <div className="p1">Learn about why the website exists and give feedback. </div>
          <img src={totkimg2} alt="cliff sunset"></img>
          <Link to="/about" className="button1">Click Here</Link> 
        </div>
      </div>
    </div>
  );
}

export default Column;
