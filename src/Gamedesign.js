import './App.css';
import React,{useState,useEffect} from 'react';
import Menu from './Components/Menu';
import Footer from './Components/Footer';
import {Placeholder, Divider} from './Components/Format';
import { Routes, Route } from 'react-router-dom';
import ImageSection from './Components/Imagereveal';
import Column from './Components/Column';
import Map from './Components/Intermap';
//import image below
import totkimg10 from './Images/totkimg10.jpg';

function Gamedesign(){
    return(
        <div>
            <Menu/>
            <Placeholder/>
            <div className="textholder">
                <div className="title">Immersive Game Design</div>
                <div className="body">
                     A harmonious blend of realistic and fantastical elements is key to achieving immersion in gaming. Incorporating realistic aspects such as advanced physics, high-quality graphics, and well-developed characters enhances a player's connection to the game world, thereby making the experience more engaging and relatable. Conversely, fantasy elements offer players a chance to explore beyond the realms of normalcy, ranging from enchanting worlds and mythical creatures to extraordinary abilities and scenarios. Fantasy serves as an escape from the mundane, inviting players into experiences unattainable in real life, thus sparking creativity and adding excitement and intrigue to the gameplay. The subsequent section will delve into the visual components that amalgamate realism with fantasy, albeit without an extensive focus on the finer points of game design.                </div>
                <ImageSection backgroundImage={totkimg10} alt="Link confronting a silver boko"></ImageSection>
                <div className="body">
                "Zelda: Tears of the Kingdom" stands as a quintessential example of immersive gaming. Its expansive open world and captivating landscapes showcase a blend of realistic elements paired with stylized visuals, exemplifying this balance.
                </div>
                <Divider/>
                <div className="subtitle"> Biomes Inspired by Real-life environments. </div>
                <div className="body">
                To enhance the intrigue and variety in "Zelda: Tears of the Kingdom," the game's map features a diverse array of biomes, each inspired by real-world climates. This approach adds a layer of realism to the fantasy setting, allowing players to traverse through distinct environments that mimic actual geographical conditions. Moreover, the game includes specific locations that reference real-world places, adding depth to the game's world and also creating a sense of familiarity and realism within the fantastical universe of "Zelda".
                </div>
                <div className="body">
                    You can click on the locations on the map below to see the different biomes.
                </div>
                <Map/>
                <Divider/>
                <div className="subtitle"></div>
            </div>
            <Footer/>
        </div>
    )
}
export default Gamedesign;