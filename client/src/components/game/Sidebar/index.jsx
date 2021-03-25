import React, { useContext } from 'react'
import style from './index.module.scss'
import logo from '../../../assets/images/logo.jpg'
import playerIcon from '../../../assets/images/player.png'

// context
import GameContext from '../../../context/game/gameContext'

const Sidebar = () => {
  const gameContext = useContext(GameContext)
  const { state } = gameContext
  const { game, userId } = state

  return (
    <div className={style.main}>
      <div className={style['logo']}>
        <img src={logo} alt='logo' />
      </div>

      <div className={style.players}>
        {/* player */}
        {game.players &&
          game.players.map((player) => {
            let phaseStatus = 'wait'
            if (
              game.phase.phasePlayer.find((e) => e.id === player.id)
                .hasPlayed &&
              'Played'
            ) {
              phaseStatus = 'Played'
            } else if (game.king.id === player.id && 'King') {
              phaseStatus = 'King'
            }

            return (
              <div key={player.id} className={style.player}>
                <ul>
                  <li className={style.name}>
                    {userId === player.id && (
                      <img
                        src={playerIcon}
                        className={style['player-icon']}
                        alt='player'
                      />
                    )}{' '}
                    <span>{player.nickname}</span>
                  </li>
                  <li>
                    Score: <span>{game.scores[player.id]}</span>
                  </li>
                  <li>
                    Phase:{' '}
                    <span>
                      {phaseStatus}
                      {/* {game.phase.phasePlayer.find((e) => e.id === player.id)
                        .hasPlayed &&
                        game.king.id !== player.id &&
                        'Played'}
                      {game.king.id === player.id && 'King'} */}
                    </span>
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
