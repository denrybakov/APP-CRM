const router = require('express').Router()

const { User, Client } = require('../db/models')

router.get('/:id', async (req, res) => {
  const user = await User.findByPk(req.session.userId)
  const users = await User.findAll()
  const clientsAll = await Client.findAll({ where: { user_id: user.id } });
  res.render('pages/admin', {
    admin: user.nameU,
    managers: users.length,
    clients: clientsAll.length
  })
})

module.exports = router
