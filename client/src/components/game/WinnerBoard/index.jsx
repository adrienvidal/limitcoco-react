import React, { useContext } from 'react'
import { Button1 } from '../../common/Buttons'
import logo from '../../../assets/images/logo.jpg'
import trophyImg from '../../../assets/images/trophy.png'
import style from './index.module.scss'

// context
import GameContext from '../../../context/game/gameContext'

const WinnerBoard = () => {
  const gameContext = useContext(GameContext)
  const { state, nextRound } = gameContext
  const { game, userId } = state

  return (
    <div className={style.main}>
      <div className={style.desc}>
        <img src={logo} className={style.logo} alt='winner' />
        <span>The Winner is :</span>
        <img src={trophyImg} className={style.trophy} alt='winner' />
        <span>
          {game.players.find((e) => e.id === game.lastWinner).nickname}
        </span>

        {game.lastWinner === userId && (
          <Button1 text='Next Round' onAction={nextRound} />
        )}
      </div>
    </div>
  )
}

export default WinnerBoard
