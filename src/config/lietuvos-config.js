const { CommentStream } = require('snoostorm');
const Snoowrap = require('snoowrap');

const client = new Snoowrap({
    userAgent: 'lietuvos-robotas',
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
    subreddit: 'Lithuania', 
    limit: 10, 
    pollTime: 10000 
});

module.exports = {
    comments: comments
}
