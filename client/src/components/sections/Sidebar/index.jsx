import React, { useContext } from 'react'
import style from './index.module.scss'
import logo from '../../../assets/images/logo.jpg'

import GameContext from '../../../context/game/gameContext'

const Sidebar = () => {
  const gameContext = useContext(GameContext)
  const { players } = gameContext

  return (
    <div className={style.main}>
      <div className={style['logo']}>
        <img src={logo} alt='logo' />
      </div>

      <div className={style.players}>
        {/* player */}
        {players &&
          players.map((player) => {
            return (
              <div key={player.id} className={style.player}>
                <ul>
                  <li className={style.name}>{player.name}</li>
                  <li>
                    Score: <span>{player.score}</span>
                  </li>
                  <li>
                    Statut: <span>{player.statut}</span>
                  </li>
                </ul>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Sidebar
