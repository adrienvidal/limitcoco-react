import React, { Fragment, useContext } from 'react'
import AnswerCard from '../../common/AnswerCard'
import style from './index.module.scss'

// context
import GameContext from '../../../context/game/gameContext'

const QuestionBoard = () => {
  const gameContext = useContext(GameContext)
  const { users } = gameContext

  const userYou = users.filter((user) => user.isYou)

  return (
    <Fragment>
      <h3 className={style.title}>Choose your card(s)</h3>
      <div className={style['cards-hand']}>
        {userYou[0].cards.map((card) => (
          <div className={style['card-wrapper']}>
            <AnswerCard key={card.id} card={card} />
          </div>
        ))}
      </div>
    </Fragment>
  )
}

export default QuestionBoard
