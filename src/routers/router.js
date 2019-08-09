const express = require('express');
const router = new express.Router();
const User = require('./../modal/user')


router.post('/users', (req, res) => {
    const user = new User(req.body);
    user.save().then(() => {
        res.send(user)
    }).catch((error) => {
        console.log("error", error)
    })
})


router.get('/users', (req, res) => {
    User.find({}).then(users => {
        res.send(users)
    }).catch((e) => {
        res.send(e)
    })
})

router.get('/users/:id', (req, res) => {
    console.log('req:::', req.params)
    User.findById(req.params.id).then((user) => {
        if (!user) {
            return res.status(404).send()
        }
        res.status(200).send(user);
    }).catch((error) => {
        res.send(error);
    })
})

router.put('/users/:id', (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body).then((user) => {
        res.status(200).send(user);
    }).catch((e) => {
        res.status(500).send(e);
    })
})

router.delete('/users/:id', (req, res) => {
    User.findByIdAndDelete(req.params.id).then((user) => {
        if (!user) {
            return res.status(404).send();
        }
        res.status(200).send(user);
    }).catch((error) => {

    })
})

module.exports = router