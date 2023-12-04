import React from 'react';
import '../App.css';
import '../Components/Column.css';
import { Link } from 'react-router-dom';
import totkimg4 from '../Images/totkimg4.jpeg';

function Column() {
  return (
    <div className="container">
      <div className="row">
        <div className="column">
          <h3>Realism</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet rutrum mauris, non malesuada risus. Donec tempor nibh ac facilisis facilisis.</p>
          <img src={totkimg4} alt="Kakoriko Village"></img>
          <Link to="/realism" className="button">Click Here</Link> {/* Modify the path as needed */}
        </div>
        <div className="column">
          <h3>Fantasy</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet rutrum mauris, non malesuada risus. Donec tempor nibh ac facilisis facilisis.</p>
          <img src={totkimg4} alt="Kakoriko Village"></img>
          <Link to="/fantasy" className="button">Click Here</Link> {/* Modify the path as needed */}
        </div>
        <div className="column">
          <h3>Escapism</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet rutrum mauris, non malesuada risus. Donec tempor nibh ac facilisis facilisis.</p>
          <img src={totkimg4} alt="Kakoriko Village"></img>
          <Link to="/escapism" className="button">Click Here</Link> {/* Modify the path as needed */}
        </div>
        <div className="column">
          <h3>About</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet rutrum mauris, non malesuada risus. Donec tempor nibh ac facilisis facilisis.</p>
          <img src={totkimg4} alt="Kakoriko Village"></img>
          <Link to="/about" className="button">Click Here</Link> {/* Modify the path as needed */}
        </div>
      </div>
    </div>
  );
}

export default Column;
