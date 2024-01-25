import Log from "../../../07-tic-tac-toe-starting-project/07-tic-tac-toe-starting-project/src/components/Log"
import Input from "./component/Input"
import {useState} from 'react'
import Result from "./component/Result"
function App() {
  const [state, setProperty] = useState({
    'initialInvestment':12000,
    'annualInvestment' : 50000,
    'expectedReturn' : 6, 
    'duration' : 10
})
function updateValue(para, value){
    setProperty((preState)=>({
        ...preState,
        [para] : +value
    }))
}
console.log(state.initialInvestment);
  return (
   <>
   <Input data = {state}  handleOnChange= {updateValue}/>
   <Result prop = {state}/>
   </>
  )
}

export default App
