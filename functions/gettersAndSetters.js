/*
O que são Getters e Setters?
Getter (get) → Permite acessar um valor como se fosse uma propriedade.
Setter (set) → Permite modificar um valor como se fosse uma propriedade, mas com lógica personalizada.
*/

const person = {
    firstName: 'Leonardo',
    lastName: 'P Krause',
    get fullName() {
        return `${person.firstName} ${person.lastName}`
    }, 
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

person.fullName = 'Elisa Rosa';

console.log(person);