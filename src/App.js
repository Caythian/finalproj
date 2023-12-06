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
    const targetElement = document.querySelector('.body');
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
        <div className="floatingsubtitle">the art of immersive gaming, inspired by "Zelda: Tears of the Kingdom"</div>
        <div className="clickicon">
            <div className="click-message">Click the icon to continue</div>
            <img className={`icon ${isIconRotated ? 'rotated' : ''}`} src={icon} onClick={handleIconClick} alt="Icon"/>
        </div>
       </div>
      <Divider/>
     
      {/* <div className="subtitle">Realism in an Open World</div>  */}
      <div className="body">
        Welcome to our exploration of the art of immersive gaming, with a special focus on the acclaimed “Zelda: Tears of the Kingdom”.
      </div>  
      <div className="body"> Embark on an exploration of immersive gaming, a realm where video games transcend traditional play to offer deeply engaging, absorbing, and interactive experiences. Our platform delves into the heart of what makes a game not just entertaining but captivatingly immersive.
      </div>
      <Divider/>
      <ImageSection backgroundImage={totkimg4} alt="Surface World: Kakariko Village"></ImageSection>
      <div className="subtitle">The Art of Balancing Realism and Fantasy</div>
      <div className="body"> At the core of immersive gaming is the delicate balance between realism and fantasy. It's about crafting a world that feels real enough to make you believe in your presence and impact, yet fantastical enough to remind you of the joy and wonder of gaming. We dissect the visual elements of game design that contribute to this equilibrium, using the popular "Zelda: Tears of the Kingdom" as our primary case study.
      </div>
      <ImageSection backgroundImage={totkimg6} alt="the depths"></ImageSection>
      <div className="subtitle">Beyond the Screen - The Impact of Immersive Gaming</div>
      <div className="body">Our journey extends to understanding how immersive gaming influences us as individuals and our communities. We explore the concept of escapism in gaming - is this blend of realism and fantasy a mere escape from reality, or does it form an integral part of our real-world experience? Moreover, we ponder the future of gaming. As games evolve into more immersive experiences, we question their potential roles in education and psychological therapy.
      </div>
      <ImageSection backgroundImage={totkimg7} alt="Hateno Village"></ImageSection>
      <div className="body">Join us in this exploration of immersive gaming, where every pixel, every storyline, and every color choice tells a deeper story. This is a space for gamers, designers, and dreamers alike to understand, appreciate, and envision the future of gaming. Dive into a world where games are more than play - they're an experience, an education, and a journey into the depths of our imagination. Welcome to the nexus of gaming reality and fantasy.
      </div>
      <Column/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
