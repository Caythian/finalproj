import React, { useState, useRef } from 'react';
import './Audio.css';
import '../App.css'
import song1 from '../audios/1.mp3';
import song2 from '../audios/2.mp3';
import song3 from '../audios/3.mp3';
import song4 from '../audios/4.mp3';
import song5 from '../audios/5.mp3';

const songs = [song1, song2, song3,song4,song5];


function Audio() {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const audioRef = useRef(null);

  const playNextSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
  };

  return (
      <div className="audio-container">
        <div className="musicinfo">Music</div>
        <audio className="audio-player"
          ref={audioRef} 
          src={songs[currentSongIndex]} 
          controls 
          onEnded={playNextSong} 
        />
      </div>
  );
}

export default Audio;
