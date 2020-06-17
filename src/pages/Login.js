import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
const validCredentails = {
    name: 'Jon Doe',
    profileImg: 'https://cdn.quasar.dev/img/boy-avatar.png',
    username: 'admin',
    password: '123456'
}

const Login = () => {
    let history = useHistory()

    // Hooks
    useEffect (() => {
        if (localStorage.token) {
            redirectToDashboard()
        }
    }, [])

    // State bindings
    const [ credentials, setCredentails ] = useState({ username: '', password: '' })
    const [ message, setMessage ] = useState('')

    // Methods
    const redirectToDashboard = () => {
        history.push("/dashboard")
    }
    const checkLogin = (e) => {
        e.preventDefault()
        setMessage('')
        console.log(credentials, validCredentails)
        if (credentials.username === validCredentails.username && credentials.password === validCredentails.password) {
            // Store in localstorage
            localStorage.token = "SomerandomBearerToken";
            localStorage.username = validCredentails.name
            localStorage.profileImg = validCredentails.profileImg
            // redirect to dashboard page
            redirectToDashboard()
        } else {
            setMessage('Credentails do not match. Try Again')
        }
    }
    return (
        <>
        <h1>Login Page</h1>
        <form style={{ display: 'block', padding: '10vw' }} onSubmit={checkLogin}>
            <div>
            <input type="text" required value={credentials.username} onChange={(e) => setCredentails({ username: e.target.value, password: credentials.password  }) } />
            </div>
            <div>
            <input type="password" required value={credentials.password} onChange={(e) => setCredentails({ username: credentials.username ,password: e.target.value }) } />
            </div>
            <button type="submit">Login</button>
            { message }
        </form>
        </>
    )
}


export default Login
