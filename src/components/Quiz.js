import React from 'react'
import ClueCard from './ClueCard'

export default function Quiz({ questions }) {

    return (
        <div>
            <div className="clue-card-container">
                <ClueCard clue={questions.clue01} clueNumber="1"/>
                <ClueCard clue={questions.clue02} clueNumber="2"/>
                <ClueCard clue={questions.clue03} clueNumber="3"/>
                <ClueCard clue={questions.clue04} clueNumber="4"/>
            </div>

        </div>

    )
}
