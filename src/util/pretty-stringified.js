const tablemark = require('tablemark')

const prettifier = function(query){
    const newArr = convertArrays(query)
    var tidiedArr = []
    for (var i = 0; i < newArr.length; i++) {
        tidiedArr.push(newArr[i]["\Š\."])
        tidiedArr.push(newArr[i].Vienaskaita)
    }
    var redditTable = tablemark([
        {Form:"V.",Vienaskaita:tidiedArr[0],Daugiaskaita:tidiedArr[1]},
        {Form:"K.",Vienaskaita:tidiedArr[2],Daugiaskaita:tidiedArr[3]},
        {Form:"K.",Vienaskaita:tidiedArr[4],Daugiaskaita:tidiedArr[5]},
        {Form:"G.",Vienaskaita:tidiedArr[6],Daugiaskaita:tidiedArr[7]},
        {Form:"Įn.",Vienaskaita:tidiedArr[8],Daugiaskaita:tidiedArr[9]},
        {Form:"Vt.",Vienaskaita:tidiedArr[10],Daugiaskaita:tidiedArr[11]},
        {Form:"Š.",Vienaskaita:tidiedArr[12],Daugiaskaita:tidiedArr[13]},
    ])
    return redditTable;
}

const convertArrays = function(array){
    var newArr = [];
    for(var i = 0; i < array.length; i++){
    newArr = newArr.concat(array[i]);
    }
    return newArr
}

module.exports = {
    prettifier:prettifier
}