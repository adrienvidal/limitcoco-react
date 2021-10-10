import { v4 as uuidv4 } from 'uuid'

class CARDS {
  constructor() {
    this.questions = [
      { text: 'Pour le service réclamations, tapez 1, pour ---- tapez 2, sinon veuillez patienter' },
      { text: '---- : le meilleur remède contre la gueule de bois' },
      { text: 'Petit on n\'avait besoin de rien, on pouvait jouer une journée entière avec ----' },
      { text: '800 g de viande hachée, 3 jaunes d\'oeufs, des câpres, de la sauce worcester et ---- : là on tient un bon tartare' },
      { text: 'C\'est quoi ton parfum ? ---- de Guerlain' },
      { text: '200 m² orienté plein sud, calme, haut standing, et le petit plus est à la cave : ----' },
      { text: 'J\'ai commencé ---- quand j\'avais 7 ans et demi, j\'aurais peut-être dù attendre mes 9 ans' },
      { text: 'Tiens Roger, tu nous remettras ----' },
      { text: 'En 3 je mets le travail en 2 la famille et en 1 ----' },
      { text: 'Pour égayer la vie d\'un enfant aveugle, donne lui ----' },
      { text: '----, c\'est un luxe en période crise' },
      { text: 'Bon vent ! Mais fais attention à toi, ---- est si vite arrivé' },
      { text: '----, un travail bâclé' },
      { text: '----, c\'est comme pour tout, il y a la théorie, et la pratique' },
      { text: '----, c\'est la faute à pas de chance' },
      { text: 'La vrai raison de mes premiers cheveux blancs, c\'est ----' },
      { text: 'Si j\'habitais en Californie, la chose qui me manquerait le plus de France, c\'est ----' },
      { text: '----, c\'est le premier truc à larguer dans une montgolfière qui perd de l\'altitude' },
      { text: '----, ça c\'est tellement ton père' },
      { text: 'Un truc à faire une fois dans sa vie, c\'est ---- mais seulement une fois' }
    ]

    this.answers = [
      { text: 'Ejaculer après 47 secondes' },
      { text: 'Larguer par texto' },
      { text: 'Le point G' },
      { text: 'L\'envie de pisser' },
      { text: 'Laisser 10 centimes de pourboire' },
      { text: 'Egorger le mouton dans la baignoire' },
      { text: 'Les cotisations URSAFF et la CSG' },
      { text: 'Les lourdeurs administratives' },
      { text: 'Ce je-ne-sais-quoi des Ch\'tis' },
      { text: 'Un sextoy pour chien' },
      { text: 'Un plan-cul fiable' },
      { text: 'Les rudiments de l\'hygiène corporelle' },
      { text: 'Voler les caisses de Médecins Sans Frontières' },
      { text: 'La charia' },
      { text: '100 balles et 1 mars' },
      { text: 'Une pore à lavement' },
      { text: 'La Malaysia Airlines' },
      { text: 'La Renault Espace' },
      { text: 'Fort Boyard' },
      { text: 'L\'intégrale de Katsuni' },
      { text: 'La macarena' },
      { text: 'La perte des eaux' },
      { text: 'Le caviar Beluga' },
      { text: 'La double pénétration' },
      { text: 'Une belle paire de nibards' },
      { text: 'Le traité des noirs' },
      { text: 'Le Carlton de Lille' },
      { text: 'Une promotion canapé' },
      { text: 'La République Démocratique du Congo' },
      { text: 'Aller aux Prud\'hommes' },
      { text: 'Un plan à trois' },
      { text: 'Echanger des banalités' },
      { text: 'Le passage de la cocaïne au crack' },
      { text: 'Débrancher mamie' },
      { text: 'Les blancs' },
      { text: 'Rédiger des scripts pour mendiants' },
      { text: 'Un pet de fouffe' },
      { text: 'Eviter de manger trop gras, trop salé, trop sucré' },
      { text: 'La gueule de bois' },
      { text: 'Jouir ou mourir' },
      { text: 'Trois doigts dans le cul' },
      { text: 'Un canard en plastique jaune' },
      { text: '1 kg d\'amiante' },
      { text: 'Parler la bouche pleine' },
      { text: 'Manger 5 fruits et légumes par jour' },
      { text: 'Envoyer "Amour" au 8 200 200' },
      { text: 'La famille et les amis' },
      { text: 'L\'acharnement thérapeutique' }
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

    switch (number) {
      case 1:
        return cardsDrawn[0]
      default:
        return cardsDrawn
    }
  }
}

const cards = new CARDS()
export default cards
