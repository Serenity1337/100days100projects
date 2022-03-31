import React from 'react'
import classes from './Button.module.scss'
export const Button = ({ handler, type, children, styles = [] }) => {
  console.log(styles)
  const stylesCopy = []
  styles.map((style) => {
    stylesCopy.push(classes[style])
  })

  console.log(stylesCopy)

  return (
    <button type={type} className={stylesCopy.join(' ')} onClick={handler}>
      {children}
    </button>
  )
}
