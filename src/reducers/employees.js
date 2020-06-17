import { ADD_EMPLOYEE, LOAD_EMPLOYEE, UPDATE_EMPLOYEE, DELETE_EMPLOYEE } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case ADD_EMPLOYEE:
      const id = state[state.length - 1].id + 1
      return [...state, { id , ...action.payload }]
    case LOAD_EMPLOYEE:
      return [...state, ...action.payload];
    case UPDATE_EMPLOYEE:
      return state.map(employee =>
        employee.id === action.payload.id
          ? { ...action.payload }
          : employee
      );
    case DELETE_EMPLOYEE:
      return state.filter(emp => Number(emp.id) !== Number(action.payload.id))
    default:
      return state;
  }
};
