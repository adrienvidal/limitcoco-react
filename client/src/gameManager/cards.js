import { v4 as uuidv4 } from 'uuid'

class CARDS {
  constructor() {
    this.questions = [
      { text: 'Question' },
      { text: 'Question' },
      { text: 'Question' },
      { text: 'Question' },
      { text: 'Question' },
      { text: 'Question' },
      { text: 'Question' },
      { text: 'Question' },
      { text: 'Question' },
      { text: 'Question' },
      { text: 'Question' },
      { text: 'Question' },
      { text: 'Question' },
      { text: 'Question' },
      { text: 'Question' },
    ]

    this.answers = [
      { text: 'Answer' },
      { text: 'Answer' },
      { text: 'Answer' },
      { text: 'Answer' },
      { text: 'Answer' },
      { text: 'Answer' },
      { text: 'Answer' },
      { text: 'Answer' },
      { text: 'Answer' },
      { text: 'Answer' },
      { text: 'Answer' },
      { text: 'Answer' },
      { text: 'Answer' },
      { text: 'Answer' },
      { text: 'Answer' },
      { text: 'Answer' },
      { text: 'Answer' },
      { text: 'Answer' },
      { text: 'Answer' },
      { text: 'Answer' },
      { text: 'Answer' },
      { text: 'Answer' },
      { text: 'Answer' },
      { text: 'Answer' },
    ]
  }

  getQuestions() {
    const questionCards = this.questions.map((card) => ({
      id: uuidv4(),
      text: card.text,
    }))

    return this.shuffle(questionCards)
  }

  getAnswers() {
    const answerCards = this.answers.map((card) => ({
      id: uuidv4(),
      text: card.text,
      selection: 0, // 0 -> none | 1 -> selected | 2 -> validate
    }))

    return this.shuffle(answerCards)
  }

  shuffle(array) {
    /** Returns a shuffled version of an array using the Fisher-Yates algorithm. */
    const resultArray = array.slice()
    for (let i = resultArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i)
      const temp = resultArray[i]
      resultArray[i] = resultArray[j]
      resultArray[j] = temp
    }
    return resultArray
  }

  draw(cards, number) {
    const cardsDrawn = []
    for (let i = 0; i < number; i++) {
      cardsDrawn.push(cards.pop())
    }
    return cardsDrawn
  }
}

const cards = new CARDS()
export default cards
