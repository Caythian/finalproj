import React from 'react';
import '../App.css';
import '../Components/Column.css';
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
          <h3>Realism</h3>
          <p>Learn how the game developers create a sense of reality in environmental design. </p>          
          <img src={totkimg8} alt="on horseback"></img>
          <Link to="/realism" className="button">Click Here</Link> 
        </div>
        <div className="column">
          <h3>Fantasy</h3>
          <p>Learn how the color choice in design contributes to the creation of a fantasy and how it impacts the player.</p>
          <img src={totkimg3} alt="sky islands"></img>
          <Link to="/fantasy" className="button">Click Here</Link> 
        </div>
        <div className="column">
          <h3>Escapism</h3>
          <p>Explore the notion of escapism in gaming, and the potential of utilizing the immersive experience in gaming. </p>
          <img src={totkimg4} alt="Kakoriko Village"></img>
          <Link to="/escapism" className="button">Click Here</Link> 
        </div>
        <div className="column">
          <h3>About</h3>
          <p>Learn about why the website exists and give feedback. </p>
          <img src={totkimg2} alt="cliff sunset"></img>
          <Link to="/about" className="button">Click Here</Link> 
        </div>
      </div>
    </div>
  );
}

export default Column;
