import React from 'react'

export default function TabButton({onSelect, children, isSelected}) {
    
  return (
    <li><button className = {isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button></li>
  )
}
// in above code you can see that this onClick is nothing but passed as props to inbuilt button component and the clickHandler function is simply passed as value for that props. and this function will be automatically called by react when the user clicks on that button.