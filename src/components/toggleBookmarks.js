import getAllByDataJs from './getAllByDataJs'

export default function toggleBookmarks() {
  const cardsBookmarks = getAllByDataJs('sign-bookmark')

  cardsBookmarks.forEach(bookmark => {
    bookmark.addEventListener('click', () => {
      bookmark.classList.toggle('card__bookmark--marked')
    })
  })
}
