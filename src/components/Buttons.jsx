import React from 'react';
import ShowMoreText from 'react-show-more-text';
import { useRef, useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Buttons.css';
const Buttons = ({
  keys,
  value,
  answer,
  changeVariable,
  incrementScore,
  disable,
  buttonClick,
  variant,
  name,
  wrongAnswer,
  reset,
}) => {
  const getAnswers = () => {
    if (value === answer) {
      console.log('yes');
      incrementScore();
    } else {
      console.log('no');
      if (wrongAnswer) {
        wrongAnswer();
      }
    }
  };
  const nothing = () => {
    return null;
  };
  return (
    <div className="container-md">
      <ButtonGroup vertical>
        <Button
          variant={variant}
          key={keys}
          className={name}
          onClick={() => {
            getAnswers();
            changeVariable ? changeVariable() : nothing();
            buttonClick ? buttonClick() : nothing();
            reset ? reset() : nothing();
          }}
          disabled={disable}
        >
          <ShowMoreText>{value}</ShowMoreText>
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Buttons;
