import React, { useContext } from 'react'
import Board from '../Board'
import Sidebar from '../Sidebar'
import style from './index.module.scss'

const Game = () => {
  return (
    <div className={style.main}>
      <Board />
      <Sidebar />
    </div>
  )
}

export default Game
