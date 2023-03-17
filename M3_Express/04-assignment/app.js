const express = require('express')
const app = express()

app.use('/users',(req, res, next) => {
  console.log('Hi again!')
  res.send('<h1>This is a response sent from the /users middleware.</h1>')
})

app.use('/', (req, res, next) => {
  console.log('Hi there!')
  res.send('<h1>This is a response sent from the / middleware.</h1>')
})

app.listen(3000)