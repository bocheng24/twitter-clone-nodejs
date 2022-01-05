const express = require('express');

const app = express();
const PORT = '3100';

const server = app.listen(PORT, () => console.log('Express listening'));

// set html template engine as pug
app.set('view engine', 'pug');
// set template folders as views folder
app.set('views', 'views');

app.get('/', (req, res, next) => {
    res.status(200).render('home');
})