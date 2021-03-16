import React, { useContext, Fragment } from 'react'
import style from './index.module.scss'

import QuestionBoard from '../QuestionBoard'
import AnswerBoard from '../AnswerBoard'

// context
import GameContext from '../../../context/game/gameContext'

const Board = () => {
  const gameContext = useContext(GameContext)
  const { state } = gameContext
  const { game, userId } = state

  return (
    <div className={style.main}>
      {game.king.id === userId ? (
        <QuestionBoard />
      ) : (
        <Fragment>
          <div className={style.top}>
            <QuestionBoard />
          </div>
          <div className={style.bottom}>
            <AnswerBoard />
          </div>
        </Fragment>
      )}
    </div>
  )
}

export default Board
