import React, { useEffect, useContext, Fragment } from 'react'
import QuestionCard from '../../common/QuestionCard'
import AnswerCard from '../../common/AnswerCard'
import style from './index.module.scss'

// context
import GameContext from '../../../context/game/gameContext'

const QuestionBoard = () => {
  const gameContext = useContext(GameContext)
  const { state, pushPlayersAnswers } = gameContext
  const { game, userId } = state

  useEffect(() => {
    if (game.king.id === userId) {
      pushPlayersAnswers()
    }
  }, [])

  // game.phase.phaseGame === 0

  return (
    <div className={style.main}>
      {game.king.id === userId && (
        <Fragment>
          {game.phase.phaseGame === 0 && (
            <h3 className={style.title}>Your are the King !</h3>
          )}
          {game.phase.phaseGame === 1 && (
            <h3 className={style.title}>Choose your favorite answer(s) !</h3>
          )}
        </Fragment>
      )}
      <div className={style.wrapper}>
        <QuestionCard card={game.king.question} />
      </div>
    </div>
  )
}

export default QuestionBoard
