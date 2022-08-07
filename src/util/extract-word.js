const extractor = function(query){
    const pattern = /<[a-zA-Z]+>/; //only works with latin letters for now, to be updated
    const stringToSplit = query; //make it case insensitive
    const extractedWord= stringToSplit.match(pattern)
    extractedWord[0] = extractedWord[0].replace("<","")
    extractedWord[0] = extractedWord[0].replace(">","")
    return extractedWord
}

module.exports={
    extractor: extractor
}