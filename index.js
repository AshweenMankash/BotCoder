var SlackBots = require('slackbots');
var http = require('https');


const server = http.createServer((req, res) => {
    if (req.method == 'POST') {
        const challenge = req.body.challenge;
        res.status(200);
        res.set({
            'Content-Type': 'text/plain',
            'challenge': challenge
        });
        res.end();
    }
});


var bot = new SlackBots({
    token: 'xoxb-690439174018-702054708128-Gz7A4FBaq0RJlHCo7KMHvfWf',
    name: 'Uncle Bob'
});

bot.on('start', function() {

});