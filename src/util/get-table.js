var scraper = require('table-scraper');

const tableOfContent = function(query){
    try{
        scraper.get('https://morfologija.lietuviuzodynas.lt/zodzio-formos/'+query)
                .then(function(tableData){
                    return tableData
                });
    }catch(e){
        throw error
    }
    
}

module.exports = {
    tableOfContent: tableOfContent
}