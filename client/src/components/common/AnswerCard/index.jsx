import React from 'react'
import style from './index.module.scss'

const AnswerCard = ({ card }) => {
  return (
    <div className={`${style.main} ${card.isSelected ? style.active : ''}`}>
      <p>{card.text}</p>
    </div>
  )
}

export default AnswerCard
