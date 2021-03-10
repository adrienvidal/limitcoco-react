import React, { useContext } from 'react'
import AnswerCard from '../../common/AnswerCard'
import style from './index.module.scss'

// context
import GameContext from '../../../context/game/gameContext'

const ModalHands = () => {
  const gameContext = useContext(GameContext)
  const { state, showModalHands, selectCard } = gameContext
  const { game, userId } = state

  return (
    <div className={style.main}>
      <div className={style.inner}>
        <h3 className={style.title}>Choose your card(s)</h3>

        <div className={style['cards-hand']}>
          {game.hands[userId].map((card, index) => {
            return (
              <div
                key={card.id}
                className={style['card-wrapper']}
                onClick={() => {
                  selectCard(card.id)
                }}
              >
                <AnswerCard card={card} location='modal' />
              </div>
            )
          })}
        </div>

        <button type='button'>Submit</button>
      </div>
    </div>
  )
}

export default ModalHands
