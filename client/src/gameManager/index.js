import { v4 as uuidv4 } from 'uuid'
import { shuffle, deepClone } from './utils'
import { questions, answers } from './cards'

export function createNewGame(playerIds) {
  // Init King
  const kingId = playerIds[0]

  // Init Cards
  // 1-create deck
  const answerCards = answers.map((card) => ({
    id: uuidv4(),
    text: card.text,
    selection: 0, // 0 -> none | 1 -> selected | 2 -> validate
  }))
  const questionCards = questions.map((card) => ({
    id: uuidv4(),
    text: card.text,
  }))

  // 2-shuffle
  const questionDeck = shuffle(questionCards)
  const answerDeck = shuffle(answerCards)

  const playerHands = {}
  const scores = {}
  const modalHands = {}
  const phasePlayer = []
  playerIds.forEach((playerId) => {
    // 3-distribute cards to players
    playerHands[playerId] = [
      answerDeck.pop(),
      answerDeck.pop(),
      answerDeck.pop(),
    ]

    // Init phase
    phasePlayer.push({
      id: playerId,
      hasPlayed: false,
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
    question: questionDeck.pop(),
    modalHands: modalHands,
  }
}
