import React, { useState } from 'react'
import ClueCard from './ClueCard'
import Button from './Button';

import useTimer from './useTimer'

export default function Quiz({ isLoading, questions, idx, onClickShowResult, showAnswer }) {
  
  
  const currentQuestion = isLoading ? null : questions.questions[idx];

  return (
    <>
      { isLoading && <div>Fetching data &hellip; </div>} 
      { currentQuestion && (
        <>
        <CardContainer question={currentQuestion}/>
        <Button className="answer" onClick={onClickShowResult}>
          {showAnswer ? currentQuestion.answer : "Lösung anzeigen"}
        </Button>
      </> )}
    </>
  )
}

const CardContainer = ({question}) => {
  const [visibleClueIndex, setVisibleClueIndex] = useState(0)
  const {seconds } = useTimer({  duration: 40 })
  return (
    <div className="clue-card-container">
      {
          question.clues.map((clue, index) => {
            const isClickable = index === 1 || visibleClueIndex === index-1
            return (
            <ClueCard
              index={index}
              visibleClueIndex={visibleClueIndex}
              key={`${clue}${index}`} 
              clue={clue} 
              onClick={() => setVisibleClueIndex(index)}
              clueNumber={index+1} 
              isClickable={isClickable}
              />
              )
            }
          )
      }
        <div>
          { seconds === 0 ? <p>Time's up</p> : <p>{seconds} Sek.</p>}
        </div>
    </div>
  )
}