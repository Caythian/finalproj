import React, { useState } from 'react';
import '../App.css';
import './Game.css';

// Import your images
import redimg from '../Images/Ganondorf.jpg';
import blueimg from '../Images/totkimg22.jpeg';
import greenimg from '../Images/shrine.jpeg';
import yellowimg from '../Images/root.jpeg';
import violetimg from '../Images/totkimg21.jpeg';
import pinkimg from '../Images/totkimg20.jpeg';
// ... other images ...

function Game() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isCorrect, setIsCorrect] = useState(null);
  const colorOptions = ['blue', 'green', 'violet', 'pink', 'red', 'yellow']; 

  const questions = [
    { image: redimg, description: 'Ganondorf', more: 'Ganondorf is the central antagonist, the main enemy causing turmoil in the continent of Hyrule. He spreads the evil glooms that engulf the life of many creatures.', 
    correctColor: 'red' ,colormeaning:'passion, danger, strength, and energy.'},
    { image: blueimg, description: 'Bluepee', more:'It may look like a rabbit at a fleeting glance, but these strange creatures are allegedly associated with ancient deities and spiritual power. It is a non-aggressive creature and when being hit, it drops money.',
    correctColor: 'blue', colormeaning:'calmness, trust, intelligence, and serenity.'},
    { image: greenimg, description: 'The light from Shrine',more:'A shrine refers to a small temple or sacred place scattered throughout the game\'s world. It seems to be related to some good spiritual powers.', 
    correctColor: 'green',colormeaning:'growth, harmony, safety, and nature.'},
    { image: yellowimg, description: 'Light root in the Deapths', more:' Light roots are huge organic structures in the Depths. When activated, it creates a fast travel point and lights up a small area around it.',
    correctColor: 'yellow',colormeaning:'optimism, caution, energy, and brightness' },
    { image: violetimg, description: 'Bright cap', more:'Brightcap is a mushroom that grows in caves and contains luminescent enzymes. Cook it into a dish to give a glowing effect to anyone who eats it.', 
    correctColor: 'violet',colormeaning:'luxury, spirituality, wisdom, and mystery'},
    { image: pinkimg, description: 'Gas from Muddle Bud', more: 'Here we are guessing the color of the fog emmited by Muddle Bud. Muddle Bud is a wildflower with a powerful odor that can disorient and confuse, making it difficult to tell friend from foe.', 
    correctColor: 'pink' ,colormeaning:'femininity, warmth, romance,and playfulness'},
    // ... more questions ...
  ];

  const handleGuess = (color) => {
    const isAnswerCorrect = color === questions[currentQuestionIndex].correctColor;
    setIsCorrect(isAnswerCorrect);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setIsCorrect(null);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
<div>
    <div className="subtitle">What color is this?</div>
    <div className="game-container">
      <div className="body">{currentQuestion.more}</div> 
      <img 
        src={currentQuestion.image}
        alt="Guess the color"
        className={isCorrect == null ? 'grayscale' : ''}
      />
      <div className="buttons-container">
        {colorOptions.map((color) => (
          <button className="gamebutton" key={color} onClick={() => handleGuess(color)}>
            {color}
          </button>
        ))}
      </div>
      {isCorrect !== null && (
        <div className="body">
          {isCorrect ? 'Correct!' : 'Incorrect!'} 
          <div >{currentQuestion.description} is {currentQuestion.correctColor}.</div>
          <div >{currentQuestion.correctColor} usually refers to {currentQuestion.colormeaning}</div>
          {currentQuestionIndex < questions.length - 1 && (
             <button className="gamebutton" onClick={handleNextQuestion}>Next Question</button>
            )}
        </div>
      )}
    </div>
</div>
  );
}

export default Game;
