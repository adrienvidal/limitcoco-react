import React, { useContext } from 'react'
import QuestionCard from '../../common/QuestionCard'
import style from './index.module.scss'

// context
import GameContext from '../../../context/game/gameContext'

const QuestionBoard = () => {
  const gameContext = useContext(GameContext)
  const { currentQuestion } = gameContext

  return (
    <div className={style['card-wrapper']}>
      <QuestionCard card={currentQuestion} />
    </div>
  )
}

export default QuestionBoard
