import React, { useCallback } from 'react'
import AvailableQuestion from '../questions.js'
import summeryImg from '../assets/quiz-complete.png'
import { useState } from 'react'
import { useEffect } from 'react'
import ProgressBar from './ProgressBar.jsx'
const TIMER = 15000
export default function Quiz() {
    const [givenAnswers, setGivenAnswers] = useState([])
    const activeQuestionIndex = givenAnswers.length
    const isCompleted = activeQuestionIndex === AvailableQuestion.length
    const handleSelectedAnswer = useCallback(function handleClick(answers){
        setGivenAnswers((preGivenAnswers=>[...preGivenAnswers, answers]))
    }, [])
    
    const handleSkipAnswer = useCallback(()=>handleSelectedAnswer(null), [handleSelectedAnswer]);
    if(isCompleted)
    {
        return(
            <div id="summary">
                <img src = {summeryImg}/>
                <h2>Quiz Completed</h2>
            </div>
        )
    }
    const suffeledArray = AvailableQuestion[activeQuestionIndex].answers
    suffeledArray.sort(()=>Math.random() - 0.5)
  return (
    <div id = "quiz">
        <div id = "question">
            <h2>{AvailableQuestion[activeQuestionIndex].text}</h2>
            <ul id="answers">
                {suffeledArray.map((answers)=><li key={answers}className='answer'><button onClick={()=>handleSelectedAnswer(answers)}>{answers}</button></li>)}
            </ul>
            <ProgressBar key = {activeQuestionIndex
            } timer = {TIMER} handleTimeout={handleSkipAnswer}/>
        </div>
    </div>
  )
}
