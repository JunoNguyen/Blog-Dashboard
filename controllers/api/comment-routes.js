const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    const commentData = Comment.findAll({})
        .then(commentDataa => res.json(commentData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

router.get('/:id', (req, res) => {
    const commentData = Comment.findAll({
            where: {
                body: req.params.body
            }
        })
        .then(commentData => res.json(commentData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

router.post('/', withAuth, (req, res) => {
    if (req.session) {
        const commentData = Comment.create({
                body: req.body.body,
            })
            .then(commentData => res.json(commentData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            })
    }
});

router.put('/:id', withAuth, (req, res) => {
    const commentData = Comment.update({
        body: req.body.body
    }, {
        where: {
            body: req.params.body
        }
    }).then(commentData => {
        if (!commentData) {
            res.status(404).json({ message: 'No comment found with this body' });
            return;
        }
        res.json(commentData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.delete('/:id', withAuth, (req, res) => {
    const commentData = Comment.destroy({
        where: {
            body: req.params.body
        }
    }).then(commentData => {
        if (!commentData) {
            res.status(404).json({ message: 'No comment found with this body' });
            return;
        }
        res.json(commentData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;
