import React from 'react'
import { useState } from 'react'
export default function ProgressBar({timer}) {
    const [remainingTime, setRemainingTime] = useState(timer)
  useEffect(()=>{
    const interval = setInterval(()=>{
      setRemainingTime((preRemainingTime)=>preRemainingTime - 10)
      console.log("interval executing");
    },10)
    return ()=>{
      clearInterval(interval)
    }
  }, [])

  return (
    <progress value = {remainingTime} max = {timer}/>
  )
}
