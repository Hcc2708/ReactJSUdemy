import { useState } from "react"

export default function Players({initialName, symbol, isActive, declareWinner}){
    const [isEditing, setIsEditing] = useState(false)
    const [playerName, setPlayerName] = useState(initialName)
    let ele = <span className="player-name">{playerName}</span>
    if(isEditing)
    {
        ele = <input type = "text" required value={playerName} onChange={(event)=>setPlayerName(event.target.value)}></input>
        //value attribute in input tag allows to set the value for input field and it everytimes override the that field with the value provide to it, using onChange event which provide the event object for every keystroke in input field, we can then get the value entered in the field and again feed that value to value attribute of the input field, this also called tow way binding. hence in above code you should notice that the value attribute of field is changing because of the playerName is changing with every keystroke.
    }
    // function clickHandler(){
    //     // setIsEditing(!isEditing)
    //     // setIsEditing(!isEditing)
    //     // // above both the function will have the same initial value for isEdiging because this is in same component function lifecycle.
    //     // // instead for better practice use this one

    //     // setIsEditing(editing => !editing)// value of editing will be false first 
    //     setIsEditing(editing => !editing) // now the value of editing will be true here which is the letest state value.

    //     // well these above scenarios are for required code if immediately again state change is rquired.

    // }
    return(
        <li className={isActive ? 'active':undefined}><span className="player"> {ele}
        <span className="player-symbol">{symbol}</span></span>
        <button onClick={()=>{
            setIsEditing(!isEditing)
            if(isEditing)
            {
                declareWinner(symbol, playerName)
            }
        }}>{isEditing === true? "Save" : "Edit"}</button></li>
    )
}