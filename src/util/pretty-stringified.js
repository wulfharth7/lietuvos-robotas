
const prettifier = function(query){
    const newArr = convertArrays(query)
    var tidiedArr = []
    for (var i = 0; i < newArr.length; i++) {
        tidiedArr.push(newArr[i].Vienaskaita)
    }
    console.log(tidiedArr)
    return tidiedArr;
}

const convertArrays = function(array){
    var newArr = [];
    for(var i = 0; i < array.length; i++){
    newArr = newArr.concat(array[i]);
    }
    console.log(newArr);
    return newArr
}

module.exports = {
    prettifier:prettifier
}