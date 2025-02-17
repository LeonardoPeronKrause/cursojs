//const numbers = [1, 2, 3, 4];

console.log(numbers.includes(4));

function includes(array, searchElements) {
    array = numbers;
    searchElements(numbers.indexOf(1) !== -1);
} 

// OU

//const numbers = [1, 2, 3, 4];

console.log(includes(numbers, 1));

function includes(array, searchElements) {
    for (let element of array)
        if (element === searchElements)
            return true;
        return false;
}
