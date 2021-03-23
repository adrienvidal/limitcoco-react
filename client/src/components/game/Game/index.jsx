import React, { useContext, Fragment } from 'react'
import Board from '../Board'
import WinnerBoard from '../WinnerBoard'
import Sidebar from '../Sidebar'
import ModalHands from '../ModalHands'
import ModalKing from '../ModalKing'
import style from './index.module.scss'

// context
import GameContext from '../../../context/game/gameContext'

const Game = () => {
  const gameContext = useContext(GameContext)
  const { state } = gameContext
  const { game, userId } = state

  return (
    <div className={style.main}>
      {/* Modals */}
      {game.modalHands[userId] && <ModalHands />}
      {game.modalKing.isActive && game.king.id === userId && <ModalKing />}

      {game.phase.phaseGame < 2 && (
        <Fragment>
          <Board />
          <Sidebar />
        </Fragment>
      )}
      {game.phase.phaseGame === 2 && <WinnerBoard />}
    </div>
  )
}

export default Game
