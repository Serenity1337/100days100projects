import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import UpdateContact from '../updateContact'
import AddContact from '../addContact'
import classes from './contactList.module.scss'
import { deleteUser } from '../../Redux/actions/userActions'
import { Button } from '../Shared/Button/Button'
export const ContactList = () => {
  const renderList = (users) => {
    return users.map((user, index) => (
      <li className={classes.contactCard}>
        <div className={classes.avatar}></div>
        <div className={classes.textContainer}>
          <div className={classes.name}>
            {user.name} {user.lastName}
          </div>
          <div className={classes.phone}>{user.phone}</div>
        </div>
        <div className={classes.buttonContainer}>
          <Button
            styles={['updateContactBtn']}
            handler={updateBtnHandler}
            type='button'
          >
            Update
          </Button>
          <Button
            styles={['deleteContactBtn']}
            handler={() => deleteContactHandler(user)}
            type='button'
          >
            Delete
          </Button>
        </div>
      </li>
    ))
  }

  const dispatch = useDispatch()
  const state = useSelector((state) => state.users)
  const [localState, setLocalState] = useState({
    updateContact: false,
    createContact: false,
  })

  const updateBtnHandler = () => {
    const localStateCopy = { ...localState }
    localStateCopy.updateContact = true
    setLocalState(localStateCopy)
  }
  const deleteContactHandler = (user) => {
    dispatch(deleteUser(user))
  }
  const createContactHandler = () => {
    const localStateCopy = { ...localState }
    localStateCopy.createContact = true
    setLocalState(localStateCopy)
  }

  return (
    <div className={classes.contactListContainer}>
      {localState.updateContact ? (
        <UpdateContact
          user={state[0]}
          localState={localState}
          setLocalState={setLocalState}
        />
      ) : null}
      {localState.createContact ? (
        <AddContact
          user={state[0]}
          localState={localState}
          setLocalState={setLocalState}
        />
      ) : null}
      <h1>
        {state.length === 1
          ? `You have ${state.length} contact`
          : `You have ${state.length} contacts`}
      </h1>
      <Button
        styles={['createContactBtn']}
        handler={createContactHandler}
        type='button'
      >
        Create new contact
      </Button>
      <ul className={classes.contactList}>{renderList(state)}</ul>
    </div>
  )
}
