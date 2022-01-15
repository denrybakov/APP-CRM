const router = require('express').Router()

const { User, Client } = require('../db/models')
const { checkUser, deepCheckUser } = require('../middleware/allMiddleware')
const sha256 = require('sha256')

router.get('/', (req, res) => {
  if (req.session.userName) {
    res.redirect(`/main/${req.session.userId}`)
  } else {
    res.redirect('/signin')
  }
})

router.get('/signin', (req, res) => {
  res.render('signin')
})

router.post('/signin', async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ where: { email } })
  try {
    if (user.email === email && user.password === sha256(password)) {
      req.session.userName = user.nameU
      req.session.userEmail = user.email
      req.session.userId = user.id
      res.json({ IdUser: user.id })
    }
  } catch (err) {
    res.sendStatus(401)
  }
})

router.post('/signup', async (req, res) => {
  const { nameU, email } = req.body
  const password = sha256(req.body.password)
  const userBd = User.findOne({ where: { email } })
  try {
    if (email !== userBd.email) {
      const user = await User.create({ nameU, password, email, role_id: 2 })
      req.session.userName = user.nameU
      req.session.userEmail = user.email
      req.session.userId = user.id
      res.json({ IdUser: user.id })
    }
  } catch (e) {
    res.sendStatus(401)
  }
})

router.get('/error', (req, res) => {
  res.render('error')
})

router.get('/logout', (req, res) => {
  req.session.destroy()
  res.redirect('/signin')
})

router.get('/main/:id', checkUser, deepCheckUser, async (req, res) => {
  const user = await User.findByPk(req.session.userId)
  const clientsAll = await Client.findAll({ where: { user_id: user.id } });
  res.render('pages/index', {
    user,
    totalClients: clientsAll.length,
  })
})

module.exports = router
