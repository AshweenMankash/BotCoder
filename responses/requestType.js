module.exports.hello = function(query) {
    if (query.type == "message" && query.text) {
        if (query.text.includes("hey") || query.text.includes("hi") || query.text.includes("Hey") || query.text.includes("hello") || query.text.includes("Hello")) {

            return "Hi! :wave: \n I'm your Uncle, Uncle bob!.";

        }
    }

    if (query.type == "member_joined_channel") {

        return "Welcome :grin:";

    }


};