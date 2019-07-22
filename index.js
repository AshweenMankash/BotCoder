var SlackBots = require('slackbots');
var http = require('https');


http.get('/', function(res, req) {
    const challenge = res.body.challenge;
    res.status(200);
    res.set({
        'Content-Type': 'text/plain',
        'challenge': challenge
    });
    res.end();
});

var bot = new SlackBots({
    token: 'xoxb-690439174018-702054708128-Gz7A4FBaq0RJlHCo7KMHvfWf',
    name: 'Uncle Bob'
});

bot.on('start', function() {

});