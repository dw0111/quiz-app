import getAllByDataJs from './getAllByDataJs'
import getByDataJs from './getByDataJs'

export default function resetForm() {
  const createQuestionForm = getByDataJs('create-form')
  const createQuestion = getByDataJs('create-question')
  const createFormInputLabels = getAllByDataJs('create-form__input-label')

  createQuestionForm.addEventListener('submit', event => {
    event.preventDefault()
    createQuestionForm.reset()
    const formInput = getByDataJs('create-form__input', createQuestionForm)
    formInput.focus()
    createQuestion.scrollIntoView()

    createFormInputLabels.forEach(label => {
      const textarea = getByDataJs('create-form__input', label)
      const counter = getByDataJs('create-form__letter-count', label)
      counter.textContent = `0/${textarea.maxLength}`
    })
  })
}
