const numbers = arrayFromRange(1, 4);

console.log(numbers);

function arrayFromRange(min, max) {
    output = []; // Declarar um array vazio
    for (let i = min; i <= max; i++) {
        output.push(i); // Adicionar os números ao array
    }
    return output; // Retorna o array apos preencher todos os números
}