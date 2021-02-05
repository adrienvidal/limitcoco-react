import React, { useEffect, useContext } from 'react'
import style from './index.module.scss'

// context
import GameContext from '../../../context/game/gameContext'

const Lobby = () => {
  const gameContext = useContext(GameContext)
  const { joinGame, resetGame, state } = gameContext

  console.log('state: ', state)

  useEffect(() => {
    joinGame()
  }, [])

  return (
    <div className={style.main}>
      <div className={style.wrapper}>
        <h1>Lobby</h1>

        {state.room &&
          state.room.users.map((userId) => {
            return <div key={userId}>{userId}</div>
          })}

        {state.room && state.room.users.length > 1 && (
          <button onClick={() => resetGame(state)}>Start</button>
        )}
      </div>

      {/* <code>
        <pre>{JSON.stringify(state.game, null, 2)}</pre>
      </code> */}
    </div>
  )
}

export default Lobby
