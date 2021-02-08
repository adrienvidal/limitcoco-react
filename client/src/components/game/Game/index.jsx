import React from 'react'
import Board from '../Board'
import Sidebar from '../Sidebar'
import ModalCards from '../ModalCards'
import style from './index.module.scss'

const Game = () => {
  return (
    <div className={style.main}>
      <h1>Game</h1>

      {/* {users.find((user) => user.isYou).modalCards && <ModalCards />} */}
      {/* <Board /> */}
      <Sidebar />
    </div>
  )
}

export default Game
