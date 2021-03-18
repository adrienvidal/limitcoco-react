import cards from './cards'

export function createNewGame(playerIds) {
  // Init constructor
  const kingId = playerIds[0]
  const questionCards = cards.getQuestions()
  const answerCards = cards.getAnswers()
  const kingQuestion = cards.draw(questionCards, 1)[0]
  const playerHands = {}
  const playersAnswers = {}
  const scores = {}
  const modalHands = {}
  const phasePlayer = []

  console.log('kingQuestion', kingQuestion)

  playerIds.forEach((playerId) => {
    // Init players Hands
    playerHands[playerId] = cards.draw(answerCards, 3)

    // Init phase
    phasePlayer.push({
      id: playerId,
      hasPlayed: false,
    })

    playersAnswers[playerId] = []
    // Init Scores
    scores[playerId] = 0

    // init Modal Answers
    modalHands[playerId] = false
  })

  return {
    players: playerIds,
    deck: { questions: questionCards, answers: answerCards },
    phase: { phaseGame: 0, phasePlayer: phasePlayer },
    hands: playerHands,
    king: {
      id: kingId,
      question: kingQuestion,
      playersAnswers: playersAnswers,
    },
    round: 0,
    scores: scores,
    modalHands: modalHands,
    modalKing: {
      isActive: false,
      userId: null,
    },
    lastWinner: null,
  }
}
