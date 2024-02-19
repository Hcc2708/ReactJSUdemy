import React from 'react'
import logoImg from '../assets/quiz-logo.png'
export default function Header() {
  return (
    <header>
        <img src = {logoImg} />
        <h2>REACTQUIZ</h2>
    </header>
  )
}
