import React, { Fragment, useContext } from 'react'
import QuestionCard from '../../common/QuestionCard'
import AnswerCard from '../../common/AnswerCard'
import style from './index.module.scss'

// context
import GameContext from '../../../context/game/gameContext'

const KingChoiceBoard = () => {
  const gameContext = useContext(GameContext)
  const { state, showModalHands } = gameContext
  const { game, userId } = state

  return (
    <div className={style.main}>
      <div className={style.title}>King choice</div>
      <div className={style.wrapper}>
        <QuestionCard card={game.question} />
        <QuestionCard card={game.question} />
        <QuestionCard card={game.question} />
        <QuestionCard card={game.question} />
        <QuestionCard card={game.question} />
      </div>
    </div>
  )
}

export default KingChoiceBoard
