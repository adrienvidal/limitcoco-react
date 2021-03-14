import React, { useContext, Fragment } from 'react'
import style from './index.module.scss'

import QuestionBoard from '../QuestionBoard'
import AnswerBoard from '../AnswerBoard'
import WaitingForPlayers from '../WaitingForPlayers'
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
          {game.king.id === userId ? (
            <Fragment>
              <div className={style.top}>
                <WaitingForPlayers />
              </div>
              <div className={style.bottom}>
                <QuestionBoard />
              </div>
            </Fragment>
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
        </Fragment>
      )}

      {game.phase.phaseGame === 1 && <KingChoiceBoard />}
    </div>
  )
}

export default Board
