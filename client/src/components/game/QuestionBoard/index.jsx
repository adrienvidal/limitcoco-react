import React, { Fragment, useContext } from 'react'
import QuestionCard from '../../common/QuestionCard'
import style from './index.module.scss'

// context
import GameContext from '../../../context/game/gameContext'

const QuestionBoard = () => {
  const gameContext = useContext(GameContext)
  const { state } = gameContext
  const { game, userId } = state

  return (
    <Fragment>
      {game.king.id === userId && (
        <h3 className={style.title}>Your are the King !</h3>
      )}
      <div className={style['card-wrapper']}>
        <QuestionCard card={game.king.question} />
      </div>
    </Fragment>
  )
}

export default QuestionBoard
