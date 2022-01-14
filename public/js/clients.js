const modal = document.querySelector('.modal')
const addClient = document.querySelector('.btn')
const btnDel = document.querySelector('.clients__block.delete')
const parentWrapp = document.querySelector('.clients__table')


addClient.addEventListener('click', () => modal.classList.remove('hide'))
modal.addEventListener('mousedown', e => {
  if (e.target.className === 'modal') {
    modal.classList.add('hide')
  }
})

parentWrapp.addEventListener('click', e => {

  const target = e.target
  if (target.textContent === 'удалить') {
    e.preventDefault()
    const { id } = target.closest('[data-id]').dataset
    fetch(`/clients/${id}`, { method: 'delete' })
      .then(() => {
        console.log('yes');
        target.closest('[data-id]').remove()
      })
      .catch(() => console.log('err'))
    console.log(id);
  }
})

// console.log(object);
