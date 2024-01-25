import React, { useState, useRef } from 'react'
import Result from './Result';

export default function TimerChalleng({title, targetTime}) {
    // const [isExpired, setIsExpired] = useState(false)
    // const [isRunning, setIsRunning] = useState(false)
    const[timeRemaining, setTimeRemaining] = useState(targetTime*1000)
    let isActive = timeRemaining < targetTime*1000
    let timer = useRef();
    let dialog = useRef();

    if(timeRemaining <= 0) 
    {
        clearInterval(timer.current)
        dialog.current.open()
    }
    function onReset(){
        setTimeRemaining(targetTime*1000)
    }
    function handleStartTime(){
        timer.current = setInterval(()=>{
            setTimeRemaining(preTimeRemaining=> preTimeRemaining - 10)
        }, 10)
        // timer.current = setTimeout(()=>{
        //     setIsExpired(true)
        //     setIsRunning(false)
        //     dialog.current.open()
        // }, targetTime*1000)
        // setIsRunning(true)
    }
    function handleStopTime(){
        // clearTimeout(timer.current)
        // setIsRunning(false)
        clearInterval(timer.current)
        dialog.current.open()
    }
  return (
    <section className="challenge">
        <Result ref = {dialog} time = {targetTime} timeRemaining = {timeRemaining} onReset = {onReset}/>
        <h2>{title}</h2>
        <p className='challenge-time'>{targetTime} second{targetTime > 0 ? 's': ""}</p>
        <p>
            <button onClick={isActive ? handleStopTime : handleStartTime }>{isActive ? 'Stop' : 'Start'} Challenge</button>
            <p>{isActive ? 'Timer Running' : 'Time inactive' }</p>
        </p>
    </section>
  )
}
