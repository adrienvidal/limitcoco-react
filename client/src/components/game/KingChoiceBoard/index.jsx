import React, { useEffect, useContext } from 'react'
import QuestionCard from '../../common/QuestionCard'
import AnswerCard from '../../common/AnswerCard'
import style from './index.module.scss'

// context
import GameContext from '../../../context/game/gameContext'

const KingChoiceBoard = () => {
  const gameContext = useContext(GameContext)
  const { state, pushPlayersAnswers } = gameContext
  const { game, userId } = state

  useEffect(() => {
    if (game.king.id === userId) {
      pushPlayersAnswers()
    }
  }, [])

  return (
    <div className={style.main}>
      <div className={style.title}>King choice</div>
      <div className={style.wrapper}>
        <QuestionCard card={game.king.question} />
        <QuestionCard card={game.king.question} />
        <QuestionCard card={game.king.question} />
        <QuestionCard card={game.king.question} />
        <QuestionCard card={game.king.question} />
      </div>
    </div>
  )
}

export default KingChoiceBoard
