const showName = function () {
    console.log(this);
    return `${this.firstName} ${this.lastName}`;
}

const circleLength = radius => {
    const pi = 3.1415926;
    const length = 2 * pi * radius;
    return length;
}

const john = {
    firstName: 'John',
    lastName: 'smith'
}
const peter = {
    firstName: 'Peter',
    lastName: 'Jackson'
}
john.fullName = showName;
peter.fullName = showName;
console.log(john.fullName());
console.log(peter.fullName());
console.log(showName());