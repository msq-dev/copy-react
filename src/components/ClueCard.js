import React, { useState } from 'react'

export default function ClueCard({index, canClick, clueNumber, clue}) {
  const [clueShown, toggleClue] = useState(clueNumber === 1)

  if (!clueShown && index >= 3) {
    canClick = false;
  }

  return (
    <div
      index={index} 
      className={clueShown ? "clue-card" : "clue-card-back"} 
      onClick={() => {
        if (canClick) {
          toggleClue(!clueShown)
        } else {
          //pass
        }
      }}
    >
        {clueShown ? clue : `Clue ${clueNumber}`}
    </div>
  )
}