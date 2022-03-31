import React, { useState } from 'react'
import classes from './AddContact.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { createUser } from '../../Redux/actions/userActions'
import { Button } from '../Shared/Button/Button'
import Input from '../Shared/Input'
export const AddContact = (props) => {
  const dispatch = useDispatch()
  const test = useSelector((state) => state)
  const [state, setState] = useState({
    name: '',
    lastName: '',
    phone: '',
  })

  const inputHandler = (e) => {
    const stateCopy = { ...state }
    stateCopy[e.target.name] = e.target.value
    setState(stateCopy)
  }
  const updateUserHandler = (e) => {
    e.preventDefault()
    state.id = '13'
    dispatch(createUser(state))
    const propsState = { ...props.localState }
    propsState.createContact = false
    props.setLocalState(propsState)
    console.log(test)
  }
  const closeFormHandler = () => {
    const propsState = { ...props.localState }
    propsState.createContact = false
    props.setLocalState(propsState)
  }
  return (
    <form className={classes.updateContactForm} onSubmit={updateUserHandler}>
      <Button
        type='button'
        handler={closeFormHandler}
        styles={['closeFormBtn']}
      >
        x
      </Button>
      <Input
        type='text'
        name='name'
        id='contactName'
        value={state.name}
        handler={inputHandler}
        styles={['addContactStyle']}
      />
      <Input
        type='text'
        name='lastName'
        id='contactLastName'
        value={state.lastName}
        handler={inputHandler}
        styles={['addContactStyle']}
      />
      <Input
        type='tel'
        name='phone'
        id='contactPhone'
        value={state.phone}
        handler={inputHandler}
        styles={['addContactStyle']}
      />

      <Button type='submit'>Create new</Button>
    </form>
  )
}
