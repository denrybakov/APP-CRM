const checkUser = (req, res, next) => {
  if (req.session.userName) {
    next()
  } else {
    res.redirect('/signin')
  }
}


const deepCheckUser = (req, res, next) => {
  // next() 
  console.log('==========================-->>', req.session.userId)
  if (Number(req.session.userId) === Number(req.params.id)) {
    next()
  } else {

    res.redirect(`/${req.session.userId}/iamsoryymama`);
  }
}

const welcomeUser = (req, res, next) => {
  res.locals.userId = req.session?.userId
  if (req.session) {
    res.locals.userName = req.session.userName
  }
  next()
}

module.exports = { checkUser, deepCheckUser, welcomeUser }
