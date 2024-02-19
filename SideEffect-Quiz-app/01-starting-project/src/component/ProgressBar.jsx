import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function ProgressBar({timer, handleTimeout}) {
    const [remainingTime, setRemainingTime] = useState(timer)
    useEffect(()=>{
        const interval = setInterval(()=>{
            setRemainingTime(preRemainingTime => preRemainingTime - 100)
            // console.log("i am still executing")
        }, 100)
        return ()=>{
            clearInterval(interval)
        }
    }, [])
    useEffect(()=>{
        const timer1 = setTimeout(()=>{
            handleTimeout()
        },  timer)
        return ()=>{
            clearTimeout(timer1)
        }
    }, [timer, handleTimeout])
  return (
    <progress value = {remainingTime} max = {timer}/>
  )
}
