const checkUser = (req, res, next) => {
  if (req.session.userName) {
    next()
  } else {
    res.redirect('/signin')
  }
}

const deepCheckUser = (req, res, next) => {
  if (+req.session.userId === +req.params.id) {
    next()
  } else {
    res.redirect(`/error`);
  }
}

const welcomeUser = (req, res, next) => {
  res.locals.userId = req.session?.userId
  if (req.session) {
    res.locals.userName = req.session.userName
    res.locals.userEmail = req.session.userEmail
  }
  next()
}

module.exports = { checkUser, deepCheckUser, welcomeUser }
