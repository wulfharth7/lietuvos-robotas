const {comments} = require('../config/lietuvos-config')
const {extractor} = require('../util/extract-word')
const BOT_START = Date.now() / 1000;

const canSummon = (msg) => {
    /*if(msg){
        msg.toLowerCase().includes('!inspect');
        //function
        return;
    }
    return*/
    return msg && msg.toLowerCase().includes('!inspect');
};

const commenting = function(){
    comments.on('item', (item) => {
    if(item.created_utc < BOT_START) return;
    if(!canSummon(item.body)) return;
    //console.log(item)
    const extractedWord = extractor(item.body)
    item.reply('you just wrote '+extractedWord);
});
} 

module.exports={
    commenting: commenting
}
