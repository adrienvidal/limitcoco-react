import React, { useContext } from 'react'
import AnswerCard from '../../common/AnswerCard'
import { Button1, Button2 } from '../../common/Buttons'
import style from './index.module.scss'

// context
import GameContext from '../../../context/game/gameContext'

const ModalKing = () => {
  const gameContext = useContext(GameContext)
  const { state, showModalKing, submitWinnerDeck } = gameContext
  const { game, userId } = state

  return (
    <div className={style.main}>
      <div className={style.inner}>
        <h3 className={style.title}>Do you enjoy this card ?</h3>

        <div className={style['cards-hand']}>
          {game.king.playersAnswers[game.modalKing.userId].map((card) => {
            return (
              <div
                key={card.id}
                className={style['card-wrapper']}
                /* onClick={() => {
                  selectCard(card.id)
                }} */
              >
                <AnswerCard card={card} location='modal' />
              </div>
            )
          })}
        </div>

        <div className={style['cta']}>
          <Button2 text='Cancel' onAction={() => showModalKing(false)} />
          <Button1 text='Submit' onAction={submitWinnerDeck} />
        </div>
      </div>
    </div>
  )
}

export default ModalKing
