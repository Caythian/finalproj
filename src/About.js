import './App.css';
import Menu from './Components/Menu';
import Footer from './Components/Footer';
import {Placeholder, Divider,Bodylimager,Bodyrimagel} from './Components/Format';
import { Routes, Route } from 'react-router-dom';
import testimg from './Images/Berlin-69.jpg';

function About(){
    return(
        <div>
        <Menu/>
        <Placeholder/>
        <div className="textholder">
        <div className="title">Welcome to Our Gaming Odyssey</div>
        <Divider/>
        <div className="subtitle">our journey begins</div>
        <div className="body">
        Growing up, video games were a taboo in my household. My parents firmly believed that gaming would lead to a violent and intellectually deficient upbringing. However, my persistent passion for gaming eventually softened their stance, granting me a precious half-hour each weekend to dive into virtual worlds under their careful supervision. This experience wasn't just about play; it became a mission to find games that were both educational and creatively stimulating, to prove to my parents - and perhaps to myself - that games could be more than mindless entertainment.
        </div>
        <div className="subtitle">The Quest for Meaningful Gaming</div>
        <div className="body">
        My childhood quest has evolved into a lifelong journey to understand what truly makes a game 'good.' It's a quest filled with questions: What elements draw us to certain games? How do they impact us as individuals and as a community? Here, on this platform, I explore these questions, using my experiences and insights to delve into the art and science of gaming.
        </div>
        <div className="subtitle">A Case Study in Excellence - "Zelda: Tears of the Kingdom"</div>
        <div className="body">
        The recent masterpiece I've been immersed in, "Zelda: Tears of the Kingdom", stands as a paragon of what I consider an exemplary game. It beautifully aligns with my criteria for evaluating games - a perfect blend of creativity, storytelling, and immersive experience. This game serves as a lens through which I analyze and discuss the nuances of game design, from landscape realism to the subtle yet powerful use of color.
        </div>
        <div className="subtitle">Beyond Entertainment</div>
        <div className="body">
        This website isn't just a space for reviews or discussions; it's a platform dedicated to understanding the deeper impact of video games. We investigate how games serve not only as a form of escapism but also as a medium that can enhance and reflect our understanding of reality. Through comprehensive analyses and discussions, we aim to unravel the complex relationship between video games, their players, and the world around us. 
        </div>
        <div className="subtitle">Join Us in This Exploration</div>
        <div className="body">
        Whether you're a gaming veteran, a curious onlooker, or somewhere in between, this space is for you. Together, let's explore the myriad ways games touch our lives, shape our experiences, and redefine the boundaries of virtual storytelling. Welcome to a journey of discovery, insight, and appreciation of the art of gaming. You can submit feedback about this website using the message box below!
        </div>
        </div><Divider/>        
        <Footer/>
        </div>
    )
}
export default About;