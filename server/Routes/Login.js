let express = require('express');
const login = express();

login.post('/login', function(req, res) {
    console.log(req.body);
    let obj = {
        error: false,
        success: true,
        data: 'Login Route Executed',
        body: req.body

    }
    res.status(201).json(obj);
});

login.get('/getData', function (req, res){
    res.status(201).json('Get Method Executed')
});

module.exports = login;
