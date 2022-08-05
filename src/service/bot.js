const {comments} = require('../config/lietuvos-config')
const {extractor} = require('../util/extract-word')
const {tableOfContent} = require('../util/get-table')
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

const commenting =  function(){
    comments.on('item',async (item) => {
        try{
            if(item.created_utc < BOT_START) return;
            if(!canSummon(item.body)) return;
            var extractedWord = extractor(item.body)
            tableOfContent(extractedWord).then(function(tableofLog){
                item.reply(tableofLog)
                console.log(tableofLog)
            })
        }catch(error){
            console.log(error)
            item.reply('It seems to me that the word you\'ve written doesn\'t exist in lithuanian language.')
        }
    
});
} 

module.exports={
    commenting: commenting
}
