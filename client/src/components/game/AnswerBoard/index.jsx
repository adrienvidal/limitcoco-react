import React, { Fragment, useContext } from 'react'
import AnswerCard from '../../common/AnswerCard'
import style from './index.module.scss'

// context
import GameContext from '../../../context/game/gameContext'

const AnswerBoard = () => {
  const gameContext = useContext(GameContext)
  const { state, showModalHands } = gameContext
  const { game, userId } = state

  // test
  const hasCurrentPlayerPlayed = game.phase.phasePlayer.find(
    (e) => e.id === userId
  ).hasPlayed

  // hand simulation
  const translateCard = 60

  return (
    <Fragment>
      {game.phase.phaseGame === 0 && (
        <h3 className={style.title}>Choose your card(s)</h3>
      )}
      {game.phase.phaseGame === 1 && (
        <h3 className={style.title}>Who will be the winner ?</h3>
      )}

      <div
        className={`${style['cards-hand']} ${
          game.phase.phaseGame === 1 && style.inactive
        }`}
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
              onClick={
                !hasCurrentPlayerPlayed &&
                (() => {
                  showModalHands(true)
                })
              }
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
