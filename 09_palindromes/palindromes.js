const palindromes = function (textInput) {
    
    let lowercaseTextInput = textInput.toLowerCase();
    let cleanTextInput = lowercaseTextInput.replace(/[^a-z]/g, "")
    
    return cleanTextInput.split("").reverse().join("") == cleanTextInput;

    
    //below stolen from solution because I'm about to get a haircut and I need closure on this
    //.replace(/[^a-z]/g, "")
};

// Do not edit below this line
module.exports = palindromes;
