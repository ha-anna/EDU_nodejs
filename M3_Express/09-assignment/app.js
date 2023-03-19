const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const rootDir = require('./util/path')
const homeRoutes = require('./routes/home')
const usersRoutes = require('./routes/users')

const app = express()

app.use(express.static(path.join(rootDir, 'public')))

app.use(bodyParser.urlencoded({ extended: true }))

app.use(homeRoutes)

app.use(usersRoutes)

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, 'views', 'error.html'))
})

app.listen(3000)