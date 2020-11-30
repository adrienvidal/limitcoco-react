import React, { useContext } from 'react'
import style from './index.module.scss'
import Start from '../../start/Start'
import Lobby from '../../lobby/Lobby'
import Game from '../../game/Game'

// context
import GameContext from '../../../context/game/gameContext'

function Home() {
  const gameContext = useContext(GameContext)
  const { lobby, users } = gameContext

  return (
    <div className={style.main}>
      {lobby.length === 0 && <Start />}
      {lobby.length > 0 && <Lobby />}
      {users.length > 0 && <Game />}
      {/* {users.find((user) => user.isYou).phase.indexOf('game') > -1 && <Game />} */}
    </div>
  )
}

export default Home
