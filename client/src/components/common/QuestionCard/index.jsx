import React from 'react'
import style from './index.module.scss'

const QuestionCard = ({ card }) => {
  return (
    <div className={style.main} data-id={card.id}>
      <p>{card.text}</p>
    </div>
  )
}

export default QuestionCard
