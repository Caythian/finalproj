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

function More(){
    return(
        <div>
            <Menu/>
            <Placeholder/>
            <div className="textholder">
                
            </div>
            <Footer></Footer>
        </div>
    )
}
export default More;