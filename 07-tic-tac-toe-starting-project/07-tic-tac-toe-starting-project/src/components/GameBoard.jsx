// import { useState } from "react"

export default function GameBoard({onSelectPlayer, turns}){
    
    // const [gameBoard, setGameBoard] = useState(initialGameBoard)

    // function handleSelectSquare(rowIndex, colIndex){
    //     setGameBoard((prevGameBoard)=>{
    //         // prevGameBoard[rowIndex][colIndex] = 'X' here updating the value directly using prevGameBoard will cause a bug or side effect if you have a multiple places in  your application that are scheduling the state update for this same state because this time the state value is a mul-dim-array which is stored in heap and it passes to the function as a refrence type, hence the value will be immediately changed for that reference rather than scheduling the state,  therfore you need to create the copy of this reference type.
    //         const updatedValue = [...prevGameBoard]
    //         updatedValue[rowIndex][colIndex] = playerSymbol
    //         console.log(updatedValue)
    //         return updatedValue
    //     })
    //     onSelectPlayer()
    // }

    
    // the defualt property of disabled is true in button if you only use <button disabled>. 
    return (
        <ol id = 'game-board'>
            {turns.map((row, rowIndex)=><li key = {rowIndex}>
                <ol>
                    {row.map((val, index)=><li key = {index}><button onClick={()=>onSelectPlayer(rowIndex, index)} disabled = {val !== null}>{val}</button></li>)}
                </ol>
            </li>)}
        </ol>
    )
}