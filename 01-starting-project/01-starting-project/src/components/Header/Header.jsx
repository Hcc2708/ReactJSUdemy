import React from 'react'
import "./Header.css";
import reactImg from '../../assets/react-core-concepts.png'
export default function Header() {
  
    return(
        <header>
          <img src={reactImg}/>
            <h1>React Essentials</h1>
            <p>
              Fundamental React concepts you will need for almost any app you are
              going to build!
            </p>
        </header>
  )
}
