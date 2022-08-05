const extractor = function(query){
    const pattern = /<[a-zA-Z]+\s?[a-zA-Z]*>/;
    const stringToSplit = query;
    const extractedWord= stringToSplit.match(pattern)
    extractedWord[0] = extractedWord[0].replace("<","")
    extractedWord[0] = extractedWord[0].replace(">","")
    return extractedWord
}

module.exports={
    extractor: extractor
}