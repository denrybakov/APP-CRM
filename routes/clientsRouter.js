const router = require('express').Router()


router.get('/', (req, res) => {
  res.render('pages/clients', { nameClient: 'Петров' })
})


module.exports = router
