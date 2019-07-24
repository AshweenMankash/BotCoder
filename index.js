var express = require('express');
var http = require('http');
var request = require('request');
var app = express();
var tokens = require('./tokens');

const token = tokens.botToken;

app.use(express.json())


app.get('/', function(req, res) {
    console.log("Sent");

    res.send("<h1 style="background-color: #333;color:white;">Ashween Mankash is awesome</h1>");
    res.send("<style>body {margin: 0%;background: lavender;}</style>");
});


const newLocal = app.post('/', function(req, res) {
    console.log(req.body);
    res.sendStatus(200);
    var data = {
        form: {
            token: token,
            channel: req.body.event.channel,
            text: "Hi! :wave: \n I'm your Uncle, Uncle bob!."
        }
    };
    if (req.body.event.text.includes("hey")) {
        request.post('https://slack.com/api/chat.postMessage', data, function(error, response, body) {
            res.json();
        });
    }

    const challenge = req.body.challenge;
    res.send(challenge);
});
app.listen(8080);

app.post('/hi', function(req, res) {
    console.log(req.body.channel);
    var data = {
        form: {
            token: token,
            channel: "#general",
            text: "Hi! :wave: \n I'm your Uncle, Uncle bob!."
        }
    };
    request.post('https://slack.com/api/chat.postMessage', data, function(error, response, body) {
        res.json();
    });
});

app.post('/question', function(req, res) {
    console.log(req.body.channel);
    var data = {
        form: {
            token: token,
            channel: "#general",
            text: "Question:\n SEARCH ON GOOGLE LAZY BASTARD."
        }
    };
    request.post('https://slack.com/api/chat.postMessage', data, function(error, response, body) {
        res.json();
    });
});

app.post('/', function(req, res, next) {
    console.log(req.body);
});
