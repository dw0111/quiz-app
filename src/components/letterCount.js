import getAllByDataJs from './getAllByDataJs'
import getByDataJs from './getByDataJs'

export default function letterCount() {
  const createFormInputLabels = getAllByDataJs('create-form__input-label')

  createFormInputLabels.forEach(label => {
    const textarea = getByDataJs('create-form__input', label)
    const counter = getByDataJs('create-form__letter-count', label)
    textarea.addEventListener('input', event => {
      counter.textContent = `${event.currentTarget.value.length}/${textarea.maxLength}`
    })
  })
}
