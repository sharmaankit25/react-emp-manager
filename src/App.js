import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Provider } from "react-redux"
import './App.css'
import store from "./store"

import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import EmployeeDetailsPage from './pages/EmployeeDetailsPage'
import UpdateEmployeePage from './pages/UpdateEmployeePage'

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Route exact path="/" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
      <Route exact path="/employee/:id" component={EmployeeDetailsPage} />
      <Route path="/employee/:id/update" component={UpdateEmployeePage} />
    </Router>
    </Provider>
  );
}

export default App;
