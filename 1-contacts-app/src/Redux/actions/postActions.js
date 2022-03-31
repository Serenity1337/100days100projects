import { actionTypes } from '../actionTypes/action-types'

export const createPost = (post) => {
  return {
    type: actionTypes.CREATE_POST,
    payload: post,
  }
}

export const deletePost = (post) => {
  return {
    type: actionTypes.DELETE_POST,
    payload: post,
  }
}
