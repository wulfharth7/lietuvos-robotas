var scraper = require('table-scraper');
const {prettifier} = require('../util/pretty-stringified')

const tableOfContent = function(query){
        return scraper.get('https://morfologija.lietuviuzodynas.lt/zodzio-formos/'+query)
                .then(function(tableData){ 
                    console.log(tableData)
                    return prettifier(tableData).toString() //JSON.stringify(tableData)
                }) 
                .catch((error)=>{
                    return "error"
                }) 
}

module.exports = {
    tableOfContent: tableOfContent
}