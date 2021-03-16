import React, { useContext } from 'react'
import style from './index.module.scss'

// context
import GameContext from '../../../context/game/gameContext'

const AnswerCard = ({ card, location }) => {
  const gameContext = useContext(GameContext)
  const { state } = gameContext
  const { game } = state

  return (
    <div
      className={`${style.main} ${
        card.selection >= 1 && game.phase.phaseGame === 0 ? style.active : ''
      } ${location === 'modal' ? style['modal'] : ''}`}
      data-id={card.id}
    >
      <p>{card.text}</p>
    </div>
  )
}

export default AnswerCard
