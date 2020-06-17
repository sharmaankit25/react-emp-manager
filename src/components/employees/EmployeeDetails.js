import React from 'react'

function EmployeeDetails ({ emp }) {
    return (
        <div style={{ padding: '100px' }}>{emp.login} - { emp.type}</div>
    )
}

export default EmployeeDetails
