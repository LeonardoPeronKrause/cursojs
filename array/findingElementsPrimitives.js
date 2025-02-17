const numbers = [1, 2, 3, 1, 4];

// A função indexOf verifica se o valor que eu passar dentro do '()' está no array ou não, se não estiver ele retorna -1, se estiver ele retorna o indice que se encontra esse valor dentro do array
console.log(numbers.indexOf(1))

// Se tiver dois elementos com o mesmo valor ele sempre vai mostrar o ultimo
console.log(numbers.lastIndexOf(1))

// Procura se existe o indice que eu passar dentro do parenteses, se nao tiver retorna false, se não tiver retorna true, AMBOS OS CODIGOS FAZEM A MESMA COISA POREM O SEGUNDO É MAIS USADO POIS É MAIS SIMPLES!
console.log(numbers.indexOf(1) !== -1)
console.log(numbers.includes(1))