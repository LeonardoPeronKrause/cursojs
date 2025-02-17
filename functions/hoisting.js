// Basicamente o JS bota as funcoes para cima automaticamente quando vai rodar algo, e isso é achado de 'hoisting', como no exemplo!

function walk() {
    console.log('walk')
}

// Function Declaration
walk();

// Function Expression
run();

const run = function() {
    console.log('run')
};