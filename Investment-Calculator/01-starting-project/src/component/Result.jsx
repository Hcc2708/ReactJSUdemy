import React from 'react'
import { calculateInvestmentResults } from '../util/investment'
import { formatter } from '../util/investment';
export default function Result({prop}) {
  const result = calculateInvestmentResults(prop);
  console.log(result);
 
  return (
    <table id = 'result'>
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest(Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {result.map((val)=>{
         const totalInterest = val.valueEndOfYear - val.annualInvestment * val.year - prop.initialInvestment;
         const totalAmountInvested = val.valueEndOfYear - totalInterest
        return <tr key = {val.year}>
        <td>{val.year}</td>
        <td>{formatter.format(val.valueEndOfYear) }</td>
        <td>{formatter.format(val.interest) }</td>
        <td>{formatter.format(totalInterest)  }</td>
        <td>{totalAmountInvested}</td> 
        </tr>})}
      </tbody>
    </table>
  )
}
