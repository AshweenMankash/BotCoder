var express = require('express');
var request = require('request');
var app = express();
var requestType = require('./responses/requestType');


app.use(express.json())


app.get('/', function(req, res) {
    res.send("<h1>Ashween Mankash</h1>");

});


app.post('/', function(req, res) {

    if (req.body.event) {
        requestType.hello(req.body.event).then((text) => {
            if (text) {
                console.log(text)
                var data = {
                    form: {
                        token: "xoxb-690439174018-702054708128-OTm9V2Y5hKAvIKrrxTca3xYg",
                        channel: req.body.event.channel,
                        text: text
                    }
                };


                request.post('https://slack.com/api/chat.postMessage', data, function(error, response, body) {
                    console.log("sent")
                    res.json();
                });
            }

        });


        if (req.body.challenge) {

            const challenge = req.body.challenge;
            res.send(challenge);
        }

    }
});
app.listen(8080);