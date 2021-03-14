import { cards } from './cards'

export function createNewGame(playerIds) {
  // Init King
  const kingId = playerIds[0]

  // Init Cards
  const questionCards = cards.getQuestions()
  const answerCards = cards.getAnswers()

  const playerHands = {}
  const scores = {}
  const modalHands = {}
  const phasePlayer = []
  playerIds.forEach((playerId) => {
    // 3-distribute cards to players
    playerHands[playerId] = [
      answerCards.pop(),
      answerCards.pop(),
      answerCards.pop(),
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
    king: { id: kingId, question: questionCards.pop() },
    deck: { questions: questionCards, answers: answerCards },
    hands: playerHands,
    scores: scores,
    modalHands: modalHands,
  }
}
