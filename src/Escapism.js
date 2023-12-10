import './App.css';
import React,{useEffect} from 'react';
import Menu from './Components/Menu';
import Footer from './Components/Footer';
import './App.css';
import {Placeholder, Divider} from './Components/Format';
import { useLocation } from 'react-router-dom';
import ImageSection from './Components/Imagereveal';
import RedditEmbed from './Components/Redditembed';
import Videoplayer from './Components/Videoplayer';
import Audio from './Components/Audio';
//import image below
import totkimg23 from './Images/totkimg23.jpg';
import totkimg24 from './Images/totkimg24.png';
import gaming from './Images/Gaming.jpg';

function Escapism(){
    const location = useLocation();

    useEffect(() => {
        // Check if the current URL has a hash
        if (location.hash) {
          // If there's a hash, scroll to the element with that ID
          const element = document.getElementById(location.hash.slice(1));
          if (element) {
            element.scrollIntoView();
          }
        } else {
          // If there's no hash, scroll to the top of the page
          window.scrollTo(0, 0);
        }
      }, [location]);

    return(
        <div>
            <Menu/>
            <Placeholder/>
            <Audio />
            <div className="textholder">
                <div className="title">The Impact of Immersive Gaming: Escapism</div>
                <div className="body">
                    Immersive gaming indeed transports players into alternate worlds, but it raises the question: Is this immersion an <span className="highlight">escape</span> from reality?
                </div>
                <ImageSection backgroundImage={totkimg24} alt="ToTK Surface Dueling Peaks"></ImageSection>
                <div className="body">
                    To delve deeper, we first need to grasp the concept of <span className="highlight">escapism</span>. Wikipedia <span className="highlight"><a href="https://en.wikipedia.org/wiki/Escapism" target="_blank">defines</a></span> it as a mental diversion from life's unpleasantness through imaginative or entertaining activities. This definition, though, seems inadequate as it prompts two questions: What exactly constitutes daily life, and aren't these activities part of it? Gaming exists near the blurry line between everyday life and mental diversion. This page will explore the complex relationship between gaming and escapism, examining whether games are truly separate from daily life and the implications if they are not.
                </div>
                <Divider/>
                <div className="subtitle" id="sub1">Understanding escapism</div>
                <div className="body">
                    The psychological dimensions of escapism in gaming can be viewed through two lenses: <span className="highlight"><a href="https://pubmed.ncbi.nlm.nih.gov/36760907/#:~:text=Here%2C%20in%20a%20sample%20of,dependence%20and%20subjective%20well%2Dbeing." target="">self-suppression and self-expansion</a></span>. Self-suppression escapism aims to avoid negative self-evaluation by engaging in an activity, while self-expansion escapism seeks positive experiences and immersion in an activity.
                </div>
                <div className="body">
                If a game is used for self-suppression, it serves as a temporary distraction from personal issues, requiring the player to eventually face reality. Conversely, if used for self-expansion, like enhancing creativity, it can lead to positive emotions and a boost in self-esteem.
                </div>
                <ImageSection backgroundImage={totkimg23} alt="ToTK Depths"></ImageSection>
                <div className="body">
                    It's thus crucial for <span className="highlight">players</span> to choose their gaming times wisely to ensure a healthy balance. For game developers, creating a positive gaming experience is essential, especially for players who struggle with self-regulation, to promote a more constructive and beneficial engagement with their games.
                </div>
                <Divider/>
                <div className="subtitle" id="sub2">Intertwined worlds</div>
                <div className="body">
                    The relationship between the virtual and real worlds is not one of opposition. Experiences in the virtual world often correlate closely with real-life situations. Digital games, rather than being mere escapes, are intricate experiences that intertwine with real life, influencing our perspectives and behaviors. Indeed, video games have served as a significant <span className="highlight">augmentation</span> of desired real-life experiences, especially during <span className="highlight"><a href="https://en.wikipedia.org/wiki/COVID-19_pandemic" target="_blank">the COVID-19 pandemic</a></span>. As the pandemic imposed unprecedented restrictions on physical interactions and mobility, people increasingly turned to digital platforms, including video games, to fulfill their need for social connection and engagement. With lockdowns and social distancing measures in place, video games provided a virtual space where friends and family could interact, socialize, and stay connected despite physical barriers. Online multiplayer games became virtual meeting spots, allowing for interactions that were otherwise limited in the real world. 
                </div>
                <Divider/>
                <Videoplayer href="https://www.youtube.com/embed/SJ8hPlH5qS0?si=0foIOvnirnIQdFTq" description="During the Pandemic, online social platform comporomises the need of physical socialization. VR Chat, for example, was one popular platform used for online communication at that time."/>
                <Divider/>
                <div className="body">
                    Games like <span className="highlight"><a href="https://zelda.nintendo.com/tears-of-the-kingdom/" target="_blank">"Legend of Zelda: Tears of the Kingdom"</a></span> don't detract from our real-world appreciation; instead, they enhance it. The game's portrayal of landscapes amplifies the beauty of the natural world, demonstrating how gaming can positively affect our perception of reality.
                </div>
                <RedditEmbed 
                    postUrl="https://www.reddit.com/r/Yahaha_IRL/comments/171qa25/alas_i_was_out_of_arrows/"
                    usernameUrl="https://www.reddit.com/user/littlefriend77/"
                    username="u/xzorcious"
                    subredditUrl="https://www.reddit.com/r/Yahaha_IRL/"
                    subreddit="Yahaha_IRL"
                    />
                <Divider/>
                <div className="subtitle" id="sub3">Family Education</div>
                <div className="body">
                    In the context of <span className="highlight">family education</span>, for instance, it is more constructive for parents to view gaming as a part of life rather than a negative influence. <span className="highlight"><a href="https://medium.com/a-parent-is-born/why-i-play-minecraft-with-my-kids-91658a3efeb2" target="_blank">Positive guidance</a></span> is key. Parents can choose family-friendly and educational games, and play alongside their children, demonstrating how to balance gaming with other activities. This approach fosters a healthier relationship with gaming and teaches time management skills.
                </div>
                <ImageSection backgroundImage={gaming} alt="Family playing game together"></ImageSection>
                <Divider/>
            </div>
            <Footer></Footer>
        </div>
    )
}
export default Escapism;