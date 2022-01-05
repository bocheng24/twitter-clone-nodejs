const express = require('express');
const middleware = require('./middleware');
const loginRouter = require('./routes/loginRoute');

const app = express();
const PORT = '3100';

const server = app.listen(PORT, () => console.log('Express listening'));

// set html template engine as pug
app.set('view engine', 'pug');
// set template folders as views folder
app.set('views', 'views');

app.use('/login', loginRouter);

app.get('/', middleware.requireLogin, (req, res, next) => {
    const payload = {
        pageTitle: 'Home'
    }

    res.status(200).render('home', payload);
})
