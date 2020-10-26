import React, { useState } from 'react'

export default function ClueCard({ clue, clueNumber }) {
    let [clueShown, toggleClue] = useState(false)
    return (
        <div className={clueShown ? "clue-card" : "clue-card-back"} onClick={() => toggleClue(clueShown = !clueShown)}>
          {clueShown ? clue : `Clue ${clueNumber}`}
        </div>
    )
}
