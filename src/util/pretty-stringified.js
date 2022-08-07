const tablemark = require('tablemark')

const prettifier = function(query){
    const decider = nounOrVerb(query);
    if(decider == "noun"){
        return declineNouns(query)
    }else if(decider == "verb"){
        return conjugateVerbs(query)
    }else if(decider == "adjective"){
        return declineAdjectives(query)
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
        {Form:"**V.**",Vienaskaita:tidiedArr[0],Daugiskaita:tidiedArr[1]},
        {Form:"**K.**",Vienaskaita:tidiedArr[2],Daugiskaita:tidiedArr[3]},
        {Form:"**K.**",Vienaskaita:tidiedArr[4],Daugiskaita:tidiedArr[5]},
        {Form:"**G.**",Vienaskaita:tidiedArr[6],Daugiskaita:tidiedArr[7]},
        {Form:"**Įn.**",Vienaskaita:tidiedArr[8],Daugiskaita:tidiedArr[9]},
        {Form:"**Vt.**",Vienaskaita:tidiedArr[10],Daugiskaita:tidiedArr[11]},
        {Form:"**Š.**",Vienaskaita:tidiedArr[12],Daugiskaita:tidiedArr[13]},
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
        {Įvardis:"**Aš**","**Esamasis laikas**":tidiedArr[0],"**Būtasis kartinis laikas**":tidiedArr[1],"**Būtasis dažninis**":tidiedArr[2],"**Būsimasis laikas**":tidiedArr[3]},
        {Įvardis:"**Tu**","**Esamasis laikas**":tidiedArr[4],"**Būtasis kartinis laikas**":tidiedArr[5],"**Būtasis dažninis**":tidiedArr[6],"**Būsimasis laikas**":tidiedArr[7]},
        {Įvardis:"**Jis/ji**","**Esamasis laikas**":tidiedArr[8],"**Būtasis kartinis laikas**":tidiedArr[9],"**Būtasis dažninis**":tidiedArr[10],"**Būsimasis laikas**":tidiedArr[11]},
        {Įvardis:"**Mes**","**Esamasis laikas**":tidiedArr[12],"**Būtasis kartinis laikas**":tidiedArr[13],"**Būtasis dažninis**":tidiedArr[14],"**Būsimasis laikas**":tidiedArr[15]},
        {Įvardis:"**Jūs**","**Esamasis laikas**":tidiedArr[16],"**Būtasis kartinis laikas**":tidiedArr[17],"**Būtasis dažninis**":tidiedArr[18],"**Būsimasis laikas**":tidiedArr[19]},
        {Įvardis:"**Jie/jos**","**Esamasis laikas**":tidiedArr[20],"**Būtasis kartinis laikas**":tidiedArr[21],"**Būtasis dažninis**":tidiedArr[22],"**Būsimasis laikas**":tidiedArr[23]},
    ])
    return redditTable;
}
const declineAdjectives = function(query){
    const newArr = convertArrays(query)
    var tidiedArr = []
    for (var i = 0; i < newArr.length; i++) {
        tidiedArr.push(newArr[i]["\Š\."])
        tidiedArr.push(newArr[i].Vienaskaita)
        tidiedArr.push(newArr[i].Daugiskaita)
        tidiedArr.push(newArr[i]["Vienaskaita_2"])
    }
    var redditTable = tablemark([
        {Form: "",name:"**Vienaskaita**",name2:"**Daugiskaita**",name3:"**Vienaskaita**",name4:"**Daugiskaita**"},
        {Form:"**V.**",name:tidiedArr[0],name2:tidiedArr[1],name3:tidiedArr[2],name4:tidiedArr[3]},
        {Form:"**K.**",name:tidiedArr[4],name2:tidiedArr[5],name3:tidiedArr[6],name4:tidiedArr[7]},
        {Form:"**K.**",name:tidiedArr[8],name2:tidiedArr[9],name3:tidiedArr[10],name4:tidiedArr[11]},
        {Form:"**G.**",name:tidiedArr[12],name2:tidiedArr[13],name3:tidiedArr[14],name4:tidiedArr[15]},
        {Form:"**Įn.**",name:tidiedArr[16],name2:tidiedArr[17],name3:tidiedArr[18],name4:tidiedArr[19]},
        {Form:"**Vt.**",name:tidiedArr[20],name2:tidiedArr[21],name3:tidiedArr[22],name4:tidiedArr[23]},
        {Form:"**Š.**",name:tidiedArr[24],name2:tidiedArr[25],name3:tidiedArr[26],name4:tidiedArr[27]},
    ],{
        columns:[
            "Form",
            {name: "Vyriškoji giminė"},
            {name:" "},
            {name: "Moteriškoji giminė"},
            {name:" "}
        ]
    })
    return redditTable;
}
const nounOrVerb = function(array){
    try{
        const listOfTable = Object.keys(array[0][0]);
        if(listOfTable[0] == "Jie/jos"){
                return "verb"
        }else if(listOfTable[3] =="Vienaskaita_2"){
                return "adjective"
        }else if(listOfTable[0] == "Š."){
                return "noun"
        }
    }catch{
        return "Error"
    }
   
   
}
module.exports = {
    prettifier:prettifier
}