const formSignin = document.querySelector('.formSignin')

const signIn = formSignin.querySelector('.signin')
const signUp = formSignin.querySelector('.signup')

console.log('Я скрипт ЛОГИИИИННННН!!!!!!!!!!!!!!!!!!');
signIn.addEventListener('click', async e => {
  e.preventDefault()
  console.log(signIn);
  const dataFront = Object.fromEntries(new FormData(formSignin))
  console.log(dataFront);

  fetch(`/signin`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify(dataFront)
  })
    .then(data => data.json())
    .then(data => {
      console.log(data)
      window.location = `/main/${data.IdUser}`
    })
  // .catch(err => console.log(err))

  // console.log(document.querySelector('#idSignIn'));
})

signUp.addEventListener('click', e => {
  e.preventDefault()
  const dataFront = Object.fromEntries(new FormData(formSignin))
  console.log(dataFront);

  fetch(`/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify(dataFront)
  })
    .then(data => data.json())
    .then(data => {
      console.log(data)
      window.location = `/main/${data.IdUser}`
    })
    .catch(err => console.log(err))
})


