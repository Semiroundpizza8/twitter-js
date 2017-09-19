const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser");
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res, next) {
    let tweets = tweetBank.list();
    res.render('index', {
        tweets: tweets,
        showForm: true,
        onUser: false
    });
});

router.get('/users/:name', (req, res, next) => {
    var tweetArray = tweetBank.find({ name: req.params.name });

    console.log(tweetArray);
    res.render('index',
        {
            tweets: tweetArray,   
            showForm: true,
            onUser: true         
        });
})


router.get('/tweets/:id', (req, res, next) => {
    var tweetId = tweetBank.find({ id: Number(req.params.id) });

    res.render('index', {
        title: 'Twitter.js',
        tweets: tweetId,
    })
})

router.post('/tweets', function(req, res, next) {
    console.log(req.body);
    var name = req.body.name;
    var text = req.body.text;
    tweetBank.add(name, text);
    res.redirect('/');
  });


module.exports = router;