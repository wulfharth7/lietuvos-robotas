
const prettifier = function(query){
    const newArr = convertArrays(query)
    var tidiedArr = []
    for (var i = 0; i < newArr.length; i++) {
        tidiedArr.push(newArr[i]["\Š\."])
        tidiedArr.push(newArr[i].Vienaskaita)
    }
    console.log("tidied arr now")
    console.log(tidiedArr)
    var string="";
    for(var i=0;i<tidiedArr.length;i+=2){
        string = string+ " | "+tidiedArr[i]+ " | "+tidiedArr[i+1]+" |\n"
    }
    return string;
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