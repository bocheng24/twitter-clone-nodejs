const express = require('express');

const app = express();
const router = express.Router();

app.set('view engine', 'pug');
app.set('views', 'views');


router.get('/', (req, res, next) => {
    res.status(200).render('signup');
})

router.post('/', (req, res, next) => {
    let payload = req.body;

    let { firstName, lastName, username, email, password } = payload;

    firstName = firstName.trim();
    lastName = lastName.trim();
    username = username.trim();
    email = email.trim();

    if (firstName && lastName && username && email && password) {

    }
    else {
        payload.alertType = "alert alert-danger";
        payload.msg = "You have empty fields";
        console.log(payload)
        
        res.status(200).render('signup', payload);
    }

})

module.exports = router;