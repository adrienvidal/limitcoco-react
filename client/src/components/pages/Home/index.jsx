import React, { useEffect } from 'react'
import style from './index.module.scss'
import Board from '../../game/Board'
import Sidebar from '../../game/Sidebar'
// import io from "socket.io-client"

function Home() {
  useEffect(() => {
    /* const socket = io(process.env.REACT_APP_SERVER_URL);
		 socket.on("connect", () => {
			 console.log('test2')
		  console.log(socket.id);
		});		  */
  }, [])

  return (
    <div className={style.main}>
      <Board />
      <Sidebar />
    </div>
  )
}

export default Home
