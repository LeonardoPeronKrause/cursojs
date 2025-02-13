**TERNATY OPERATORS**
let points = 110;
let type = points > 100 ? 'gold' : 'silver';

console.log(type)

**SWITCH CASE**

let role = 'moderator';

switch (role) {
    case 'guest':
        console.log('Guest User');
        break;
    case 'moderator':
        console.log('Moderator User');
        break;
    default:
        console.log('Unknow User');
        break;
}

**FOR**


for (let i = 1; i <= 10; i++) {
    console.log(i)
}

**WHILE**

let i = 0;
while (i <= 50) {
   console.log(i);
   i++;
}

**FOR IN**

const person = {
    name: 'Leo',
    age: 22
};

for (let key in person) 
    console.log(key, person[key]);

**EXERCICE**

const output = fizzBuzz(false);
console.log(output);

function fizzBuzz(input) {
    if (typeof input !== 'number')
        return NaN;

    if ((input % 3 === 0) && (input % 5 === 0))
    return 'FizzBuzz'

    if ( input % 3 === 0)
        return 'Fizz';

    if (input % 5 === 0)
        return 'Buzz';

    return input;
}   

**EXERCICE Demerit Points**

// Speed Limit = 70
// 5 -> 1 point
// Math.floor(1.3)
// 12 points -> suspended

/*
let limit = 70;
let speed = 75;

function checkSpeed(speed) {
    if (speed <= limit) {
        console.log('Ok');
        return;
    }
    let calcPoints = Math.floor((speed - limit) / 5);

    if (calcPoints >= 12) {
        console.log('Licença Suspensa.')
    } else {
        console.log(`Você estava a ${speed} km/h (acima do limite), e recebe ${calcPoints} pontos na carteira!`)
    }
}

checkSpeed(speed);*/

function checkSpeed(speed) {
    const limit = 70;
    const kmPerPoint = 5;

    if (speed < limit + kmPerPoint) {
        console.log('Ok');
        return;
    } 
    const points = Math.floor((speed - limit) / kmPerPoint);
    if (points >= 12) 
        console.log('License Suspended');
    else 
        console.log('Points:', points);
    
}

checkSpeed(70);

**EXERCICE PAR E IMPAR**

showNumbers(10);

function showNumbers(limit) {
    for (let i = 0; i <= limit; i++) {
        if (i % 2 === 0) {
            console.log(i + ' EVEN');
        } else {
            console.log(i + ' ODD');
        }
    }
}

**EXERCICIO PARA VER QUANDO VALORES SAO FALSY NO ARRAY**

const array = [0, null, undefined, '', 2, 3];

console.log(countTruthy(array))

function countTruthy(array) {
    let count = 0;
    for (let value of array)
        if (value) 
            count++
        return count;
}

**EXERCICIO PARA MOSTRA SÓ AS STRINGS DO ARRAY**

const movie = {
    title: 'a',
    releaseYear: 2008,
    rating: 4.5,
    director: 'Leonardo'
}

showProperties(movie);

function showProperties(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'string')
            console.log(key, obj[key]);
    }
}

**EXERCICIO PARA CALCULAR MÉDIA DE NOTAS**

const marks = [100, 100, 70];

console.log(calculateGrate(marks));

function calculateGrate(marks) {
    const average = calculateAverage(marks);
    if (average < 60) return 'F';
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return 'B';
    return 'A';
}

function calculateAverage(array) {
    let sum = 0;
    for (let value of array)
        sum += value;
    return sum / array.length;
}

**EXERCICIO FAMOSO ENTRE OS DEVS JUNIOR**

showStars(4);

function showStars(rows) {
    for (let row = 1; row <= rows; row++) {
        let pattern = '';
        for (let i = 0; i < row; i++) {
            pattern += '*';
        }
        console.log(pattern)
    }
}

**OBJETOS**

const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function() {
        console.log('draw')
    }
};

**FACTORY FUNCTION**

function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw')
        }
    };
}

const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);

**CONSTRUCTOR FUNCTION -> PASCAL NOTATION EscrevaAssimAsFunçoes**

