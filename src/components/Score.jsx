import React from 'react';
import ShowMoreText from 'react-show-more-text';
import './score.css';
const Score = ({ score }) => {
  return (
    <div className="score">
      <ShowMoreText>{score}</ShowMoreText>
    </div>
  );
};

export default Score;
