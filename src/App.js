import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Buttons from './components/Buttons';
import Question from './components/Question';
import { randomize } from './logics/randomizeArray';
import conCatenation from './logics/concat';
import makeid from './logics/generatekeys';
import Score from './components/Score';
import './components/Buttons.css';
import WrongAnswer from './components/WrongAnswer';
import Ending from './components/Ending';
const App = () => {
  const [alldata, setAlldata] = useState(['']);
  const [state, setState] = useState(['']);
  const [answer, setAnswer] = useState('');
  const [question, setQuestion] = useState('');
  const [variable, setVariable] = useState(0);
  const [score, setScore] = useState(0);
  const [disable, setDisable] = useState(false);
  const [cross, setCross] = useState(['']);

  //functions
  const changeVariable = () => {
    setVariable(() => variable + 1);
  };
  const incrementScore = () => {
    return setScore(() => score + 1);
  };

  const buttonClick = () => {
    if (disable) {
      return setDisable(() => false);
    }
    setDisable(() => true);
  };
  const reset = () => {
    setScore(0);
    setVariable(1);
    setCross(['']);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        'https://opentdb.com/api.php?amount=100'
      );
      setAlldata(response.data.results);

      const value = alldata[variable].incorrect_answers;

      const rightAnswer = alldata[variable].correct_answer;

      setState(randomize(conCatenation(rightAnswer, ...value)));
      setAnswer(rightAnswer);
      setQuestion(alldata[variable].question);
      setDisable(() => false);
      console.log(cross);
    } catch (err) {}
  };

  useEffect(() => {
    fetchData();
  }, [variable]);
  console.log(variable);
  return (
    <div className="main">
      <WrongAnswer cross={cross} />
      {cross.length === 6 ? (
        <Ending score={score} reset={reset} />
      ) : variable <= 0 ? (
        <>
          <Buttons
            value={'Start'}
            changeVariable={changeVariable}
            variant="outline-success"
            style={{ width: '40px' }}
            name="start"
          />
        </>
      ) : (
        <>
          <div className="center">
            <Score score={score} />
            <Question question={question} />
            {variable === -1
              ? ''
              : state.map((e) => (
                  <Buttons
                    keys={makeid(5)}
                    value={e}
                    name="btn size btn-lg"
                    answer={answer}
                    changeVariable={changeVariable}
                    incrementScore={incrementScore}
                    wrongAnswer={() => setCross([...cross, '❌'])}
                    disable={disable}
                    buttonClick={buttonClick}
                    variant="outline-secondary"
                  />
                ))}
          </div>
        </>
      )}
    </div>
  );
};
export default App;
