import React from 'react'
import style from './index.module.scss'

import QuestionBoard from '../QuestionBoard'
import AnswerBoard from '../AnswerBoard'

const Board = () => {
  return (
    <div className={style.main}>
      <div className={style.top}>
        <QuestionBoard />
      </div>
      <div className={style.bottom}>
        <AnswerBoard />
      </div>
    </div>
  )
}

export default Board
