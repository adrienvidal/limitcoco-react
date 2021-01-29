import React, { useEffect, useContext } from 'react'
import style from './index.module.scss'

// context
import GameContext from '../../../context/game/gameContext'

const Lobby = () => {
  const gameContext = useContext(GameContext)
  const { joinGame, resetGame, state } = gameContext

  console.log('state: ', state)

  /* useEffect(() => {
    joinGame()
  }, []) */

  return (
    <div className={style.main}>
      <h1>Lobby</h1>

      <div className='wrapper'>
        <button onClick={() => resetGame(state)}>Reset game</button>
      </div>
      <code>
        <pre>{JSON.stringify(state.game, null, 2)}</pre>
      </code>
    </div>
  )
}

export default Lobby
