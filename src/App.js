import './App.css';
import React,{useState,useEffect} from 'react';
import Menu from './Components/Menu';
import Footer from './Components/Footer';
import './App.css';
import {Placeholder, Divider} from './Components/Format';
import { Routes, Route } from 'react-router-dom';
import ImageSection from './Components/Imagereveal';
import Column from './Components/Column';
//import image below
import icon from './Images/MenuClosed.svg';
import totkimg3 from './Images/totkimg3.jpeg';
import totkimg4 from './Images/totkimg4.jpeg';
import totkimg5 from './Images/totkimg5.jpeg';
import totkimg6 from './Images/totkimg6.jpg';
import totkimg7 from './Images/totkimg7.jpeg';

function App() {
  const [isIconRotated, setIsIconRotated] = useState(false);
  const handleIconClick = () => {
    setIsIconRotated(!isIconRotated);
    const targetElement = document.querySelector('.subtitle');
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
  };  
  
  const [showImage, setShowImage] = useState(false);

  const handleScroll = () => {
    const imageSection = document.getElementById('image-reveal-section');
  
    if (imageSection) {
      const imageSectionTop = imageSection.getBoundingClientRect().top;
      const imageSectionHeight = imageSection.getBoundingClientRect().height;
      const windowHeight = window.innerHeight;
  
      if (imageSectionTop <= windowHeight && imageSectionTop >= -imageSectionHeight) {
        setShowImage(true);
      } else {
        setShowImage(false);
      }
    }
  };
  
  return (
      <div>
      <Menu/>
      <Placeholder/>
      <div className="textholder">
        <div className="fixed-background">
          <Divider/>
        <div className="floatingtitle">A journey beyond play</div>
        <div className="floatingsubtitle">environmental design in gaming, inspired by "Zelda: Tears of the Kingdom"</div>
        <div className="click-message">Click the icon to continue</div>
        <img className={`icon ${isIconRotated ? 'rotated' : ''}`} src={icon} onClick={handleIconClick} alt="Icon"/>
      </div>
      <Divider/>
     
      <div className="subtitle">Realism in an Open World</div> 
      <div className="body">
        Welcome to our exploration of the enchanting balance between realism and fantasy in environmental design, with a special focus on the acclaimed “Zelda: Tears of the Kingdom”.
      </div>  
      <div className="body"> Dive into a realm where the day-night cycle mirrors our world, and diverse biomes bring a sense of tangible reality. Experience the intricacies of a journey that's anything but linear, where the path to your destination is filled with unexpected twists and turns, much like life itself. We delve into the art of spatial perspective, bringing a sense of depth and realism to your virtual adventures.
      </div>
      <Divider/>
      <ImageSection backgroundImage={totkimg4} alt="Surface World: Kakariko Village"></ImageSection>
      <div className="subtitle">Fantasy Through Color and Design</div>
      <div className="body">In contrast, witness how fantasy comes alive through vibrant color schemes and imaginative item designs. We explore the thematic use of colors in-game environments and how they enhance the player's experience. Our side note on the psychology of colors offers insights into how hues influence emotions and perceptions in gaming.
      </div>
      <ImageSection backgroundImage={totkimg6} alt="the depths"></ImageSection>
      <div className="subtitle">Escapism or Enhanced Reality?</div>
      <div className="body">As we bridge the worlds of realism and fantasy, we ponder over an intriguing question: does this fusion in gaming create an escape from our reality, or does it form an integral part of it? Join us in exploring how video games, through their blend of the real and the fantastical, offer a unique dimension - a space where escapism and reality coalesce.
      </div>
      <ImageSection backgroundImage={totkimg7} alt="Hateno Village"></ImageSection>
      <div className="body">Embark on this journey with us as we unravel the layers of game design that make “Zelda: Tears of the Kingdom” a masterpiece. Whether you are a gaming enthusiast, a design aficionado, or simply curious about the world of gaming, our insights aim to deepen your appreciation of the art behind virtual worlds. Welcome to a place where every pixel tells a story and every game is an odyssey.
      </div>
      <Column/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
