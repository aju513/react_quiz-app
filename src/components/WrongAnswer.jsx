import React from 'react';
import './Buttons.css';
const WrongAnswer = ({ cross }) => {
  return (
    <div>
      <h3 className="centerA">
        {cross.map((c) => (
          <p className="wrongAnswer">{c}</p>
        ))}
      </h3>
    </div>
  );
};

export default WrongAnswer;
