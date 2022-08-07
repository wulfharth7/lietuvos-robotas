const tablemark = require('tablemark')

const prettifier = function(query){
    const decider = nounOrVerb(query);
    if(decider == "noun"){
        return declineNouns(query)
    }else if(decider == "verb"){
        return conjugateVerbs(query)
    }
}

const convertArrays = function(array){
    var newArr = [];
    for(var i = 0; i < array.length; i++){
    newArr = newArr.concat(array[i]);
    }
    return newArr
}
const declineNouns = function (query){
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
const conjugateVerbs = function(query){
    const newArr = convertArrays(query)
    var tidiedArr = []
    for (var i = 0; i < newArr.length; i++) {
        tidiedArr.push(newArr[i]["Jie/jos"])
        tidiedArr.push(newArr[i]["Esamasis laikas"])
        tidiedArr.push(newArr[i]["Būtasis kartinis laikas"])
        tidiedArr.push(newArr[i]["Būtasis dažninis"])
    }
    var redditTable = tablemark([
        {Įvardis:"Aš","Esamasis laikas":tidiedArr[0],"Būtasis kartinis laikas":tidiedArr[1],"Būtasis dažninis":tidiedArr[2],"Būsimasis laikas":tidiedArr[3]},
        {Įvardis:"Tu","Esamasis laikas":tidiedArr[4],"Būtasis kartinis laikas":tidiedArr[5],"Būtasis dažninis":tidiedArr[6],"Būsimasis laikas":tidiedArr[7]},
        {Įvardis:"Jis/ji","Esamasis laikas":tidiedArr[8],"Būtasis kartinis laikas":tidiedArr[9],"Būtasis dažninis":tidiedArr[10],"Būsimasis laikas":tidiedArr[11]},
        {Įvardis:"Mes","Esamasis laikas":tidiedArr[12],"Būtasis kartinis laikas":tidiedArr[13],"Būtasis dažninis":tidiedArr[14],"Būsimasis laikas":tidiedArr[15]},
        {Įvardis:"Jūs","Esamasis laikas":tidiedArr[16],"Būtasis kartinis laikas":tidiedArr[17],"Būtasis dažninis":tidiedArr[18],"Būsimasis laikas":tidiedArr[19]},
        {Įvardis:"Jie/jos","Esamasis laikas":tidiedArr[20],"Būtasis kartinis laikas":tidiedArr[21],"Būtasis dažninis":tidiedArr[22],"Būsimasis laikas":tidiedArr[23]},
    ])
    return redditTable;
}
const nounOrVerb = function(array){
   const listOfTable = Object.keys(array[0][0]);
   if(listOfTable[0] == "Jie/jos"){
        return "verb"
   }else if(listOfTable[0] == "Š."){
        return "noun"
   }
}
module.exports = {
    prettifier:prettifier
}