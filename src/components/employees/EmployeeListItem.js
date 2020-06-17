import React from 'react'
import { Link } from "react-router-dom"

function EmployeeListItem ({ emp, deleteEmployee, editEmployee }) {
    const  { id ,type, login } = emp
    return (
        <li>
         {id} {type} - {login}
        <Link to={`/employee/${emp.id}`}>Show Details</Link>
        <button onClick={(e) => deleteEmployee(emp)} >Delete</button>
        <button onClick={(e) => editEmployee(emp)} >Edit</button>
        <Link to={`/employee/${emp.id}/update`}>Edit</Link>
        </li>
    )
}

export default EmployeeListItem

