const router = require('express').Router()

router.post('/', async (req, res) => {
  const result = req.body
  res.redirect('/logged')

})

module.exports = router
