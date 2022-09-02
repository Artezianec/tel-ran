const persons = [];
persons[0] = new Person(firstName = 'John2', lastName = 'Smith2', age = 36);
persons[1] = new Person(firstName = 'John3', lastName = 'Smith3', age = 36);
persons[2] = new Person(firstName = 'John4', lastName = 'Smith4', age = 36);
persons[3] = new Person(firstName = 'John5', lastName = 'Smith5', age = 36);
print(persons);
function Person(firstname, lastname, age) {
    this.firstName = firstname;
    this.lastName = lastname;
    this.age = +age;
}

function print(array) {
    array.forEach(element => {
        console.log(element);
    });
}
const personJSON = JSON.stringify(persons[0]);
console.log(personJSON);
const personObj = JSON.parse(personJSON);
console.log(personObj);
console.log(typeof (personObj));

