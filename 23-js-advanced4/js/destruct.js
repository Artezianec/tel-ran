console.log('====== destruct array ======');
const array = [2, 3, 5, 7, 11];
let [a, b, ...c] = array;
console.log(a, b);
console.log(c);
console.log('============================');

fn(array);
fn(c);

console.log('========== Trick ===========');
let x = 20;
let y = 10;
let z = 30;
console.log(x, y, z);
// let t = x;
// x = y;
// y = t;
[x, y, z] = [z, y, x];
console.log(x, y, z);

console.log('====== destruct object ======');
const person = {
    firstName: 'John',
    lastName: 'Smith',
    age: 34,
    fullName: function () {
        return `${this.firstName}, ${this.lastName}`;
    },
    'my hobby': 'chess'
}

// let firstName = person.firstName;
// let lastName = person.lastName;
// let age = person.age;
let { firstName: fname, lastName, 'my hobby': hobby, ...rest } = person;
console.log(fname);
console.log(lastName);
console.log(hobby);
console.log(rest);
// console.log(age);

personInfo(person);

console.log(person['my hobby']);
function personInfo({lastName,age}) {
    console.log(`${lastName}, age: ${age}`);
}


function fn([a, b]) {
    console.log(a + b);
}