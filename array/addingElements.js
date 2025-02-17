const numbers = [3, 4];

// Add no final
numbers.push(5, 6);

// Add no início
numbers.unshift(1, 2)

// Add no medio, porem eu tenho que falar qual o lugar do indice ele vai adicionar e qual elemento excluir porem no caso nao exlui nenhum e apos eu boto oq eu quero add no array
numbers.splice(2, 0, 'a', 'b');

console.log(numbers);