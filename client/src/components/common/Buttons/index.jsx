import React from 'react'
import style from './index.module.scss'

export const Button1 = ({ text, onAction }) => {
  return (
    <button
      type='button'
      className={style.button1}
      onClick={() => (onAction ? onAction() : null)}
    >
      {text}
    </button>
  )
}

export const Button2 = ({ text, onAction }) => {
  return (
    <button
      type='button'
      className={style.button2}
      onClick={() => (onAction ? onAction() : null)}
    >
      {text}
    </button>
  )
}
