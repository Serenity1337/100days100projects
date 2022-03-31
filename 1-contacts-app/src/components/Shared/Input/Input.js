import React from 'react'
import classes from './Input.module.scss'
export const Input = ({ type, name, id, value, styles = [], handler }) => {
  const stylesCopy = []
  styles.map((style) => {
    stylesCopy.push(classes[style])
  })
  return (
    <input
      type={type}
      name={name}
      id={id}
      value={value}
      styles={stylesCopy.join(' ')}
      onChange={handler}
    />
  )
}
