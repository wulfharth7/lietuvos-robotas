const Snoowrap = require('snoowrap');
const { CommentStream } = require('snoostorm');
require('dotenv').config();


const client = new Snoowrap({
    userAgent: 'lietuvos-robotas',
    clientId: process.env.clientId,
    clientSecret: process.env.clientSecret,
    username: process.env.username,
    password: process.env.password
});

const comments = new CommentStream(client, { 
    subreddit: 'Lithuania', 
    limit: 10, 
    pollTime: 10000 
});

const BOT_START = Date.now() / 1000;

const canSummon = (msg) => {
    return msg && msg.toLowerCase().includes('!inspect');
};

comments.on('item', (item) => {
    if(item.created_utc < BOT_START) return;
    if(!canSummon(item.body)) return;
    console.log(item)
    item.reply('hello world! - this is testing');
});