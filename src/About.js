import './App.css';
import React,{useState,useEffect} from 'react';
import Menu from './Components/Menu';
import Footer from './Components/Footer';
import {Placeholder, Divider} from './Components/Format';
import ImageSection from './Components/Imagereveal';
//image import below
import collage from './Images/Collage.png';
import totkimg1 from './Images/07.jpeg';
import totkimg2 from './Images/totkimg2.jpeg';

function About(){
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

    return(
        <div>
        <Menu/>
        <Placeholder/>
        <div className="textholder">
        <div className="title">Welcome to Our Gaming Odyssey</div>
        <Divider/>
        <div className="imageintext">
            <img src={totkimg2}></img>
        </div>
        <Divider/>
        <div className="subtitle">our journey begins</div>
        <div className="body">
        Growing up, video games were a taboo in my household. My parents firmly believed that gaming would lead to a violent and intellectually deficient upbringing. However, my persistent passion for gaming eventually softened their stance, granting me a precious half-hour each weekend to dive into virtual worlds under their careful supervision. This experience wasn't just about play; it became a mission to find games that were both educational and creatively stimulating, to prove to my parents - and perhaps to myself - that games could be more than mindless entertainment.
        </div>
        <ImageSection backgroundImage={collage}>
        <div className="subtitleimg">The Quest for Meaningful Gaming</div>
      </ImageSection>
        <div className="body">
        My childhood quest has evolved into a lifelong journey to understand what truly makes a game “good”, and what makes a game immersive. It's a quest filled with questions: What elements draw us to certain games? How do they impact us as individuals and as a community? Here, on this platform, I explore these questions, using my experiences and insights to delve into the art and science of gaming.         </div>
        <ImageSection backgroundImage={totkimg1}>
        <div className="subtitleimg">A Case Study in Excellence - "Zelda: Tears of the Kingdom"</div>
        </ImageSection>
        <div className="body">
        The recent masterpiece I've been immersed in, "Zelda: Tears of the Kingdom", stands as a paragon of what I consider an exemplary game. It beautifully aligns with my criteria for evaluating games - a perfect blend of creativity, storytelling, and immersive experience. This game serves as a lens through which I analyze and discuss the nuances of game design, from landscape realism to the subtle yet powerful use of color.
        </div>
        <div className="subtitle">Beyond Entertainment</div>
        <div className="body">
        This website isn't just a space for reviews or discussions; it's a platform dedicated to understanding the deeper impact of video games. We investigate how games serve not only as a form of escapism but also as a medium that can enhance and reflect our understanding of reality. Through comprehensive analyses and discussions about immersive gaming, we aim to unravel the complex relationship between video games, their players, and the world around us.
        </div>
        <div className="subtitle">Join Us in This Exploration</div>
        <div className="body">
        Whether you're a gaming veteran, a curious onlooker, or somewhere in between, this space is for you. Together, let's explore the myriad ways games touch our lives, shape our experiences, and redefine the boundaries of virtual storytelling. Welcome to a journey of discovery, insight, and appreciation of the art of gaming. You can submit feedback about this website using the link below!
        </div>
        <div className="body">
            <a className="email" href="mailto:xcatherine020202@gmail.com&subject=Big%20News&body=Feedback">Email Us</a>
        </div>
        <Divider/>  
        </div>      
        <Footer/>
        </div>
    )
}
export default About;