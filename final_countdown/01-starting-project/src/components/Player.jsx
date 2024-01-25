import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef()
  const [name, setName] = useState(null)
  function handleClick(){
    setName(playerName.current.value)
    // in above code the playerName.current is an javascript object which is holding input field as value. that is why we are able to access the value field of input.
  }
  return (
    <section id="player">
      <h2>Welcome {name ?? 'unknown entity'}</h2>
      <p>
        <input ref = {playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
