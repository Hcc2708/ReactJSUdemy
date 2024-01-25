import React from 'react'

export default function Log({turns}) {
  return (
   <ol id="log">
    {turns.map((val)=><li key = {`${val.square.row} ${val.square.col}`}>{val.player} selected {val.square.row} {val.square.col}</li>)}
   </ol>
  )
}
