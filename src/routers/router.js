const express = require('express');
const router = new express.Router();
const User = require('./../modal/user');
var cors = require('cors')
const app = express();



const corsOptions = {
    origin: [process.env.URL, 'http://localhost:3000', 'http://localhost:8080']
  }
  
  app.use(cors(corsOptions))
  app.options('*', cors(corsOptions))

router.post('/users', cors(corsOptions), (req, res) => {
    const user = new User(req.body);
    user.save().then(() => {
        res.send(user)
    }).catch((error) => {
        console.log("error", error)
    })
})


router.get('/users', cors(corsOptions), (req, res) => {
    User.find({}).then(users => {
        res.send(users)
    }).catch((e) => {
        res.send(e)
    })
})

router.get('/users/:id', cors(corsOptions), (req, res) => {
    User.findById(req.params.id).then((user) => {
        if (!user) {
            return res.status(404).send()
        }
        res.status(200).send(user);
    }).catch((error) => {
        res.send(error);
    })
})

router.put('/users/:id', cors(corsOptions), (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body).then((user) => {
        res.status(200).send(user);
    }).catch((e) => {
        res.status(500).send(e);
    })
})

router.delete('/users/:id', cors(corsOptions), (req, res) => {
    User.findByIdAndDelete(req.params.id).then((user) => {
        if (!user) {
            return res.status(404).send();
        }
        res.status(200).send(user);
    }).catch((error) => {
    })
})

module.exports = router