import React, { useEffect, useRef } from 'react';
import '../App.css';
import './Videoplayer.css';

function Videoplayer(props){
        return(
            <div className="video-container">
            <iframe className="videoframe" src={props.href} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <div className="description">{props.description}</div>
            </div>
        )
}
export default Videoplayer;