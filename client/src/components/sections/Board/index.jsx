import React from 'react'
import QuestionCard from '../../common/QuestionCard'
import AnswerCard from '../../common/AnswerCard'
import style from './index.module.scss'

const Board = () => {
  const answerCards = [
    'Le slip de Jean-Pierre',
    'Le slip de Jean-Pierre',
    'Le slip de Jean-Pierre',
    'Le slip de Jean-Pierre',
    'Le slip de Jean-Pierre',
  ]

  return (
    <div className={style.main}>
      <div className={style.top}>
        <div className={style['card-wrapper']}>
          <QuestionCard />
        </div>
      </div>
      <div className={style.bottom}>
        <h3 className={style.title}>Choose your card(s)</h3>
        <div className={style['cards-hand']}>
          {answerCards.map((answerCard) => (
            <div className={style['card-wrapper']}>
              <AnswerCard />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Board
