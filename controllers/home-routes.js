const express = require('express');
const Post = require('../models/Post');
const Comment = require('../models/Comment');
const router = express.Router();

router.get('/signup', (req, res) => {
    res.render('signup');
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/', async (req, res) => {
    try {
        const dbPostData = await Post.findAll();
        const posts = dbPostData.map((post) =>
            post.get({ plain: true })
        );

        res.render('dashboard', {
            posts,
            isLoggedIn: req.session.loggedIn,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/new', (req, res) => {
    res.render('new-post');
});

router.get('/:id', async (req, res) => {
    try {
        const dbPostData = await Post.findByPk(req.params.id);
        const dbCommentData = await Comment.findAll();
        const comments = dbCommentData.map((comment) =>
            comment.get({ plain: true })
        );

        const post = dbPostData.get({ plain: true });
        res.render('single-post', {
            post,
            comments,
            isLoggedIn: req.session.loggedIn,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;