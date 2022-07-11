const removeFromArray = function(array, ...toRemove) {
    let output = [];
        output = array.filter(x => {
            if (!toRemove.includes(x)) {
                return true;
            }
        });
    
    return output;
};

removeFromArray([1, 2, 3, 4, 5], 5, 3)

// Do not edit below this line
module.exports = removeFromArray;
