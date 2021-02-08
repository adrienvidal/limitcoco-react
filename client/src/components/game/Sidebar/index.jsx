import React, { useContext } from 'react'
import style from './index.module.scss'
import logo from '../../../assets/images/logo.jpg'

// context
import GameContext from '../../../context/game/gameContext'

const Sidebar = () => {
  const gameContext = useContext(GameContext)
  const { state } = gameContext
  const { game } = state

  return (
    <div className={style.main}>
      <div className={style['logo']}>
        <img src={logo} alt='logo' />
      </div>

      <div className={style.players}>
        {/* player */}
        {game.players &&
          game.players.map((player) => {
            return (
              <div key={player} className={style.player}>
                <ul>
                  <li className={style.name}>{player}</li>
                  <li>
                    Score: <span>0</span>
                  </li>
                  <li>
                    Phase: <span>wait</span>
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
