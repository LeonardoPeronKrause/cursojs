const numbers = [1, 2, 3, 4];

// Remove do Final
const last = numbers.pop()
console.log(numbers);
console.log(last);

// Remove do Começo
const first = numbers.shift()
console.log(numbers)
console.log(first)

// Remove do Meio
numbers.splice(2, 2)
console.log(numbers)