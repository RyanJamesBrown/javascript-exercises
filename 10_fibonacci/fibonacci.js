const fibonacci = function(sequenceNum) {
    let farray = [0,1,1];
    if(sequenceNum < 1){return "OOPS"}
    for(i=3;i<=sequenceNum;i++){
        farray.push(farray[i-2]+farray[i-1]);
    }

    return farray[sequenceNum];
};

// Do not edit below this line
module.exports = fibonacci;
