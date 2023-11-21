import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div className="menu-container">
      <ul className="main-menu">
        <li>
          <Link to='/'>About</Link>
          <ul className="sub-menu">
            {/* here is where to put the subtitles */}
            <li><Link to='/about/history'>History</Link></li>
            <li><Link to='/about/team'>Team</Link></li>
          </ul>
        </li>
        <li>
          <Link to='/gamedesign'>Game Design</Link>
          <ul className="sub-menu">
            <li><Link to='/gamedesign/history'>History</Link></li>
            <li><Link to='/gamedesign/team'>Team</Link></li>
          </ul>
        </li>
        <li>
          <Link to='/escapism'>Escapism</Link>
          <ul className="sub-menu">
            <li><Link to='/escapism/history'>History</Link></li>
            <li><Link to='/escapism/team'>Team</Link></li>
            <li><Link to='/escapism/about'>About</Link></li>
          </ul>
        </li>
        <li>
          <Link to='/more'>More</Link>
          <ul className="sub-menu">
            <li><Link to='/more/history'>History</Link></li>
            <li><Link to='/more/team'>Team</Link></li>
            <li><Link to='/more/about'>More</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
