import { actionTypes } from '../actionTypes/action-types'

export const postReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.CREATE_POST:
      return [...state, action.payload]
    case actionTypes.DELETE_POST:
      return state.filter((post) => post.id !== action.payload.id)
    default:
      return state
  }
}
