import React,{ useEffect, useState } from 'react';
import '../App.css';
import '../Components/Menu.css';
import { Link } from 'react-router-dom';

function Menu() {
  const [hideMenu, setHideMenu] = useState(false);
  const [activeSubpage, setActiveSubpage] = useState(null);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY) {
        setHideMenu(false); // Show menu when up
      } else if (currentScrollY > lastScrollY && currentScrollY > 10) {
        setHideMenu(true); // Hide menu when down
      }
      setLastScrollY(currentScrollY); 
    };

  // Function to click
  const toggleSubMenu = (subpage) => {
    if (activeSubpage === subpage) {
      setActiveSubpage(null);
    } else {
      setActiveSubpage(subpage);
    }
  };
  
  window.addEventListener('scroll', onScroll);
  return () => window.removeEventListener('scroll', onScroll);
}, [lastScrollY]);
  
  return (<>
    <div className={`menu-container ${hideMenu ? 'hide' : ''}`}>
      <ul className="main-menu">
        <li className="subpage">
          <Link to='/'>Home</Link>
        </li>
        <li className="subpage">
          <Link to='/gamedesign'>Immersive Design</Link>
          <ul className="sub-menu">
            <li><Link to='/Gamedesign#sub1'>Biomes</Link></li>
            <li><Link to='/Gamedesign#sub2'>Details</Link></li>
            <li><Link to='/Gamedesign#sub3'>Color</Link></li>
          </ul>
        </li>
        <li className="subpage">
          <Link to='/escapism'>Escapism</Link>
          <ul className="sub-menu">
            <li><Link to='/Escapism#sub1'>Understanding escapism</Link></li>
            <li><Link to='/Escapism#sub2'>Intertwined worlds</Link></li>
            <li><Link to='/Escapism#sub3'>Family</Link></li>
          </ul>
        </li>
        {/* <li className="subpage">
          <Link to='/more'>Future</Link>
          <ul className="sub-menu">
            <li><Link to='/More/sub1'>sub1</Link></li>
            <li><Link to='/More/sub2'>sub2</Link></li>
            <li><Link to='/More/sub3'>sub3</Link></li>
          </ul>
        </li> */}
        <li className="subpage">
          <Link to='/about'>About</Link>
          <ul className="sub-menu">
          <li><Link to='/About#sub5'>Contact Us</Link></li>
          </ul>
        </li>
      </ul>
    </div>

  </>);
}

export default Menu;
