import './App.css';
import React,{useEffect} from 'react';
import Menu from './Components/Menu';
import Footer from './Components/Footer';
import {Placeholder, Divider} from './Components/Format';
import {useLocation} from 'react-router-dom';//add this to use the scroller
import ImageSection from './Components/Imagereveal';
import Map from './Components/Intermap';
import Game from './Components/Game';
//import image below
import totkimg10 from './Images/totkimg10.jpg';
import totkimg8 from './Images/totkimg8.jpeg';
import totkimg18 from './Images/totkimg18.jpeg';
import totkimg17 from './Images/totkimg17.jpg';
import totkimg16 from './Images/totkimg16.jpeg';

function Gamedesign(){
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
            <div className="textholder">
                <div className="title">Immersive Game Design</div>
                <div className="body">
                     A harmonious blend of realistic and fantastical elements is key to achieving immersion in gaming. Incorporating realistic aspects such as advanced physics, high-quality graphics, and well-developed characters enhances a player's connection to the game world, thereby making the experience more engaging and relatable. Conversely, fantasy elements offer players a chance to explore beyond the realms of normality, ranging from enchanting worlds and mythical creatures to extraordinary abilities and scenarios. Fantasy serves as an escape from the mundane, inviting players into experiences unattainable in real life, thus sparking creativity and adding excitement and intrigue to the gameplay. The subsequent section will delve into the visual components that amalgamate realism with fantasy, albeit without an extensive focus on the finer points of game design.                </div>
                <ImageSection backgroundImage={totkimg10} alt="Link confronting a silver boko"></ImageSection>
                <div className="body">
                <span className="highlight">"Legend of Zelda: Tears of the Kingdom" </span>stands as a quintessential example of immersive gaming. Its expansive open world and captivating landscapes showcase a blend of realistic elements paired with stylized visuals, exemplifying this balance.
                </div>
                <Divider/>
                <div className="subtitle" id="sub1"> Biomes Inspired by Real-life environments </div>
                <div className="body">
                To enhance the intrigue and variety in "Legend of Zelda: Tears of the Kingdom," the game's map features a diverse array of <span className="highlight">biomes</span>, each inspired by real-world climates. This approach adds a layer of realism to the fantasy setting, allowing players to traverse through distinct environments that mimic actual geographical conditions. Moreover, the game includes specific locations that reference real-world places, adding depth to the game's world and also creating a sense of familiarity and realism within the fantastical universe of "Zelda".
                </div>
                <div className="body">
                    You can click on the locations on the map below to see the different biomes. It might take a bit of time to load.
                </div>
                <Map/>
                <Divider/>
                <div className="subtitle" id="sub2">Big world, tiny details</div>
                <div className="body">In "Legend of Zelda: Tears of the Kingdom," the game's meticulous attention to detail significantly enhances its realism. For instance, the grass moving when the player walks on, and jumping into a pond creates realistic water splashes, reinforcing the player's sense of presence in the game. </div>
                <ImageSection backgroundImage={totkimg8} alt="Link riding horse over grass"></ImageSection>
                <div className="body">One of the subtle yet impactful design is the <span className="highlight"><a href="https://medium.com/@lemapp09/beginning-game-development-more-details-on-particles-d98d296f5a2c" target="_blank">particle effects</a></span>. These effects visually signify environmental changes. </div>
                <ImageSection backgroundImage={totkimg18} alt="Water temple particles">
                    <div className="floatingbody">In the sky archipelago above the Zora Domain, low gravity and humidity are indicated by small blue particles floating in the air. </div>
                </ImageSection>
                <Divider/>
                <ImageSection backgroundImage={totkimg16} alt="Particles in the depths"><div className="floatingbody">Conversely, in the Depths, a region characterized by evil and shadows, the stagnant air is represented by small grayish particles, evoking a sense of moldiness and mushroom spores. These details collectively contribute to the game's immersive experience.</div>
                </ImageSection>
                <Divider/>
                <ImageSection backgroundImage={totkimg17} alt="gerudo at night"><div className="floatingbody">In "Legend of Zelda: Tears of the Kingdom," the Gerudo area exhibits a unique atmospheric effect at night. This is to visually represent the drastic temperature shift from the intense heat of the day to the freezing conditions at night. The nighttime sparkle in the atmosphere serves as an indicator of this change, enhancing the game's immersion and attention to environmental details. This feature exemplifies the game's commitment to creating a dynamic and realistic world, where environmental changes are not just felt but also seen.</div>
                </ImageSection>
                <Divider/>
                <div className="subtitle" id="sub3">What color is this?</div>
                <div className="body">In "Legend of Zelda: Tears of the Kingdom," the strategic use of <span className="highlight"><a href="https://tryevidence.com/blog/color-psychology-in-game-design-how-do-colors-help-design-better-games/" target="_blank">color psychology</a></span> is evident in both thematic design and the creation of fantastical items. The game's expertise in utilizing colors contributes significantly to crafting an immersive experience. This choice of colors is not just aesthetic; it's also designed to evoke certain psychological responses in players, enhancing their emotional and sensory engagement with the game world. This aspect of design demonstrates the game's deep understanding of how color can impact a player's experience and mood.</div>
                <div className="body">Below is a simple game demonstrating how the color psychology is utilized in "Legend of Zelda: Tears of the Kingdom”.</div>
                <Game/>
            </div>
            <Footer/>
        </div>
    )
}
export default Gamedesign;