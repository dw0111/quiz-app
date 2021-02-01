import getAllByDataJs from './getAllByDataJs'

export default function navigation() {
  const pages = getAllByDataJs('page')
  const buttons = getAllByDataJs('nav-button')

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const clickedButtonName = button.dataset.name

      pages.forEach(page => {
        page.classList.toggle('hidden', page.dataset.name !== clickedButtonName)
      })

      buttons.forEach(button => {
        button.classList.toggle(
          'nav__link--current',
          clickedButtonName === button.dataset.name
        )
      })
    })
  })
}
