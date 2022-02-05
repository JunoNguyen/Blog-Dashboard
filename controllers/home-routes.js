const sequelize = require('../config/config');
const { Post, User, Comment } = require('../models');
const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('layouts/main')
})

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

router.get('/signup', (req, res) => {
    res.render('signup');
});

module.exports = router;