import React, { useContext, Fragment } from 'react'
import style from './index.module.scss'

import QuestionBoard from '../QuestionBoard'
import AnswerBoard from '../AnswerBoard'
import AnswerChoiceBoard from '../AnswerChoiceBoard'
import KingChoiceBoard from '../KingChoiceBoard'

// context
import GameContext from '../../../context/game/gameContext'

const Board = () => {
  const gameContext = useContext(GameContext)
  const { state } = gameContext
  const { game, userId } = state

  return (
    <div className={style.main}>
      {game.phase.phaseGame === 0 && (
        <Fragment>
          <div className={style.top}>
            {game.king.id === userId ? (
              <AnswerChoiceBoard />
            ) : (
              <QuestionBoard />
            )}
          </div>
          <div className={style.bottom}>
            {game.king.id === userId ? <QuestionBoard /> : <AnswerBoard />}
          </div>
        </Fragment>
      )}

      {game.phase.phaseGame === 1 && <KingChoiceBoard />}
    </div>
  )
}

export default Board
