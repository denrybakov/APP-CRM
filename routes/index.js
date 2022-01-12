const router = require('express').Router()

router.get('/', (req, res) => {
  res.render('pages/', { greetings: 'ПОгнали!' })
})

module.exports = router
