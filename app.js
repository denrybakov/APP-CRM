const express = require('express')
const path = require('path')



const PORT = 3030
const app = express()
const indexRouter = require('./routes/index')
const clientsRouter = require('./routes/clientsRouter')

app.set('view engine', 'hbs')
app.set('views', path.join(process.env.PWD, 'views'))

app.use(express.static(path.join(process.env.PWD, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())



app.use('/', indexRouter)
app.use('/clients', clientsRouter)

app.listen(PORT, () => {
  console.log('Server started :)', PORT);
})
