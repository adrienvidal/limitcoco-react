import React from 'react'
import style from './index.module.scss'

export const Button1 = ({ text, onAction }) => {
  return (
    <button className={style.main} onClick={() => onAction()}>
      {text}
    </button>
  )
}