function Circle(radius) {
    this.raius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const circle = new Circle(1);

**Adicionando atributos ao objeto**

const circle = {
    radius: 1
};

circle.color = 'blue';
circle.draw = function() {}

console.log(circle)

**ENUMERATING PROPERTIES OF AN OBJECT**

const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

for (let key in circle)
    console.log(key, circle[key])

for (let key of Object.keys(circle)) 
    console.log(key)

**EXERCISE 1 - ADDRESS OBJECT**

let address = {
    street: 'Capitão Romualdo de Barros',
    city: 'Fpolis',
    zipCode: 88040600
}

function showAddress(address) {
    for (let key in address) {
        console.log(key, address[key])
    }
}

showAddress(address)

**EXERCISE - FACTORY AND CONSTRUCTOR FUNCTIONS**

// Factory Function
let address = createAddress('Capitão Romualdo de Barros', 'Florianópolis', 88040600);

console.log(address);

function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    };


// Constructor Function
let address = new Address('Capitão Romualdo de Barros', 'Florianópolis', 88040600);

console.log(address);

function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

**EXERCISE 3 - OBJECT EQUALITY**

let address1 = new Address('a', 'b', 'c');
let address2 = new Address('a', 'b', 'c');
let address3 = address1;

console.log(areEqueal(address1, address2))
console.log(areSame(address1, address2))
console.log(areSame(address1, address3))

function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

function areEqueal(address1, address2) {
    return address1.street === address2.street &&
    address1.city === address2.city &&
    address1.zipCode === address2.zipCode;
}

function areSame(address1, address2) {
    return address1 === address2;
}

**EXERCISE 4 - BLOG POST OBJECT**

let post = {
    title: 'a',
    body: 'b',
    author: 'c', 
    views: 10,
    comments: [
        { author: 'a', body: 'b'},
        { author: 'c', body: 'd'},
    ],
    isLive: true
}

console.log(post)

**EXERCISE 5 - CONSTRUCTOR FUNCTIONS**

let post = new Post('a', 'b', 'c');

console.log(post);

function Post(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}

**EXERCISE 6 - PRICE RANGE OBJECTS**

let priceRanges = [
    { label: '$', tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10 },
    { label: '$$', tooltip: 'Moderate', minPerPerson: 11, maxPerPerson: 20 },
    { label: '$$$', tooltip: 'Expensive', minPerPerson: 21, maxPerPerson: 50 },
];

let restaurants = [
    { averagePerPerson: 5 }
]

**ARRAY**

const numbers = [3, 4];

// Add no final
numbers.push(5, 6);

// Add no início
numbers.unshift(1, 2)

// Add no medio, porem eu tenho que falar qual o lugar do indice ele vai adicionar e qual elemento excluir porem no caso nao exlui nenhum e apos eu boto oq eu quero add no array
numbers.splice(2, 0, 'a', 'b');

console.log(numbers);

**FINDING ELEMENTS (PRIMITIVES)**

const numbers = [1, 2, 3, 1, 4];

// A função indexOf verifica se o valor que eu passar dentro do '()' está no array ou não, se não estiver ele retorna -1, se estiver ele retorna o indice que se encontra esse valor dentro do array
console.log(numbers.indexOf(1))

// Se tiver dois elementos com o mesmo valor ele sempre vai mostrar o ultimo
console.log(numbers.lastIndexOf(1))

// Procura se existe o indice que eu passar dentro do parenteses, se nao tiver retorna false, se não tiver retorna true, AMBOS OS CODIGOS FAZEM A MESMA COISA POREM O SEGUNDO É MAIS USADO POIS É MAIS SIMPLES!
console.log(numbers.indexOf(1) !== -1)
console.log(numbers.includes(1))

**FINDING ELEMENTS (REFERENCES TYPES)**

const courses = [
    {id: 1, name: 'a'},
    {id:2, name: 'b'},
];

// O método .find() percorre o array e retorna o primeiro elemento que satisfaz a condição dentro da função de callback. No caso, estamos verificando se course.name é igual a 'a'; 
const course = courses.find(function(course) {
    return course.name === 'a';
})

