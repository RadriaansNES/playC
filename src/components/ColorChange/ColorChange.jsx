import React, { useState, useEffect } from 'react';

const ColorChangingTitle = () => {
  const [coloredLetters, setColoredLetters] = useState([]);
  const titleText = 'Playlist Creator'; 
  const intervalDuration = 500; 
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % titleText.length);
    }, intervalDuration);

    
    return () => clearInterval(intervalId);
  }, []);

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  useEffect(() => {
    const newColor = getRandomColor();
    setColoredLetters(
      titleText.split('').map((letter, index) => ({
        letter,
        color: index === currentIndex ? newColor : 'white',
      }))
    );
  }, [currentIndex]);

  return (
    <h1>
      {coloredLetters.map((coloredLetter, index) => (
        <span key={index} style={{ color: coloredLetter.color }}>
          {coloredLetter.letter}
        </span>
      ))}
    </h1>
  );
};

export default ColorChangingTitle;
