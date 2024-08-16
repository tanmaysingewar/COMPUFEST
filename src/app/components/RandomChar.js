'use client'
import React, { useState, useEffect } from 'react';

const RandomTextHover = ({ children }) => {
  const [displayedText, setDisplayedText] = useState(children);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isHovered) {
      intervalId = setInterval(() => {
        const randomText = children
          .split('')
          .map(char => {
            if (Math.random() > 0.5) {
              return String.fromCharCode(Math.floor(Math.random() * 26) + 65); // Random capital letter
            }
            return char;
          })
          .join('');
        setDisplayedText(randomText);
      }, 10);
      
      setTimeout(() => {
        clearInterval(intervalId);
        setDisplayedText(children);
      }, 200);
    } else {
      clearInterval(intervalId);
      setDisplayedText(children);
    }

    return () => clearInterval(intervalId);
  }, [isHovered, children]);

  return (
    <span
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {displayedText}
    </span>
  );
};

export default RandomTextHover;
