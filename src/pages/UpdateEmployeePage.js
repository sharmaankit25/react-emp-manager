import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams, useHistory } from "react-router-dom"
import { editEmployee } from '../actions'

function UpdateEmployeePage ({ employees, editEmployee }) {
    let { id } = useParams()
    let history = useHistory()

    useEffect (() => {
        const employee = employees.find(emp => Number(emp.id) === Number(id))
        if (employee) {
            setEmployee(employee)
        } else {
            history.push("/dashboard")
        }
    }, [])
    const [ employee, setEmployee ]  = useState({})

    const handleForm = (e) => {
        e.preventDefault()
        editEmployee(employee)
        history.push("/dashboard")
    }

    return (
        <>
            <p>Update Employee</p>
            <form onSubmit={handleForm} >
                <input type="text" value={employee.type} onChange={(e) => setEmployee({ ...employee, type: e.target.value }) } />
                <input type="text" value={employee.login} onChange={(e) => setEmployee({ ...employee, login: e.target.value }) } />
                <button type="submit">Update</button>
            </form>
        </>
    )
}

const mapStateToProps = ({ employees }) => {
    return { employees }
}
export default connect(mapStateToProps, { editEmployee })(UpdateEmployeePage)
