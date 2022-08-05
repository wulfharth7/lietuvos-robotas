const { CommentStream } = require('snoostorm');
const Snoowrap = require('snoowrap');
require('dotenv').config();


const client = new Snoowrap({
    userAgent: 'windows:snoowrap:v1.0:(by/u/turco_lietuvoje)',
    clientId: process.env.CLIENTID,
    clientSecret: process.env.CLIENTSECRET,
    username: process.env.USERNAME,
    password: process.env.PASSWORD
});

const config = {
    requestDelay: 5000,
    warnings: true,
    continueAfterRatelimitError: false,
    retryErrorCodes: [502, 503, 504, 522],
    debug: false
}
client.config(config)
const comments = new CommentStream(client, { 
    subreddit: 'testingground4bots', 
    limit: 10, 
    pollTime: 10000 
});

module.exports = {
    comments: comments
}
