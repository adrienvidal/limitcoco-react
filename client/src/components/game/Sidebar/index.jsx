import React, { useContext } from 'react'
import style from './index.module.scss'
import logo from '../../../assets/images/logo.jpg'

// context
import GameContext from '../../../context/game/gameContext'

const Sidebar = () => {
  const gameContext = useContext(GameContext)
  const { users } = gameContext

  return (
    <div className={style.main}>
      <div className={style['logo']}>
        <img src={logo} alt='logo' />
      </div>

      <div className={style.players}>
        {/* player */}
        {users &&
          users.map((user) => {
            return (
              <div key={user.id} className={style.player}>
                <ul>
                  <li className={style.name}>{user.name}</li>
                  <li>
                    Score: <span>{user.score}</span>
                  </li>
                  <li>
                    Phase: <span>{user.phase}</span>
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
