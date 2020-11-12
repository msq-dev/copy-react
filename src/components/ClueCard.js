import React, { useState } from 'react'

export default function ClueCard({index, isClickable, clueNumber, clue, onClick}) {
  const [isShown, toggleIsShown] = useState(clueNumber === 1)

  return (
    <div
      index={index} 
      className={isShown ? "clue-card" : "clue-card-back"} 
      onClick={() => {
        if (isClickable) {
          onClick()
          toggleIsShown(!isShown)
        } 
      }}
    >
        {isShown ? clue : `Clue ${clueNumber}`}
    </div>
  )
}