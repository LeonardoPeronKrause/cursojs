let numbers = [1, 2, 3, 4];
let another = numbers;

// Soluction 1
numbers = [];

// Soluction 2
numbers.length = 0;

// Soluction 3
numbers.splice(0, numbers.length);


// Soluction 4
while (numbers.length > 0) {
    numbers.pop();
}

console.log(numbers);
console.log(another);