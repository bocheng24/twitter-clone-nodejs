const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const middleware = require('./middleware');

const app = express();
const PORT = '3100';

const server = app.listen(PORT, () => console.log('Express listening'));

app.use(express.static(path.join(__dirname, 'public')));
// set html template engine as pug
app.set('view engine', 'pug');
// set template folders as views folder
app.set('views', 'views');

// Routes
const signupRouter = require('./routes/signupRoute');
const loginRouter = require('./routes/loginRoute');

// put body parser before routes
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/signup', signupRouter);
app.use('/login', loginRouter);

app.get('/', middleware.requireLogin, (req, res, next) => {
    const payload = {
        pageTitle: 'Home'
    }

    res.status(200).render('home', payload);
})
