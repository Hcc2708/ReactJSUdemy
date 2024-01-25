import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Players from "./components/Players"
import Log from "./components/Log"
import { WINNING_COMBINATIONS } from "./winning-combinations"
import GameOver from "./components/GameOver"

// Note: in React you should try to manage as little(lesser) state as needed and try to derive as much value as possible.
let INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]
let PLAYERS = {
  'X':'Player 1',
  'O':'Player 2'
}
function activePlayer(gameTurn)
{
  let currentPlayer = 'X'
  if(gameTurn.length > 0 && gameTurn[0].player === 'X')
  {
    currentPlayer = 'O'
  }
  return currentPlayer
}
function setGameBoard(gameTurn){
  let gameBoard = [...INITIAL_GAME_BOARD.map(array =>[...array])]
  for (const turn of gameTurn) {
    let square = turn.square
    let row = square.row
    let col = square.col
    let player = turn.player
    gameBoard[row][col] = player
}
return gameBoard
}

function setWinnerName(gameBoard, player){
  let winner;
 
  for (const combination of WINNING_COMBINATIONS) {
    let firstSymbol = gameBoard[combination[0].row][combination[0].column]
    let secondSymbol = gameBoard[combination[1].row][combination[1].column]
    let thirdSymbol = gameBoard[combination[2].row][combination[2].column]
    if(firstSymbol && firstSymbol === secondSymbol && firstSymbol === thirdSymbol)
    {
      winner = player[firstSymbol]
    }
  }
  return winner
}

// only the below App function will be reexecuted when the state will be updated.
function App() {
  
  const [player, setPlayer] = useState(PLAYERS)
  const [gameTurn, setGameTurn] = useState([])
  let gameBoard = setGameBoard(gameTurn)
  // const [selectedPlayer, setSelectedPlayer] = useState('X')

  let selectedPlayer = activePlayer(gameTurn)
  // function handleSelectedPlayer(){
  //   setSelectedPlayer((prevSelected)=> prevSelected ==='X'? 'O':'X')
  // }
  let winner = setWinnerName(gameBoard, player)
  function handleGameTurn(rowIndex, colIndex){
    setGameTurn((prevTurn)=>{
      let updatedTurn = [{square : {row : rowIndex, col: colIndex}, player : activePlayer(prevTurn) }, ...prevTurn]
      return updatedTurn;
    })
    // handleSelectedPlayer();
  }
  
  function handleRematch(){
    setGameTurn([])
  }
  function setWinner(symbol, name){
    setPlayer(prevPlayer => ({
      ...prevPlayer,
      [symbol] : name
    }))
  }
  return (
    <main>
      <div id = 'game-container'>
      <ol id="players" className="highlight-player">
        <Players initialName = "Player 1" symbol = "X" isActive = {selectedPlayer === 'X'} declareWinner = {setWinner}/>
        <Players initialName = "Player 2" symbol = "O" isActive = {selectedPlayer === 'O'} declareWinner = {setWinner}/>
      </ol>
      {/* {winner && <p>You have won {winner}</p>}
       */}
      {(winner || gameTurn.length === 9) && <GameOver winner={winner} restart={handleRematch}/>}
      <GameBoard onSelectPlayer = {handleGameTurn} turns = {gameBoard}/>
      </div>
      <Log turns = {gameTurn}/>
    </main>
    )
}

export default App
