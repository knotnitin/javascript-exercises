const reverseString = function(string) {
    let len = string.length
    let rev = [len]
    for(let i=0; i<len; i++){
        rev[len - i -1] = string[i]
    }
    word = ""
    for(let i=0; i<len; i++){
        word = word + rev[i]
    }
    return word
};

// Do not edit below this line
module.exports = reverseString;
