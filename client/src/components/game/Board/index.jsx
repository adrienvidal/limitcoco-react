import React, { useContext } from 'react'
import style from './index.module.scss'

import QuestionBoard from '../QuestionBoard'
import AnswerBoard from '../AnswerBoard'
import AnswerChoiceBoard from '../AnswerChoiceBoard'

// context
import GameContext from '../../../context/game/gameContext'

const Board = () => {
  const gameContext = useContext(GameContext)
  const { state } = gameContext
  const { game, userId } = state

  return (
    <div className={style.main}>
      <div className={style.top}>
        {game.kingId === userId ? <AnswerChoiceBoard /> : <QuestionBoard />}
      </div>
      <div className={style.bottom}>
        {game.kingId === userId ? <QuestionBoard /> : <AnswerBoard />}
      </div>
    </div>
  )
}

export default Board
