import React, { useState } from 'react'
import classes from './updateContact.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from '../../Redux/actions/userActions'
import { Button } from '../Shared/Button/Button'
import Input from '../Shared/Input'
export const UpdateContact = (props) => {
  const dispatch = useDispatch()
  const test = useSelector((state) => state)
  const [state, setState] = useState({
    name: props.user.name,
    lastName: props.user.lastName,
    phone: props.user.phone,
  })

  const inputHandler = (e) => {
    const stateCopy = { ...state }
    stateCopy[e.target.name] = e.target.value
    setState(stateCopy)
  }
  const updateUserHandler = (e) => {
    e.preventDefault()
    const userCopy = { ...props.user }
    userCopy.name = state.name
    userCopy.lastName = state.lastName
    userCopy.phone = state.phone
    dispatch(updateUser(userCopy))
    const propsState = { ...props.localState }
    propsState.updateContact = false
    props.setLocalState(propsState)
    console.log(test)
  }
  const closeFormHandler = () => {
    const propsState = { ...props.localState }
    propsState.updateContact = false
    props.setLocalState(propsState)
  }
  return (
    <form className={classes.updateContactForm} onSubmit={updateUserHandler}>
      <Button
        handler={closeFormHandler}
        type='button'
        styles={['closeFormBtn']}
      >
        x
      </Button>
      <Input
        type='text'
        name='name'
        id='contactName'
        value={state.name}
        styles={['addContactStyle']}
        handler={inputHandler}
      />
      <Input
        type='text'
        name='lastName'
        id='contactLastName'
        value={state.lastName}
        styles={['addContactStyle']}
        handler={inputHandler}
      />
      <Input
        type='tel'
        name='phone'
        id='contactPhone'
        value={state.phone}
        styles={['addContactStyle']}
        handler={inputHandler}
      />
      <Button type='submit'>Update</Button>
    </form>
  )
}
