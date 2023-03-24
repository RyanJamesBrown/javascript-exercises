const sumAll = function(firsty, secondy) {
    let sum = 0;
    let biggy = 0;
    let smally = 0;
    if(firsty < 0 || secondy < 0){return "ERROR"};
    if(isNaN(firsty) || isNaN(secondy)){return "ERROR"};
    if(typeof firsty != 'number' || typeof secondy != 'number'){return "ERROR"}; 

    if (firsty > secondy){
        smally = secondy;
        biggy = firsty;
    }
    else if (firsty < secondy){
        smally = firsty;
        biggy = secondy;
    }
    else {return "0"}

    let difference = biggy - smally;
    for (i=0;i<=difference;i++){
        sum = sum + smally + i
    }

    return sum;
};



// Do not edit below this line
module.exports = sumAll;
