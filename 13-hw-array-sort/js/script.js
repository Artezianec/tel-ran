const arr = [9, 2, 4, 1, 5, 2, 9, 1, 2, 0];
printArray(arr);
bubbleSort(arr);
console.log('///////////');
printArray(arr); // 0,1,1,2,2,2,4,5,9,9
const persons = [new Person('Mary', 'Smith', 18), new Person('John', 'Smith', 34),
new Person('Peter', 'Jackson', 31), new Person('Tigran', 'Petrosian', 28)];
printArray(persons);
console.log('/////');
bubbleSortPersonsByAge(persons);
printArray(persons);
console.log('nnnnnn');
sort(persons, (p1, p2) => {
    if (p1.lastName > p2.lastName) {
        return 1;
    }
    if (p1.lastName < p2.lastName) {
        return -1;
    }
    return 0;
}
);
printArray(persons);


function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

function bubbleSort(arr) {
    let flag = 1;
    do {
        flag = 0;
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                flag = 1;
            }
        }
    } while (flag);
    return arr;
}

function bubbleSortPersonsByAge(arr) {
    let flag = 1;
    do {
        flag = 0;
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j].age > arr[j + 1].age) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                flag = 1;
            }
        }
    } while (flag);
    return arr;
}

function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = +age;
    this.fullName = function () {
        return `${this.firstName} ${this.lastName}`;
    }
}

function sort(arr, comparator) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (comparator(arr[j], arr[j + 1]) > 0) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}