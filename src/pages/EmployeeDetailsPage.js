import React from 'react'
import { useParams, Link, useHistory } from "react-router-dom";
import { connect } from 'react-redux'
import EmployeeDetails from '../components/employees/EmployeeDetails'

function EmployeeDetailsPage ({employees}) {
    let { id } = useParams()
    let history = useHistory()
    if (employees.length <= 0) {
        history.push("/dashboard")
        return (<div>Not Able to load</div>)
    }
    const emp = employees && employees.find(emp => Number(emp.id) === Number(id))
    return (
        <>
        <Link to="/dashboard">Back</Link>
        <EmployeeDetails emp={emp} />
        </>
    )
}
const mapStateToProps = ({ employees }) => {
    return { employees }
}
export default connect(mapStateToProps)(EmployeeDetailsPage)
