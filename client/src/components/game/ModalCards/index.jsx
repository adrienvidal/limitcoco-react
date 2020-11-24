import React, { useContext } from 'react'
import AnswerCard from '../../common/AnswerCard'
import style from './index.module.scss'

// context
import GameContext from '../../../context/game/gameContext'

const ModalCards = () => {
  const gameContext = useContext(GameContext)
  const { users, showModalCards } = gameContext

  // get your data
  const userYou = users.find((user) => user.isYou)

  return (
    <div className={style.main}>
      <h3 className={style.title}>Choose your card(s)</h3>

      <div className={style['cards-hand']}>
        {userYou.cards.map((card, index) => {
          return (
            <div
              key={card.id}
              className={style['card-wrapper']}
              onClick={() => {
                showModalCards(true)
              }}
            >
              <AnswerCard card={card} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ModalCards
