import {
  ADD_EMPLOYEE,
  LOAD_EMPLOYEE,
  DELETE_EMPLOYEE,
  UPDATE_EMPLOYEE
} from "./types";

import axios from 'axios'

export const loadEmployee = () => async dispatch => {
  try{
    const {data} = await axios.get('https://api.github.com/users')
    return dispatch({
      type: LOAD_EMPLOYEE,
      payload: data
    })
  }catch(err){
    console.log(err)
  }
}

export const addEmployee = (employee) => {
  return {
    type: ADD_EMPLOYEE,
    payload: employee
  }
};

export const editEmployee = (employee) => {
  return {
    type: UPDATE_EMPLOYEE,
    payload: employee
  }
}

export const deleteEmployee = (employee) => {
  return {
    type: DELETE_EMPLOYEE,
    payload: employee
  }
}

