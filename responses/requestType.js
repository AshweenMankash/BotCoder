var lol = require('../lol')

module.exports.hello = async function(query) {

    if (query.type == "message" && query.text) {

        if (query.text.includes("<@ULN1LLU3S>")) {
            if ((query.text.includes("articles"))) {
                return lol.search().then((lists) => lists[10])
            }

            if ((query.text.includes(" hey ") || query.text.includes(" hi ") || query.text.includes(" Hey ") || query.text.includes(" hello ") || query.text.includes(" Hello "))) {
                return "Hi! :wave: \n I'm your Uncle, Uncle bob!.";
            }

            if (query.text.includes("how") || query.text.includes("How")) {

                if (includes(query.text, "is")) {
                    if (includes(query.text, "this")) {
                        if (includes(query.text, "possible")) {
                            return "Maybe it isn't,but Maybe ;)";
                        } else {
                            return "Searching...."
                        }
                    }

                }
                if (includes(query.text, "are") || includes(query.text, "do")) {
                    return " I am doing good!!!";
                }


                return "Sorry,I don't understand it :/"
            }

            return " I don't get it";

        }
    }

    if (query.type == "member_joined_channel") {

        return "Welcome :grin:, coder!";

    }


};


function includes(text1, text2) {
    return text1.includes(text2);
}