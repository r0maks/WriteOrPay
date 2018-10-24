const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/notesDb'
const user = require('./model/user');
const cors = require('cors');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors({ origin: true, credentials: true }));

app.post('/api/user/login', (req, res) => {
    mongoose.connect(url, function (err) {
        if (err) throw err;
        user.find({
            username: req.body.username, password: req.body.password
        }, function (err, user) {
            if (err) throw err;
            if (user.length === 1) {
                return res.status(200).json({
                    status: 'success',
                    data: user
                })
            } else {
                return res.status(200).json({
                    status: 'fail',
                    message: 'Login Failed'
                })
            }

        })
    });
})

app.listen(3000, () => console.log('blog server running on port 3000!'))