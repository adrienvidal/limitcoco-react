import React, { useContext } from 'react'
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
      <div className={style.top}>
        <QuestionBoard />
      </div>
      <div className={style.bottom}>
        {/* show answers cards if you ar not the king */}
        {game.hands[userId] ? <AnswerBoard /> : <p>You are the King</p>}
      </div>
    </div>
  )
}

export default Board
