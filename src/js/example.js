export const example = () => {
  //Переключение языка

  const ruButton = document.querySelector('.ru-button')
  const enButton = document.querySelector('.en-button')

  const ruElements = document.querySelectorAll('.ru')
  const enElements = document.querySelectorAll('.en')

  function showRu() {
    for (let i = 0; i < enElements.length; i++) {
      enElements[i].classList.add('hide')
      ruElements[i].classList.remove('hide')
    }
  }

  function showEng() {
    for (let i = 0; i < enElements.length; i++) {
      enElements[i].classList.remove('hide')
      ruElements[i].classList.add('hide')
    }
  }

  ruButton.addEventListener('click', showRu)
  enButton.addEventListener('click', showEng)
}
