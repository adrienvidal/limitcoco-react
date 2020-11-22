import React, { Fragment } from 'react'
import AnswerCard from '../../common/AnswerCard'
import style from './index.module.scss'

const QuestionBoard = () => {
  const answerCards = [
    'Le slip de Jean-Pierre',
    'Le slip de Jean-Pierre',
    'Le slip de Jean-Pierre',
    'Le slip de Jean-Pierre',
    'Le slip de Jean-Pierre',
  ]
  return (
    <Fragment>
      <h3 className={style.title}>Choose your card(s)</h3>
      <div className={style['cards-hand']}>
        {answerCards.map((answerCard) => (
          <div className={style['card-wrapper']}>
            <AnswerCard />
          </div>
        ))}
      </div>
    </Fragment>
  )
}

export default QuestionBoard
