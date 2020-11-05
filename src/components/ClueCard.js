import React, { useState } from 'react'

export default function ClueCard({ clue, clueNumber }) {
    const [clueShown, toggleClue] = useState(clueNumber === 1)
    return (
        <div className={clueShown ? "clue-card" : "clue-card-back"} onClick={() => toggleClue(!clueShown)}>
          {clueShown ? clue : `Clue ${clueNumber}`}
        </div>
    )
}
