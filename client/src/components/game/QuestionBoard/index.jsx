import React, { useContext } from 'react'
import QuestionCard from '../../common/QuestionCard'
import style from './index.module.scss'

// context
import GameContext from '../../../context/game/gameContext'

const QuestionBoard = () => {
  const gameContext = useContext(GameContext)
  const { state } = gameContext
  const { game } = state

  return (
    <div className={style['card-wrapper']}>
      <QuestionCard card={game.question} />
    </div>
  )
}

export default QuestionBoard
