console.log('========== Array Spread ==========');
const array1 = [2, 3, 5];
const array2 = [7, 11];
console.log(array1);
// const arrayClone = [...array1];
// const arrayClone = [];
// array1.forEach(element => arrayClone.push(element));
// console.log(arrayClone);
const arrayClone = [...array1];
console.log(arrayClone);
// const array3 = array1.concat(array2);
const array3 = [...array1, -1, ...array2, -2];
console.log(array3);
let res = Math.min(...array3);
console.log(res);
console.log('========== Object Spread ==========');
const person = {
    firstName: 'John',
    lastName: 'Smith',
    age: 34,
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    }
}
let personClone = JSON.parse(JSON.stringify(person));
console.log(personClone);
personClone = { ...person };
console.log(personClone);
personClone = Object.assign({}, person);
console.log(personClone);

const job = {
    company: 'Motorolla',
    position: 'developer'
}
personClone = { ...job, ...person };
console.log(personClone);
const legacyClone = Object.assign({}, person, job, { hobby: 'vodka', age: 45 });
console.log(legacyClone);
let firstName = 'Peter';
let lastName = 'Jackson';
const peter = {
    firstName, lastName
}
console.log(peter);