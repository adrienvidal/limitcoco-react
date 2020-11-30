import React, { useContext, useEffect } from 'react'
import Board from '../Board'
import Sidebar from '../Sidebar'
import ModalCards from '../ModalCards'
import style from './index.module.scss'

// context
import GameContext from '../../../context/game/gameContext'

const Game = () => {
  const gameContext = useContext(GameContext)
  const { joinGame } = gameContext

  useEffect(() => {
    joinGame();
  }, [])

  return (
    <div className={style.main}>
      {/* {users.find((user) => user.isYou).modalCards && <ModalCards />}
      <Board />
      <Sidebar /> */}
    </div>
  )
}

export default Game
