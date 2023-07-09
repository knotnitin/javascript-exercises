const fibonacci = function(n) {
    n = parseInt(n)
    if(n < 0){ return "OOPS"}
    let num1 = 1
    let num2 = 1
    for(let i=2; i<n; i++){
        let temp = num1+num2
        num1 = num2
        num2 = temp
    }
    return num2
};

// Do not edit below this line
module.exports = fibonacci;
