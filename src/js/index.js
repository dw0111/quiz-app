console.log('Hello World')

const home = document.querySelector('[data-js="home"]')
const bookmarks = document.querySelector('[data-js="bookmarks"]')
const createQuestion = document.querySelector('[data-js="create-question"]')

const homeButton = document.querySelector('[data-js="home-button"]')
const bookmarksButton = document.querySelector('[data-js="bookmarks-button"]')
const createButton = document.querySelector('[data-js="create-button"]')

const cardBookmark = document.querySelectorAll('[data-js="sign-bookmark"]')

const header = document.querySelector('[data-js="header"]')

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

cardBookmark.forEach(bookmark => {
  bookmark.addEventListener('click', () => {
    bookmark.classList.toggle('card__bookmark--marked')
  })
})
