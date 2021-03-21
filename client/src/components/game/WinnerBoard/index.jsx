import React, { useContext } from 'react'
import AnswerCard from '../../common/AnswerCard'
import { Button1, Button2 } from '../../common/Buttons'
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
      <p className={style.desc}>
        <span>The Winner is !</span>
        <img src={trophyImg} className={style.trophy} alt='winner' />
        <span>{game.lastWinner}</span>
        <Button1 text='Next Round' onAction={nextRound} />
      </p>
    </div>
  )
}

export default WinnerBoard
