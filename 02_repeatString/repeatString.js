const repeatString = function(string, num) {
    let i = 0
    word = ""
    if(num < 0){
        return "ERROR"
    }
    for (i = 0; i < num; i++){
        word = word + string
    }
    return word
};

// Do not edit below this line
module.exports = repeatString;
