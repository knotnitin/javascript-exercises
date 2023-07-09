const palindromes = function (string) {
    let word = string.replace(/[^a-z0-9]/gi, '')
    word = word.toLowerCase()
    let rev = ""
    for(let i=0; i<word.length; i++){
        rev += word[word.length - i - 1]
    }
    return rev == word
};

// Do not edit below this line
module.exports = palindromes;
