const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const rootDir = require('./util/path')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

app.use('/admin', adminRoutes)

app.use(shopRoutes)

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, 'views', 'errorPage.html'))
})

app.listen(3000)
