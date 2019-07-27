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


const newLocal = app.post('/', function(req, res) {
    res.sendStatus(200);

    if (req.body.event) {


        var text = requestType.hello(req.body.event);

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
    const challenge = req.body.challenge;
    res.send(challenge);
});
app.listen(8080);

app.post('/hi', function(req, res) {
    console.log(req.body);
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