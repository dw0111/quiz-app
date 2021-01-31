//      Define constants
const home = document.querySelector('[data-js="home"]')
const bookmarks = document.querySelector('[data-js="bookmarks"]')
const createQuestion = document.querySelector('[data-js="create-question"]')

const homeButton = document.querySelector('[data-js="home-button"]')
const bookmarksButton = document.querySelector('[data-js="bookmarks-button"]')
const createButton = document.querySelector('[data-js="create-button"]')

const header = document.querySelector('[data-js="header"]')

const cardsBookmarks = document.querySelectorAll('[data-js="sign-bookmark"]')

const createQuestionForm = document.querySelector('[data-js="create-form"]')

const createFormInputLabels = document.querySelectorAll(
  '[data-js="create-form__input-label"]'
)

const cards = document.querySelectorAll('[data-js="card"]')
//      /Define constants

//      Navigation
homeButton.addEventListener('click', () => {
  home.classList.remove('hidden')
  bookmarks.classList.add('hidden')
  createQuestion.classList.add('hidden')

  homeButton.classList.add('nav__link--current')
  bookmarksButton.classList.remove('nav__link--current')
  createButton.classList.remove('nav__link--current')

  header.textContent = 'Quizzix'
})

bookmarksButton.addEventListener('click', () => {
  home.classList.add('hidden')
  bookmarks.classList.remove('hidden')
  createQuestion.classList.add('hidden')

  homeButton.classList.remove('nav__link--current')
  bookmarksButton.classList.add('nav__link--current')
  createButton.classList.remove('nav__link--current')

  header.textContent = 'Bookmarks'
})

createButton.addEventListener('click', () => {
  home.classList.add('hidden')
  bookmarks.classList.add('hidden')
  createQuestion.classList.remove('hidden')

  homeButton.classList.remove('nav__link--current')
  bookmarksButton.classList.remove('nav__link--current')
  createButton.classList.add('nav__link--current')

  header.textContent = 'New question'
})
//      /Navigation

//      Toggle bookmarks
cardsBookmarks.forEach(bookmark => {
  bookmark.addEventListener('click', () => {
    bookmark.classList.toggle('card__bookmark--marked')
  })
})
//      /Toggle bookmarks

//      Reset form on submit
createQuestionForm.addEventListener('submit', () => {
  createQuestionForm.reset()
  const formInput = createQuestionForm.querySelector(
    '[data-js="create-form__input"]'
  )
  formInput.focus()
  createQuestion.scrollIntoView()
})
//      /Reset form on submit

//      Create-form max letter count
createFormInputLabels.forEach(label => {
  const textarea = label.querySelector('[data-js="create-form__input"]')
  const counter = label.querySelector('[data-js="create-form__letter-count"]')
  textarea.addEventListener('input', event => {
    counter.textContent = `${event.currentTarget.value.length}/${textarea.maxLength}`
  })
})
//      /Create-form max letter count

//      Show_Hide answers
//cards.forEach(card => {
const cardAnswerToggle = document.querySelector(
  '[data-js="card__answer-toggle"]'
)
const cardAnswer = document.querySelector('[data-js="card__answer"]')
cardAnswerToggle.addEventListener('click', () => {
  cardAnswer.classList.toggle = 'hidden'
})
//})
//      /Show_Hide answers
