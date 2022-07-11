const sumAll = function(a, b) {
    let output = 0;
    // error conditions
    if (typeof a != 'number' || typeof b !== 'number') {
        return 'ERROR';
    } else if (a < 0 || b < 0) {
        return 'ERROR'
    }
    // order the parameters
    const inputArray = [a, b];
    inputArray.sort((x, y) => x - y);
    // for loop going through the numbers
    for (let i = inputArray[0]; i <= inputArray[1]; i++) {
        output += i;
    }

    return output;
};

// Do not edit below this line
module.exports = sumAll;
