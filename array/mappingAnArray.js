//EXEMPLO 1 = MAPEANDO NÚMEROS PARA STRINGS
/*const numbers = [1, -1, 2, 3, 0];

const filtered = numbers.filter(n => n >= 0);

const items = filtered.map(n => '<li>' + n + '</li>')

const html = '<ul>' + items.join('') + '</ul>';

console.log(html);

//EXEMPLO 2
const numbers = [1, -1, 2, 3];

const items = numbers
    .filter(n => n >= 0)
    .map(n => ({value: n}))
    .filter(obj => obj.value > 1)
    .map(obj => obj.value);

console.log(items);*/