import React, { useState, useEffect } from 'react';
import './App.css';
import Quiz from './components/Quiz';


import axios from "axios";

function App() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [showAnswer, toggleShowAnswer] = useState(false);
  const [isLoading, setIsLoading] = useState(true)
  const [questions, setQuestions] = useState(null)

  useEffect(() => {
    setIsLoading(true)
    const apiUrl = "http://localhost:8080/round01";
    axios.get(apiUrl).then((questions) => {
      const allQuestions = questions.data;
      setQuestions(allQuestions)
      setIsLoading(false)
    }).catch(e => {
      setIsLoading(false)
    });
  }, []);

  return (
    <div className="quiz-container">
      <h1 className="title">CopyConReact</h1>
      <span>Another shameless rip-off (now with React)</span>
      <h3>Frage {questionIndex + 1}</h3>

      <Quiz isLoading={isLoading} questions={questions} idx={questionIndex} onClickShowResult={() => toggleShowAnswer(!showAnswer)} showAnswer={showAnswer}/>   
        
      <div className="next-question-button" onClick={() => {
        if(questionIndex + 1 > questions.length -1) {
          setQuestionIndex(0);
          toggleShowAnswer(false);
        } else {
          setQuestionIndex(questionIndex +1)
          toggleShowAnswer(false);
        }
      }
      }>nächste Frage</div>
    </div>
  );
}

export default App;
