// const cheerio = require('cheerio')
// const axios = require('axios')
// console.log("Starting")

// axios.get("https://medium.com/search?q=Data%20Science").then((res) => {
//         console.log("Start")

//         const $ = cheerio.load(res.data)
//         console.log("cheerio")

//         const urlElem = $('.postArticle-content')
//         console.log(urlElem.length)
//         for (var i = 0; i < urlElem.length; i++) {
//             console.log("iterating")

//             let element = $(urlElem[i]).find('h3')

//             if (element) {
//                 console.log($(element).text)
//             } else {
//                 console.log("No thing")

//             }
//         }

//     })


const htmlparser = require('node-html-parser')
const fetch = require('node-fetch')
const fs = require('fs')



module.exports.search = function() {

    const url = "https://medium.com/search?q=Data%20Science"
    return fetch(`${url}`)
        .then(res => res.text())
        .then(body => global = htmlparser.parse(body))
        .then(() => extractData(global))

}

function extractData(global) {
    var links = [];
    const heading = global.querySelectorAll('h3')
    heading.forEach(element => {

    });

    const urls = global.querySelectorAll('a')
    urls.forEach(element => {
        var href = element.rawAttrs.match(/href="([^"]*)/)[1];
        var index = element.rawAttrs.match(/data-action-index="([^"]*)/);
        if (index)
            links.push(href)
    });

    return links
}