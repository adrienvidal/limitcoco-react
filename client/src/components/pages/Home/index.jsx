import React, { useContext } from 'react'
import style from './index.module.scss'
import Start from '../../game/Start'
import Game from '../../game/Game'

// context
import GameContext from '../../../context/game/gameContext'

function Home() {
  const gameContext = useContext(GameContext)
  const { phase } = gameContext

  return (
    <div className={style.main}>
      {phase === 'start' && <Start />}
      {phase.indexOf('game') > -1 && <Game />}
      <Game />
    </div>
  )
}

export default Home
