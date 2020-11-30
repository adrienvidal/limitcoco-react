import React, { useContext } from 'react'
import style from './index.module.scss'
import Start from '../../game/Start'
import Game from '../../game/Game'

// context
import GameContext from '../../../context/game/gameContext'

function Home() {
  const gameContext = useContext(GameContext)
  const { users } = gameContext

  return (
    <div className={style.main}>
      {users.length === 0 && <Start />}
      {users.length > 0 && <Game />}
      {/* {users.find((user) => user.isYou).phase.indexOf('game') > -1 && <Game />} */}
    </div>
  )
}

export default Home
