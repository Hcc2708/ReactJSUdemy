import TabButton from "./TabButton"
import { EXAMPLES } from "../data";
import {useState} from 'react'
import Section from "./Section";
import Tab from "./Tab";
export default function Examples(){
      // let dynamic_content = "Please Select the button"
  //
  // const array = useState('Please Select the button')
  // or destructuring the array directly
  const [selectedButton, setSelectedButton] = useState("components")
  function clickHandler(text){
    // console.log("hello how are you")
    // console.log(selectedButton);
    // dynamic_content = selectedButton
    setSelectedButton(text)// here react scheduled the state update, since this is executing in the old component function the below log will print the last value of state not the udated one, once the scheduled state update will be executed the react will re render the component function and then we will get that updated value.
    // since while rerendering this component function after clicking on the button, we not immediately again clicking the button that is why this function won't be invoked while rerendering.
    console.log(selectedButton);
}
    return (
        <Section id = "examples">
            <h2>Examples</h2>
            <Tab buttons={<div><TabButton isSelected = {selectedButton === 'components'} onSelect = {()=>clickHandler('components')}>Components</TabButton>
            <TabButton isSelected = {selectedButton === 'jsx'} onSelect = {()=>clickHandler('jsx')}>Jsx</TabButton>
            <TabButton isSelected = {selectedButton === 'props'} onSelect = {()=>clickHandler('props')}>Props</TabButton>
            <TabButton isSelected = {selectedButton === 'state'} onSelect = {()=>clickHandler('state')}>State</TabButton></div>}> <div id="tab-content">
            <h3>{EXAMPLES[selectedButton].title}</h3>
            <p>{EXAMPLES[selectedButton].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedButton].code}
              </code>
            </pre>
          </div></Tab>
         
        </Section>
    )
}