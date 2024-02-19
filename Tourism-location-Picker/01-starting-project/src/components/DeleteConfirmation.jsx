import { useEffect, useState} from "react";
import ProgressBar from "./ProgressBar";

const TIMER = 3000
export default function DeleteConfirmation({ onConfirm, onCancel }) {
  
  
  useEffect(()=>{
    const timer = setTimeout(()=>{
      console.log("i am already executed");
      onConfirm()
    }, TIMER)
    return ()=>{
      clearTimeout(timer)// this cleanup function will be executed right before the DeleteConfirmation function gets removed(unmounted) from dom or just before the useEffect function re-execute again because of dependencies.
    }
  }, [onConfirm]) // when passing the function as dependencies it might cause a problem of infinite loop based on the component rendering, if the component rendering in not conditional and rendered always as children of app then whenever app component re renders will create a brand new function passed to onConfirm, and javascript consider two function defferent even they have same code structure. and that is why this useEffect will run again by considering onConfirm value has been changed, but when you pass any state as primitive values it won't execute again because it only focus on those values like if it's true them it will be also equal to new value of true, but this is not the case with funcitons or objects. here we are not facing that issue because this component is conditioaly rendered. 

  // and to avoid above infinite loop problem we use useCallback function which basically memorize the creacted function and don't recreate it due to re render of component, the function will be re created only when you change it's dependencies.
  
  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <ProgressBar timer={TIMER}/>
    </div>
  );
}
