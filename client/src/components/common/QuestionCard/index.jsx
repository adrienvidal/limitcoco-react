import React from 'react'
import style from './index.module.scss'

const QuestionCard = ({ card }) => {
  return (
    <div className={style.main}>
      <p>{card.text}</p>
    </div>
  )
}

export default QuestionCard
