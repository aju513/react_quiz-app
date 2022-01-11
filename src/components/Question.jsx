import ShowMoreText from 'react-show-more-text';
import './score.css';
const Question = ({ question }) => {
  return (
    <div className="question">
      <ShowMoreText>{question}</ShowMoreText>
    </div>
  );
};
export default Question;
