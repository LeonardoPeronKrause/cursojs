const numbers = [1, 2, 3];

const allPositive = numbers.some(function(value) {
    return value >= 0;
});

console.log(allPositive);