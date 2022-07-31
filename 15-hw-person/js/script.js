//id;firstName;lastName;age
const persons = [];
let inputData = prompt('Enter person data separate by ";"');
while (inputData) {
    let val = inputData.split(';');
    if (findBook(persons, val[0]) < 0) {
        let person = new Person(val[0], val[1], val[2], val[3]);
        persons.push(person);
    }
    else {
        alert(`id = ${val[0]} is exist in persons`)
    }
    inputData = prompt('Enter person data separate by ";"');
}
printPersons(persons);

function findBook(persons, id) {
    for (let i = 0; i < persons.length; i++) {
        if (persons[i].id === id) {
            return i;
        }
    }
    return -1;
}

function printPersons(persons) {
    persons.forEach(element => {
        console.log(element.toString());
    });
}

function Person(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = +age;
    this.toString = function () {
        return `ID: ${this.id}, FirstName: ${this.firstName}, 
        LastName: ${this.lastName}, Age: ${this.age}`
    }
}