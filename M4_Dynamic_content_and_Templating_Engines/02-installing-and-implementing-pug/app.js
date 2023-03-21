const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// for pug configuration
app.set('view engine', 'pug')
// for the folder where we stor our html
app.set('views', 'views')

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: 'Page Not Found'})
});

app.listen(3000);
