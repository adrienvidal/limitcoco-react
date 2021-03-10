import { v4 as uuidv4 } from 'uuid'
import { shuffle, deepClone } from './utils'
import { questionDeck, answerDeck } from './cards'

export function createNewGame(playerIds) {
  // Init King
  const kingId = playerIds[0]

  // Init Cards
  // 1-create deck
  const answerCards = answerDeck.map((card) => ({
    id: uuidv4(),
    text: card.text,
    selection: 0, // 0 -> none | 1 -> selected | 2 -> validate
  }))
  const questionCards = questionDeck.map((card) => ({
    id: uuidv4(),
    text: card.text,
  }))

  // 2-shuffle
  let questions = shuffle(questionCards)
  let answers = shuffle(answerCards)

  const playerHands = {}
  const scores = {}
  const modalHands = {}
  const phasePlayer = []
  playerIds.forEach((playerId) => {
    // 3-distribute cards to players
    if (playerId !== kingId) {
      playerHands[playerId] = [answers.pop(), answers.pop(), answers.pop()]
    }

    // Init phase
    phasePlayer.push({
      id: playerId,
      phase: false,
    })

    // Init Scores
    scores[playerId] = 0

    // init Modal Answers
    modalHands[playerId] = false
  })

  return {
    round: 0,
    phase: { phaseGame: 0, phasePlayer: phasePlayer },
    players: playerIds,
    kingId: kingId,
    hands: playerHands,
    scores: scores,
    question: questions[0],
    modalHands: modalHands,
  }
}
