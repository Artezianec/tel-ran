const human = {
    hobby: 'chess',
    fullName: function () {
        return `${this.firstName}, ${this.lastName}`;
    }
}

const john = {
    firstName: 'John',
    lastName: 'Smoth'
}

console.log(john.hobby);

john.__proto__ = human;

console.log(john.hobby);
console.log(john);
console.log(john.fullName());
john.hobby = 'cannabis';
console.log(john.hobby);
Person.prototype = human;
const peter = new Person('Peter', 'Jackson');
const mary = new Person('mary', 'Smith');
peter.__proto__ = human;
mary.__proto__ = human;
peter.__proto__ = human;

console.log(peter.fullName());
console.log(mary.fullName());
Array.prototype.printArray = function () {
    for (let i = 0; i < this.length; i++) {
        console.log(this[i]);
    }
    console.log('=========');
}
const numbers = [2, 3, 5, 7, 11, 13]; //const numbers = new Array(.....);
console.log(numbers);
numbers.printArray();
const arr = ['one', 'two', 'three'];
arr.printArray();
console.log('======= Array for in =======');
for (const i in arr) {
    if (Object.hasOwnProperty.call(arr, i)) {
        const element = arr[i];
        console.log(element);
    }
}
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(element);
// }


function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}