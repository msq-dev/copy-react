import React, { useState, useEffect } from 'react'
import ClueCard from './ClueCard'

export default function Quiz({ isLoading, questions, idx }) {
  const[isClickable, setClickability] = useState(true);
  const[seconds, setSeconds] = useState(40);

  useEffect(() => {
    if (seconds > 0) {
      let interval = null;
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);      
      }, 1000);
      return () => {
        clearInterval(interval);
      }
    } else {
      setClickability(false);
    }
  }, [seconds]);

  if(!isLoading && questions !== null) {
    const currentQuestion = questions.questions[idx];
    return (
      <div className="clue-card-container">
        {
          currentQuestion.clues.map((clue, index) => 
            <ClueCard
              index={index}
              key={`${clue}${index}`} 
              clue={clue} 
              clueNumber={index+1} 
              canClick={isClickable}
              />
          )
        }
        <div>
          { seconds === 0 ? <p>Time's up</p> : <p>{seconds} Sek.</p>}
        </div>
      </div>
      
    )} else {
      return (
        <div>
            Fetching data &hellip;
        </div>
      )
  }
}