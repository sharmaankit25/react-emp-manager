import React, { useEffect } from 'react'
import { connect } from "react-redux"
import { deleteEmployee, loadEmployee } from '../../actions/'
import EmployeeListItem from './EmployeeListItem'

function EmployeeList ({ showDetails, employees, loadEmployee, deleteEmployee }) {
    useEffect (() => {
        const fetchEmployees = async ()  => {
            await loadEmployee ()
        }
        fetchEmployees()
    }, [])

    if (employees.length <= 0) {
        return (<div>Loading ...</div>)
    }

    // Methods
    return (
        <ul>
            {
                employees.map(emp => {
                    return (<EmployeeListItem
                        showDetails={showDetails}
                        deleteEmployee={deleteEmployee}
                        emp={emp}
                        key={emp.id} />)
                })
            }
        </ul>
    )
}

const mapStateToProps = ({ employees }) => {
    return { employees }
}

export default connect(mapStateToProps, { deleteEmployee, loadEmployee })(EmployeeList);
