import React from "react"
import EachSpending from "./EachSpending"
import './stylesheet.css';
const CurrentMonthSpending=(props)=>{
    return(
        <table className="spending-header">
            <tbody>
            <tr key={'f'}>
                <th>Category</th>
                <th>Amount</th>
                <th>Description</th>
                <th>Date</th>
                <th>Delete</th>
            </tr>
            {props.spendings.map(eachSpending =>{
                    return <EachSpending spending={eachSpending} key={eachSpending.id} click={props.click} deleteSpending={props.deleteSpending}/>
            })}
            </tbody>
        </table>
    )
}
export default CurrentMonthSpending