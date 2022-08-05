var scraper = require('table-scraper');
const {prettifier} = require('../util/pretty-stringified')

const tableOfContent = function(query){
    try{
        var tableofLog = "a";
        return scraper.get('https://morfologija.lietuviuzodynas.lt/zodzio-formos/'+query)
                .then(function(tableData){
                    return prettifier(tableData).toString() //JSON.stringify(tableData)
                })
    }catch(e){
        throw error
    }
    
}

module.exports = {
    tableOfContent: tableOfContent
}