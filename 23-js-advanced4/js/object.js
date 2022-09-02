const persons = [];
persons[0] = new Person(firstName = 'John', lastName = 'Smith', age = 36);

function Person(firstname, lastname, age) {
    this.firstName = firstname;
    this.lastName = lastname;
    this.age = +age;
}

const testPerson = {
    firstName: 'Artik',
    lastName: 'lesley',
    age: 36
}
let arr = Object.keys(testPerson);
console.log(arr);
arr.forEach(element => {
    console.log(element);
});
console.log('=============');
arr = Object.values(testPerson);
console.log(arr);
arr.forEach(element => {
    console.log(element);
});
console.log(arr);
console.log('=============');
arr = Object.entries(testPerson);
console.log(arr);
arr.forEach(element => {
    console.log(element);
});
console.log('============');