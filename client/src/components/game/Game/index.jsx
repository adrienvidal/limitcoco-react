import React, { useContext, useEffect } from 'react'
import Board from '../Board'
import Sidebar from '../Sidebar'
import ModalCards from '../ModalCards'
import style from './index.module.scss'

// context
import GameContext from '../../../context/game/gameContext'

const Game = () => {
  const gameContext = useContext(GameContext)
  const { modalCards } = gameContext

  return (
    <div className={style.main}>
      {modalCards && <ModalCards />}
      <Board />
      <Sidebar />
    </div>
  )
}

export default Game
