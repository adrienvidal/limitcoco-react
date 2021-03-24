import {
  uniqueNamesGenerator,
  Config,
  adjectives,
  colors,
  animals,
  names,
} from 'unique-names-generator'

import cards from './cards'

export function createNewGame(playerIds) {
  // Init constructor
  const players = []
  const kingId = playerIds[0]
  const questionCards = cards.getQuestions()
  const answerCards = cards.getAnswers()
  const kingQuestion = cards.draw(questionCards, 1)
  const playerHands = {}
  const playersAnswers = {}
  const scores = {}
  const modalHands = {}
  const phasePlayer = []

  console.log('kingQuestion', kingQuestion)

  // const randomName = uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals] }); // big_red_donkey

  playerIds.forEach((playerId) => {
    players.push({
      id: playerId,
      nickname: uniqueNamesGenerator({
        dictionaries: [names, animals],
        separator: ' ',
      }),
    })
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
    players: players,
    deck: { questions: questionCards, answers: answerCards },
    phase: { phaseGame: 0, phasePlayer: phasePlayer },
    hands: playerHands,
    king: {
      id: kingId,
      question: kingQuestion,
      playersAnswers: playersAnswers,
    },
    round: 1,
    scores: scores,
    modalHands: modalHands,
    modalKing: {
      isActive: false,
      userId: null,
    },
    lastWinner: null,
  }
}

export function setNextRoundGame(gameState) {
  // no touch : players, modalHands, modalKing, lastWinner

  // const questionCards = cards.getQuestions()
  // const answerCards = cards.getAnswers()
  const kingQuestion = cards.draw(gameState.deck.questions, 1)
  const playersAnswers = {}
  const playerHands = {}
  const phasePlayer = []

  gameState.players.forEach((playerId) => {
    playersAnswers[playerId] = []

    // every players draw card but king
    if (playerId === gameState.king.id) {
      playerHands[playerId] = gameState.hands[playerId]
    } else {
      playerHands[playerId] = [
        ...gameState.hands[playerId],
        cards.draw(gameState.deck.answers, 1),
      ]
    }

    phasePlayer.push({
      id: playerId,
      hasPlayed: false,
    })
  })

  // phase
  gameState.phase = { phaseGame: 0, phasePlayer: phasePlayer }

  // hands
  gameState.hands = playerHands

  // king
  gameState.king = {
    id: gameState.lastWinner,
    question: kingQuestion,
    playersAnswers: playersAnswers,
  }
  // round
  gameState.round++

  // scores
  gameState.scores[gameState.modalKing.userId] =
    gameState.scores[gameState.modalKing.userId] + 1

  return gameState
}
