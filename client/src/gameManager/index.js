import { shuffle, deepClone } from "./utils";
import { v4 as uuidv4 } from "uuid";
import { questionDeck, answerDeck } from "./cards";

export function createNewGame(playerIds) {

  const answerCards = answerDeck.map(card => ({
      id: uuidv4(),
      text: card.text
    })
  );

  const questionCards = questionDeck.map(card => ({
      id: uuidv4(),
      text: card.text
    })
  );

  let questions = shuffle(questionCards);
  let answers = shuffle(answerCards);

  const playerHands = {};

  playerIds.forEach(playerId => {
    playerHands[playerId] = [
      answers.pop(),
      answers.pop(),
      answers.pop(),
    ];
  });

  return {
    kingId: playerIds[0],
    players: playerIds,
    hands: playerHands,
    question: questions[0]
  };
}