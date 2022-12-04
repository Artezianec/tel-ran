import React from 'react'
import { game } from '../App'

const Result = ({ changePage, score }) => {
    return (
        <>
            <h1>{score[2]}</h1>
            <h2>{score[1]} - {score[0]}</h2>
            <button onClick={() => changePage(game)}>Again?</button>
        </>
    )
}

export default Result