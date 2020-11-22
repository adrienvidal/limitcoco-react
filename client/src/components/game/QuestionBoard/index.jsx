import React from 'react'
import QuestionCard from '../../common/QuestionCard'
import style from './index.module.scss'

const QuestionBoard = () => {
  return (
    <div className={style['card-wrapper']}>
      <QuestionCard />
    </div>
  )
}

export default QuestionBoard
