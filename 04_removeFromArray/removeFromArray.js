const removeFromArray = function(array, ...remove) {
 /*   for(i=0;i<array.length;i++){
        if (array[i] == removeditem){
            array.splice(i,1);
        }
        return array;
    }*/
    let newArray = [];
    array.forEach(element => {
        if(!remove.includes(element)){
            newArray.push(element);
        }
        
    });

    return newArray;

};

// Do not edit below this line
module.exports = removeFromArray;
