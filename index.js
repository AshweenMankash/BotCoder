var express = require('express');
var http = require('http');
var request = require('request');
var SlackBots = require('slackbots');
var app = express();
var botkit = require('botkit');
const token = 'xoxb-690439174018-702054708128-tI8t0wV9Z6Vcmvwp8PGXCQaz';


app.use(express.json())

var controller = new botkit();

controller.hears('hello', 'message', async(bot, message) => {
    await bot.reply(message, "Ashween");
});
var bot = new SlackBots({
    token: token,
    name: "Uncle Bob",
});


bot.on("message", function() {
    

    if (data.event.text === "hey") {}

});

app.get('/', function(req, res) {
    console.log("Sent");
    res.send("<h1>Ashween Mankash</h1>");
});




const newLocal = app.post('/', function(req, res) {
    const challenge = req.body.challenge;
    res.send(challenge);
});
app.listen(8080);

app.post('/hi', function(req, res) {
    console.log(req.body);
    var data = {
        form: {
            token: token,
            channel: req.body.channel,
            text: "Hi! :wave: \n I'm your Uncle, Uncle bob!."
        }
    };
    request.post('https://slack.com/api/chat.postMessage', data, function(error, response, body) {
        res.json();
    });
});


// var bot = new SlackBots({
//     token: 'xoxb-690439174018-702054708128-Gz7A4FBaq0RJlHCo7KMHvfWf',
//     name: 'Uncle Bob'
// });
// var params = {
//     icon_emoji: ':cat:'
// };
// bot.on('start', function() {
//     bot.postMessageToChannel('general', 'Uncle Bob is here!!', params);
// });
