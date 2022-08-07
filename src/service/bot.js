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
            var replyString = "labas u/"+item.author.name+"! esu robotas ir pateikiu lentelę apie žodžius, veiksmažodžius, būdvardžius."+
                " jei prieš nieko, čia tavo žodžio lentelė. net galite sužinot daugiau čia ^[šaltinis](https://morfologija.lietuviuzodynas.lt/zodzio-formos/"+extractedWord+
                ") \n\n "
                var errorReply= "labas u/"+item.author.name+"! esu bandęs rasti žodį, kurį rašėi, atsiprašau ir dėja, bet negalėjau rasti. "+
                    "gal tas žodis neegzistuoja lietuvių kalboj, rašėi neteisingai - arba yra klaida mano kode.\n šiaip ar taip, galite bandyt rast savarankiškai čia ^[žodynas](https://morfologija.lietuviuzodynas.lt/"
                var replyStringEnder = " \n\n \*\*\* \n ^feel ^free ^to ^report ^bugs ^or ^errors\n ^\[[source-code]\](https://github.com/wulfharth7/lietuvos-robotas) ^| ^\[[buy-me-a-coffee☕]\](https://www.buymeacoffee.com/beriscen)"
            if(item.created_utc < BOT_START) return;
            if(!canSummon(item.body)) return;
            var extractedWord = extractor(item.body)
            tableOfContent(extractedWord).then(function(tableofLog){
                if(tableofLog !== "error"){
                    item.reply(replyString+ tableofLog+replyStringEnder)
                }else{
                    item.reply(errorReply+replyStringEnder)
                }
            })
        }catch(Error){  
            var errorReply= "labas u/"+item.author.name+"! esu bandęs rasti žodį, kurį rašėi, atsiprašau ir dėja, bet negalėjau rasti. "+
                    "gal tas žodis neegzistuoja lietuvių kalboj, rašėi neteisingai - arba yra klaida mano kode.\n\n šiaip ar taip, galite bandyt rast savarankiškai čia ^[žodynas](https://morfologija.lietuviuzodynas.lt/)"
                    item.reply(errorReply+replyStringEnder)
        }
    
});
} 

module.exports={
    commenting: commenting
}
