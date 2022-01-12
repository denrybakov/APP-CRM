const modal = document.querySelector('.modal')
const addClient = document.querySelector('.btn')


addClient.addEventListener('click', () => modal.classList.remove('hide'))
modal.addEventListener('mousedown', e => {
  if (e.target.className === 'modal') {
    modal.classList.add('hide')
  }
})
