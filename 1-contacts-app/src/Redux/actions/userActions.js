import { actionTypes } from '../actionTypes/action-types'

export const createUser = (user) => {
  return {
    type: actionTypes.CREATE_USER,
    payload: user,
  }
}

export const deleteUser = (user) => {
  return {
    type: actionTypes.DELETE_USER,
    payload: user,
  }
}

export const updateUser = (user) => {
  return {
    type: actionTypes.UPDATE_USER,
    payload: user,
  }
}
