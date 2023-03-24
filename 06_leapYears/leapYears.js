const leapYears = function(yearinquestion) {
    if(isNaN(yearinquestion)){return "ERROR"}

    if(yearinquestion % 100 == 0){
        if(yearinquestion % 400 == 0){
            return true;
        }
        else{return false;}
    }
    else{
        if(yearinquestion % 4 == 0){
            return true;
        }
        else {return false;}
    }

};

// Do not edit below this line
module.exports = leapYears;
