import getAllByDataJs from './getAllByDataJs'
import getByDataJs from './getByDataJs'

export default function showHideAnswers() {
  const cards = getAllByDataJs('card')

  cards.forEach(card => {
    const cardAnswerToggle = getByDataJs('card__answer-toggle', card)
    const cardAnswer = getByDataJs('card__answer', card)
    cardAnswerToggle.addEventListener('click', () => {
      cardAnswer.classList.toggle('hidden')
      if (cardAnswerToggle.value === 'Hide Answer') {
        cardAnswerToggle.value = 'Show Answer'
      } else {
        cardAnswerToggle.value = 'Hide Answer'
      }
    })
  })
}
