import React, { useContext } from 'react'
import AnswerCard from '../../common/AnswerCard'
import { Button1 } from '../../common/Buttons'
import style from './index.module.scss'

// context
import GameContext from '../../../context/game/gameContext'

const ModalHands = () => {
  const gameContext = useContext(GameContext)
  const { state, selectCard, submitCard } = gameContext
  const { game, userId } = state

  return (
    <div className={style.main}>
      <div className={style.inner}>
        <h3 className={style.title}>Choose your card(s)</h3>

        <div className={style['cards-hand']}>
          {game.hands[userId].map((card) => {
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

        <div className={style['cta']}>
          <Button1 text='Submit' onAction={submitCard} />
        </div>
      </div>
    </div>
  )
}

export default ModalHands
