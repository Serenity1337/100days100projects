import { actionTypes } from '../actionTypes/action-types'

export const userReducer = (
  state = [
    { name: 'test', lastName: 'test123', phone: '8 69999999', id: '1' },
    { name: 'test', lastName: 'test123', phone: '8 69999999', id: '2' },
    { name: 'test', lastName: 'test123', phone: '8 69999999', id: '3' },
    { name: 'test', lastName: 'test123', phone: '8 69999999', id: '4' },
    { name: 'test', lastName: 'test123', phone: '8 69999999', id: '5' },
    { name: 'test', lastName: 'test123', phone: '8 69999999', id: '6' },
    { name: 'test', lastName: 'test123', phone: '8 69999999', id: '7' },
    { name: 'test', lastName: 'test123', phone: '8 69999999', id: '8' },
    { name: 'test', lastName: 'test123', phone: '8 69999999', id: '9' },
    { name: 'test', lastName: 'test123', phone: '8 69999999', id: '10' },
    { name: 'test', lastName: 'test123', phone: '8 69999999', id: '11' },
  ],
  action
) => {
  switch (action.type) {
    case actionTypes.CREATE_USER:
      return [...state, action.payload]
    case actionTypes.DELETE_USER:
      return state.filter((user) => user.id !== action.payload.id)
    case actionTypes.UPDATE_USER:
      const stateCopy = [...state]
      console.log(stateCopy)
      const found = state.findIndex((user) => user.id === action.payload.id)
      console.log(found)
      stateCopy[found] = action.payload
      return stateCopy
    default:
      return state
  }
}
