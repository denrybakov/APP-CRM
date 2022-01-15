require('dotenv').config()
const express = require('express')
const path = require('path')
const morgan = require('morgan')

const cookieParser = require('cookie-parser')
const session = require('express-session')
const FileStore = require('session-file-store')(session)

const { welcomeUser } = require('./middleware/allMiddleware')

const PORT = 3030
const indexRouter = require('./routes/index')
const clientsRouter = require('./routes/clientsRouter')
const orderRouter = require('./routes/orderRouter')
const adminRouter = require('./routes/adminRouter')
const loginRouter = require('./routes/loginRouter')

const app = express()
app.set('view engine', 'hbs')
app.set('views', path.join(process.env.PWD, 'views'))

app.use(cookieParser())
app.use(express.static(path.join(process.env.PWD, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(morgan('dev'))

app.use(session({
  secret: 'sd;fk;sldkfsd',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false },
  name: 'Albert',
  store: new FileStore(),
}))

app.use(welcomeUser)
app.use('/', indexRouter)
app.use('/clients', clientsRouter)
app.use('/order', orderRouter)
app.use('/admin', adminRouter)
app.use('/login', loginRouter)

app.listen(PORT, () => {
  console.log('Server started :)', PORT);
})
