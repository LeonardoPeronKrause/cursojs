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