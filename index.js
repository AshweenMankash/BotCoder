var express = require('express');
var http = require('http');
var request = require('request');
var app = express();
var tokens = require('./tokens');
var requestType = require('./responses/requestType');
const token = tokens.botToken;

app.use(express.json())


app.get('/', function(req, res) {
    console.log("Sent");

    res.send("<h1>Ashween Mankash</h1>");
});


app.post('/', function(req, res) {

    if (req.body.event) {
        console.log(req.body);

        var text = requestType.hello(req.body.event);
        console.log(text);
        var data = {
            form: {
                token: token,
                channel: req.body.event.channel,
                text: text
            }
        };

        if (text)
            request.post('https://slack.com/api/chat.postMessage', data, function(error, response, body) {
                res.json();
            });
    }
    if (req.body.challenge) {

        const challenge = req.body.challenge;
        res.send(challenge);
    }
});
app.listen(8080);