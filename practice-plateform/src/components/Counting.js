import React from 'react'
import { useContext } from 'react'
import ContextApi from './ContexApi'
export default function Counting() {
    let val = useContext(ContextApi)
  return (
    <div>The value is {val.cnt}</div>
  )
}
