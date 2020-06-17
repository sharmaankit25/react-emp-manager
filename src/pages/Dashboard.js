import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import EmployeeList from '../components/employees/EmployeeList'
import AddEmployeeForm from '../components/employees/AddEmployeeForm'

const Dashboard = () => {
    let history = useHistory()
    useEffect (() => {
        if (!localStorage.token) {
            return redirectToLogin()
        }
    }, [])

    // Methods
    const redirectToLogin = () => {
        history.push("/")
    }
    const logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        redirectToLogin()
    }

    return (
        <>
        <h1>Dashboard Page</h1>
        <img src={ localStorage.profileImg } style={{ width:'100px', height: '100px' }} />
        { localStorage.username }
        <button onClick={logout}> Logout</button>
        <AddEmployeeForm/>
        <EmployeeList/>
        </>
    )
}

export default Dashboard
