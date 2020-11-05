import React, { useEffect } from 'react'
import ClueCard from './ClueCard'

export default function Quiz({ question }) {
    useEffect(() => {
        console.log(`render new deck`)

        return () => {
            console.log('unmount deck')
        }
    }, [question])

    return (
        <div className="clue-card-container">
            {
                question.clues.map((clue, index) => 
                 <ClueCard key={`${clue}${index}`} clue={clue} clueNumber={index+1}/>
                )
            }
        </div>
    )
}
