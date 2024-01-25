// import CoreConcept from "./CoreConcept";
import {CORE_CONCEPTS}from '../data.js'
export default function CoreConcepts({CoreConcept}){
    return (
        <section id = 'core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((element)=>(<CoreConcept key = {element.title} {...element}></CoreConcept>))}
            {/* <CoreConcept title = {CORE_CONCEPTS[0].title} description = {CORE_CONCEPTS[0].description} image = {CORE_CONCEPTS[0].image} />
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/>  */}
            
            {/* <Components concept = {CORE_CONCEPTS[0]}/>  */}
            {/* the above code is one another level of abstraction and again you will have to accept it as prop you can not directly destructure it, you will have to access it like props.concept.title*/}
          </ul>
        </section>
        
    )
}