import React from "react";
import { useState } from "react";
import {styled} from 'styled-components'

export default function Input({data, handleOnChange}) {
   
  return (
    <section id="user-input">
    <div className="input-group">
      <p> <label>INITIAL INVESTMENT</label>
      <input type="number" value = {data['initialInvestment']}  onChange={(event)=>handleOnChange('initialInvestment', event.target.value)} /></p>
     
      <p><label>ANNUAL INVESTMENT</label>
      <input type="number" value = {data['annualInvestment']} onChange={(event)=>handleOnChange('annualInvestment', event.target.value)}/></p> </div>
      <div className="input-group">
      <p><label>EXPECTED RETURN</label>
      <input type="number" value = {data['expectedReturn']} onChange={(event)=>handleOnChange('expectedReturn', event.target.value)}/></p>
      
      <p><label>DURATION</label>
      <input type="number" value = {data['duration']} onChange={(event)=>handleOnChange('duration', event.target.value)}/></p>
      
    </div>
    </section>
  );
}
