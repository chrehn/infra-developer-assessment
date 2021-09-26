'use strict';

const fs = require('fs');
const axios = require('axios');
const xml2js = require('xml2js');

let data = fs.readFileSync('feeds.json');
let jsonFeeds = JSON.parse(data);

exports.fetchAllFeeds = function (req, res) {
    let dict = {};
    let listOfFeeds = jsonFeeds.feeds;

    let promiseList = [];

    listOfFeeds.forEach(feed => {
        promiseList.push(axios.get(feed))
    })

    Promise.all(promiseList).then(function(results) {
        results.forEach(res => {

            let response = res.data;

            xml2js.parseString(response, {mergeAttrs: true}, (err, result) => {
                const json = JSON.stringify(result, null, 1);
                
                let items = result.rss.channel[0].item
                
                items.forEach(item => {
                    if (!dict[item.title[0]]) {
                        dict[item.title[0]] = item
                    }
                });
            })
        })

        let uniqueFeeds = Object.values(dict);
        let sortedFeeds = uniqueFeeds.sort((a, b) => new Date(a.pubDate[0]) - new Date(b.pubDate[0]))

        let responseArray = [];
        sortedFeeds.slice(0,10).forEach(val => {
             responseArray.push({title: val.title[0], link: val.link[0]})
        })

        res.json(responseArray);
    }).catch(err => {
        console.log(err);
        res.status(400).send("Couldn't fetch latest feeds right now.")
    }) 
}