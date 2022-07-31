const person = {
    firstName: 'John',
    lastName: "Smith",
    age: 27,
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    }
}

console.log(typeof person);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
person.age = 36;
console.log(person.age);
console.log(person);
console.log(person.fullName());
console.log(person.hobby);
person.hobby = 'chess';
console.log(person.hobby);

const peter = {
    firstName: 'Peter',
    lastName: 'Jackson',
    age: 34
}
console.log(peter);
peter.fullName = function () {
    return `${this.firstName} ${this.lastName}`;
}
console.log(peter.fullName());
const mary = new Person('Mary', 'Smith', 18);
console.log(mary);
console.log(mary.fullName());

function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = +age;
    this.fullName = function () {
        return `${this.firstName} ${this.lastName}`;
    }
}

// let range = {
//     from: 1,
//     to: 10,
  
//     // for..of range вызывает этот метод один раз в самом начале
//     [Symbol.iterator]() {
//       // ...он возвращает перебираемый объект:
//       // далее for..of работает только с этим объектом, запрашивая следующие значения
//       return {
//         current: this.from,
//         last: this.to,
  
//         // next() вызывается при каждой итерации цикла for..of
//         next() {
//           // нужно вернуть значение как объект {done:.., value :...}
//           if (this.current <= this.last) {
//             return { done: false, value: this.current++ };
//           } else {
//             return { done: true };
//           }
//         }
//       };
//     }
//   };
  
//   // при переборе объекта range будут выведены числа от range.from до range.to
//   alert([...range]); // 1,2,3,4,5

let range = {
    from: 1,
    to: 5,
  
    *[Symbol.iterator]() { // краткая запись для [Symbol.iterator]: function*()
      for(let value = this.from; value <= this.to; value++) {
        yield value;
      }
    }
  };
  
  alert( [...range] ); // 1,2,3,4,5