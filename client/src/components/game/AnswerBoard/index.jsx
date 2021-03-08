import React, { Fragment, useContext } from 'react'
import AnswerCard from '../../common/AnswerCard'
import style from './index.module.scss'

// context
import GameContext from '../../../context/game/gameContext'

const AnswerBoard = () => {
  const gameContext = useContext(GameContext)
  const { state } = gameContext
  const { game, userId } = state
  // const { users, showModalCards } = gameContext

  // hand simulation
  const translateCard = 60

  return (
    <Fragment>
      <h3 className={style.title}>Choose your card(s)</h3>
      <div
        className={style['cards-hand']}
        style={{
          transform:
            'translateX(' +
            (translateCard * (game.hands[userId].length - 1)) / 2 +
            'px)',
        }}
      >
        {game.hands[userId].map((card, index) => {
          return (
            <div
              key={card.id}
              className={style['card-wrapper']}
              style={{
                transform: 'translateX(-' + translateCard * index + 'px)',
              }}
              /* onClick={() => {
                showModalCards(true)
              }} */
            >
              <AnswerCard card={card} />
            </div>
          )
        })}
      </div>
    </Fragment>
  )
}

export default AnswerBoard
