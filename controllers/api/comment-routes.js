const { response } = require('express');
const Comment = require('../../models/Comment');
const router = require('express').Router();

router.post('/', async (req, res) => {
    try {
        const commentData = await Comment.create({
            postId: req.body.postId,
            body: req.body.body,
        });
        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;