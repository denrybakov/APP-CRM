const formSignin = document.querySelector('#idSignIn')

const signIn = formSignin.querySelector('.signin')
const signUp = formSignin.querySelector('.signup')

formSignin.addEventListener('submit', e => e.preventDefault())

signIn.addEventListener('click', e => {
  e.preventDefault()
  const dataFront = Object.fromEntries(new FormData(formSignin))
  fetch(`/signin`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify(dataFront)
  })
    .then(data => data.json())
    .then(data => {
      data.auth ? window.location = `/main/${data.IdUser}` : null
    })
    .catch(() => {
      formSignin.reset()
      alert('Неверные данные')
    })
})

signUp.addEventListener('click', e => {
  e.preventDefault()
  const dataFront = Object.fromEntries(new FormData(formSignin))
  fetch(`/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify(dataFront)
  })
    .then(data => data.json())
    .then(data => window.location = `/main/${data.IdUser}`)
    .catch(err => console.log(err))
})


