import React,{ useEffect, useState } from 'react';
import '../App.css';
import '../Components/Menu.css';
import { Link } from 'react-router-dom';

function Menu() {
  const [hideMenu, setHideMenu] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Adjust '100' to the height of your open menu bar
      if (window.scrollY > 100) {
        setHideMenu(true);
      } else {
        setHideMenu(false);
      }
    };
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
  return (<>
    <div className={`menu-container ${hideMenu ? 'hide' : ''}`}>
      <ul className="main-menu">
        <li className="subpage">
          <Link to='/'>Home</Link>
        </li>
        <li className="subpage">
          <Link to='/gamedesign'>Game Design</Link>
          <ul className="sub-menu">
            <li><Link to='/gamedesign/sub1'>sub1</Link></li>
            <li><Link to='/gamedesign/sub2'>sub2</Link></li>
            <li><Link to='/gamedesign/sub3'>sub3</Link></li>
          </ul>
        </li>
        <li className="subpage">
          <Link to='/escapism'>Escapism</Link>
          <ul className="sub-menu">
            <li><Link to='/escapism/sub1'>sub1</Link></li>
            <li><Link to='/escapism/sub2'>sub2</Link></li>
          </ul>
        </li>
        <li className="subpage">
          <Link to='/more'>More</Link>
        </li>
        <li className="subpage">
          <Link to='/about'>About</Link>
          <ul className="sub-menu">
            <li><Link to='/about/sub1'>sub1</Link></li>
            <li><Link to='/about/sub2'>sub2</Link></li>
          </ul>
        </li>
      </ul>
    </div>

  </>);
}

export default Menu;
