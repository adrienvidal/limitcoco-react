import React, { useContext, useEffect } from 'react'
import style from './index.module.scss'
import Game from '../../game/Game'

// context
import GameContext from '../../../context/game/gameContext'

// import io from "socket.io-client"

function Home() {
  const gameContext = useContext(GameContext)
  const { phase } = gameContext

  useEffect(() => {
    /* const socket = io(process.env.REACT_APP_SERVER_URL);
		 socket.on("connect", () => {
			 console.log('test2')
		  console.log(socket.id);
		});		  */
  }, [])

  return (
    <div className={style.main}>
      <Game />
    </div>
  )
}

export default Home
