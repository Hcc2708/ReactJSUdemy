import React, { useImperativeHandle, useRef } from 'react'
import {forwardRef} from 'react'
const Result = forwardRef(function Result({time, timeRemaining, onReset}, ref) {
    const dialog = useRef()
    let inSecond = timeRemaining / 1000
    let score = Math.round((1 - timeRemaining/(time * 1000)) * 100)
    let lost = timeRemaining <= 0
    useImperativeHandle(ref, ()=>{
        return {
            open(){
                dialog.current.showModal()
            }
        }
    })
  return (
    <dialog ref = {dialog} className='result-modal'>
    {lost && <h2>You Lost</h2>}
    {!lost && <h2>Your Score {score}</h2> }
    <p>
        The target time was <strong>{time} seconds</strong>
    </p>
    <p>
        You stoped the timer <strong>{inSecond} second left</strong>
    </p>
    <form method='dialog' onSubmit={onReset} onClose= {onReset}>
        <button>Close</button>
    </form>
    </dialog>
  )
})
export default Result

// by defualt the dialog is invisible you need to use open attribute inside the dialog tag either use .showModel() function.
// when you take a dialog the button inside the form tag can be use to close the dialog by using method = 'dialog'.