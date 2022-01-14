const router = require('express').Router()


router.get('/:idUser/', (req, res) => {
  res.render('pages/order')
})

module.exports = router
