import React from 'react';
import Buttons from './Buttons';
import './Buttons.css';
const Ending = ({ score, reset }) => {
  return (
    <div>
      <p className="score-ending">Your score was {score}</p>
      <Buttons
        variant="outline-success"
        value="Start Over"
        name="ending"
        reset={reset}
      />
    </div>
  );
};

export default Ending;
