import React from 'react'
import style from './index.module.scss'

const AnswerCard = ({ card }) => {
  return (
    <div className={style.main}>
      <p>{card.desc}</p>
    </div>
  )
}

export default AnswerCard
