import './App.css';
import React,{useState,useEffect} from 'react';
import Menu from './Components/Menu';
import Footer from './Components/Footer';
import { Routes, Route } from 'react-router-dom';
import ImageSection from './Components/Imagereveal';
import testImage from './Images/Berlin-69.jpg';


function App() {
  const [showImage, setShowImage] = useState(false);

  const handleScroll = () => {
    const imageSection = document.getElementById('image-reveal-section');
  
    // Check if the element exists
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
    <div className="App">
      <Menu/>
      <ImageSection backgroundImage={testImage}>
      </ImageSection>
      <div className="body">afhh iheihifhsih</div>
      <ImageSection backgroundImage={testImage}>
      </ImageSection>
      <Footer/>
    </div>
  );
}

export default App;
