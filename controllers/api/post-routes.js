const { response } = require('express');
const Post = require('../../models/Post');
const router = require('express').Router();

router.post('/new', async (req, res) => {
    try {
        const postData = await Post.create({
            title: req.body.title,
            body: req.body.body,
        });
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;