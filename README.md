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

****