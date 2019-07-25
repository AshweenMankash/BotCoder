var express = require('express');
var http = require('http');
var request = require('request');
var app = express();
var tokens = require('./tokens');

const token = tokens.botToken;

app.use(express.json())


app.get('/', function(req, res) {
    console.log("Sent");
    res.send("<h1>Ashween Mankash // Luffy is awesome</h1>");
});


const newLocal = app.post('/', function(req, res) {
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
