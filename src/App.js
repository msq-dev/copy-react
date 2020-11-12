import React, { useState, useEffect } from 'react';
import './App.css';
import Quiz from './components/Quiz';
import Button from './components/Button';
import questions from './assets/questions.json'

import axios from "axios";

function App() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answerShown, toggleAnswer] = useState(false);
  const [appState, setAppState] = useState({
    loading: false,
    questions: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = "http://localhost:8080/round01";
    axios.get(apiUrl).then((questions) => {
      const allQuestions = questions.data;
      setAppState({ questions: allQuestions, loading: false });
    });
  }, [setAppState]);

  return (
    <div className="quiz-container">
      <h1 className="title">CopyConReact</h1>
      <span>Another shameless rip-off (now with React)</span>
      <h3>Frage {questionIndex + 1}</h3>

      <Quiz isLoading={appState.loading} questions={appState.questions} idx={questionIndex}/>

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
