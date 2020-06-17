import React, { useState } from 'react'
import  { connect } from 'react-redux'
import { addEmployee } from '../../actions'

function AddEmployeeForm ({ addEmployee }) {
    const initForm = { type: '', login: '' }
    const [ form, setForm ] = useState(initForm)

    const handleForm = (e) => {
        e.preventDefault()
        addEmployee(form)
        setForm(initForm)
    }
    return (
        <form style={{ padding: '15px' }} onSubmit={handleForm}>
            <input type="text" value={form.type} placeholder="User Type" onChange={(e) => setForm({ ...form, type: e.target.value }) } />
            <input type="text" value={form.login} placeholder="Name" onChange={(e) => setForm({ ...form, login: e.target.value }) } />
            <button type="submit">Submit</button>
        </form>
    )
}

export default connect(null, { addEmployee })(AddEmployeeForm)