// Se dermos um console.log ele retorna o indice que se encontra esse valor porem se não tiver ele retorna -1
console.log(course);
 
// Se tivermos esse mesmo codigo
const courses = [
    {id: 1, name: 'a'},
    {id:2, name: 'b'},
];

// Com o findIndex, se tiver ele retorna o numero do indice que se encontra, caso contrario retorna -1
const course = courses.findIndex(function(course) {
    return course.name === 'a';
})

console.log(course);
 

**ARROW FUNCTIONS**

const courses = [
    {id: 1, name: 'a'},
    {id:2, name: 'b'},
];

const course = courses.find(() => course.name === 'a');

console.log(course)

**REMOVING ELEMENTS**

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

**EMPTYING AN ARRAY**

let numbers = [1, 2, 3, 4];
let another = numbers;

// Soluction 1
numbers = [];

// Soluction 2
numbers.length = 0;

// Soluction 3
numbers.splice(0,numbers.length);


// Soluction 4
while (numbers.length > 0) {
    numbers.pop();
}

console.log(numbers);
console.log(another);

**COMBINING AND SLICING ARRAYS**

const first = [{ id: 1}];
const second = [4, 5, 6];

const combined = first.concat(second);
first[0].id = 10;

const slice = combined.slice()

console.log(combined)
console.log(slice)

**The Spread Operator**

const first = [1, 2, 3];
const second = [4, 5, 6];

//const combined = first.concat(second);
const combined = [...first, 'a', ...second, 'b'];

//const copy = combined.slice();
const copy = [...combined];

console.log(copy)

**ITERATING AN ARRAY**

const numbers = [1, 2, 3]

for (let number of numbers) {
    console.log(number);
}

numbers.forEach((number, index) => console.log(index, number));

**JOINING ARRAYS**

const numbers = [1, 2, 3];

const joined = numbers.join(', ')
console.log(joined);

const message = 'This is my first message';

const parts = message.split(' ')
console.log(parts)

const combined = parts.join('-');
console.log(combined)

**SORTING ARRAYS**

const courses = [
    { id: 1, name: 'Node.js'},
    { id: 2, name: 'javaScript' },
];

courses.sort(function(a, b) {
    //a < b => -1
    //a < b = 1
    //a === b = 0
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
});

console.log(courses);

**TESTING THE ELEMENTS OF AN ARRAY**

const numbers = [1, 2, 3];

const allPositive = numbers.some(function(value) {
    return value >= 0;
});

console.log(allPositive);

**FILTERING AN ARRAY**

const numbers = [1, -1, 2, 3, 0];
                        
// (n => n >= 0), lê-se -> n(number) =>(where) n(number) >= 0
const filtered = numbers.filter(n => n >= 0);

console.log(filtered);

**MAPPING AN ARRAY**


EXEMPLO 1 = MAPEANDO NÚMEROS PARA STRINGS
const numbers = [1, -1, 2, 3, 0];

const filtered = numbers.filter(n => n >= 0);

const items = filtered.map(n => '<li>' + n + '</li>')

const html = '<ul>' + items.join('') + '</ul>';

console.log(html);

EXEMPLO 2
const numbers = [1, -1, 2, 3];

const items = numbers
    .filter(n => n >= 0)
    .map(n => ({value: n}))
    .filter(obj => obj.value > 1)
    .map(obj => obj.value);

console.log(items);

**REDUCING AN ARRAY**


EXEMPLO 1 = MAPEANDO NÚMEROS PARA STRINGS
const numbers = [1, -1, 2, 3, 0];

const filtered = numbers.filter(n => n >= 0);

const items = filtered.map(n => '<li>' + n + '</li>')

const html = '<ul>' + items.join('') + '</ul>';

console.log(html);

EXEMPLO 2
const numbers = [1, -1, 2, 3];

const items = numbers
    .filter(n => n >= 0)
    .map(n => ({value: n}))
    .filter(obj => obj.value > 1)
    .map(obj => obj.value);

console.log(items);