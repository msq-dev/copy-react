import React, { useState } from 'react';
import './App.css';
import Quiz from './components/Quiz';
import Button from './components/Button';
import questions from './assets/questions.json'


function App() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answerShown, toggleAnswer] = useState(false);
  const question = questions[questionIndex]
  return (
    <div className="quiz-container">
      <h1 className="title">CopyConReact</h1>
      <span>Another shameless rip-off (now with React)</span>
      <h3>Frage {questionIndex + 1}</h3>

      <Quiz question={question} />
      <Button className="answer" onClick={() => toggleAnswer(!answerShown)}>
        {answerShown ? questions[questionIndex].answer : "Lösung anzeigen"}
      </Button>   
        
      <div className="next-question-button" onClick={() => {
        if(questionIndex + 1 > questions.length -1) {
          setQuestionIndex(0);
          toggleAnswer(false);
        } else {
          setQuestionIndex(questionIndex +1)
          toggleAnswer(false);
        }
      }
      }>nächste Frage</div>
    </div>
  );
}

export default App;
