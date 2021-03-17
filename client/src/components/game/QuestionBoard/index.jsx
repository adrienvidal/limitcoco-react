import React, { useEffect, useContext, Fragment } from 'react'
import QuestionCard from '../../common/QuestionCard'
import AnswerCard from '../../common/AnswerCard'
import style from './index.module.scss'

// context
import GameContext from '../../../context/game/gameContext'

// hand simulation
const translateCard = 150

const QuestionBoard = () => {
  const gameContext = useContext(GameContext)
  const { state, pushPlayersAnswers, showModalKing } = gameContext
  const { game, userId } = state

  useEffect(() => {
    if (game.king.id === userId && game.phase.phaseGame === 1) {
      pushPlayersAnswers()
    }
  }, [game.phase.phaseGame])

  const showAnswersDecks = () => {
    let answersDecks = []
    for (let user in game.king.playersAnswers) {
      if (game.king.id !== user) {
        answersDecks.push(
          <div className={style['answer-deck']}>
            {game.king.playersAnswers[user].map((card, index) => (
              <div
                key={card.id}
                className={style['card-wrapper']}
                style={{
                  transform: 'translateY(-' + translateCard * index + 'px)',
                }}
              >
                <AnswerCard card={card} />
              </div>
            ))}
          </div>
        )
      }
    }

    return answersDecks
  }

  return (
    <div className={style.main}>
      {game.king.id === userId && (
        <Fragment>
          {game.phase.phaseGame === 0 && (
            <h3 className={style.title}>Your are the King !</h3>
          )}
          {game.phase.phaseGame === 1 && (
            <h3 className={style.title}>Choose your favorite answer(s) !</h3>
          )}
        </Fragment>
      )}
      <div className={style.wrapper}>
        <div className={style['question-wrapper']}>
          <QuestionCard card={game.king.question} />
        </div>
        {game.phase.phaseGame === 1 && (
          <div
            className={style['answers-wrapper']}
            onClick={
              game.king.id === userId
                ? () => {
                    showModalKing()
                  }
                : null
            }
          >
            {showAnswersDecks()}
          </div>
        )}
      </div>
    </div>
  )
}

export default QuestionBoard
