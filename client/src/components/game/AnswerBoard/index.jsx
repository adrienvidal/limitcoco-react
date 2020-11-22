import React, { Fragment, useContext } from 'react'
import AnswerCard from '../../common/AnswerCard'
import style from './index.module.scss'

// context
import GameContext from '../../../context/game/gameContext'

const QuestionBoard = () => {
  const gameContext = useContext(GameContext)
  const { users } = gameContext

  // get your data
  const userYou = users.filter((user) => user.isYou)

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
            (translateCard * (userYou[0].cards.length - 1)) / 2 +
            'px)',
        }}
      >
        {userYou[0].cards.map((card, index) => {
          return (
            <div
              key={card.id}
              className={style['card-wrapper']}
              style={{
                transform: 'translateX(-' + translateCard * index + 'px)',
              }}
            >
              <AnswerCard card={card} />
            </div>
          )
        })}
      </div>
    </Fragment>
  )
}

export default QuestionBoard
