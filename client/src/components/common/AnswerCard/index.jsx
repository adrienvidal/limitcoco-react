import React from 'react'
import style from './index.module.scss'

const AnswerCard = ({ card, location }) => {
  return (
    <div
      className={`${style.main} ${card.selection === 1 ? style.active : ''} ${
        location === 'modal' ? style['modal'] : ''
      }`}
    >
      <p>{card.text}</p>
    </div>
  )
}

export default AnswerCard
