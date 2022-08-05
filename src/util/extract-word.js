const extractor = function(query){
    const pattern = /<[a-zA-Z]+\s?[a-zA-Z]*>/;
    const stringToSplit = query;
    const extractedWord= stringToSplit.match(pattern)
    console.log(extractedWord)
    extractedWord[0] = extractedWord[0].replace("<","")
    extractedWord[0] = extractedWord[0].replace(">","")

    console.log(query)
    console.log(extractedWord[0])
    return extractedWord
}

module.exports={
    extractor: extractor
}