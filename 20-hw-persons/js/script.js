const btnAddPerson = document.getElementById('addperson').addEventListener('click', addPerson);
const calcstats = document.getElementById('calcstats').addEventListener('click', addStats);
const stats = document.getElementById('stats');
const persons = [];

function addPerson() {
    const person = new Person(id = personid.value, firsName = fname.value, lastName = lname.value, age = page.value);
    if (persons.findIndex(item => item.id === personid.value) >= 0) {
        alert(`error, ID = ${person.id} is exist`);
    }
    else {
        persons.push(person);
        const li = document.createElement('li');
        const text = document.createTextNode(person.toString());
        li.append(text);
        personslist.append(li);
    }
    clean();
}

function Person(id, firsName, lastName, age) {
    this.id = id;
    this.firsName = firsName;
    this.lastName = lastName;
    this.age = +age;
    this.toString = function () {
        return `id = ${this.id}, First Name = ${this.firsName}, Last Name = ${this.lastName}, Age = ${this.age}`
    }
}

// function checkId(array, id) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i].person.id === id) {
//             return i;
//         }
//         return -1;
//     }
// }

function clean() {
    personid.value = '';
    fname.value = '';
    lname.value = '';
    page.value = '';
}

function addStats() {
        const newdiv = document.createElement('div');
        let age = persons.reduce((accum, p) => accum + p.age, 0) / persons.length;
        let ages = document.createTextNode(`Average age = ${age}`);
        const h4ave = document.createElement('h4').appendChild(ages);
        age = persons.reduce((min, p) => p.age < min ? p.age : min, persons[0].age);
        ages = document.createTextNode(`Min age = ${age}`);
        const h4min = document.createElement('h4').appendChild(ages);
        age = persons.reduce((max, p) => p.age > max ? p.age : max, persons[0].age);
        ages = document.createTextNode(`Max age = ${age}`);
        const h4max = document.createElement('h4').appendChild(ages);
        newdiv.append(h4ave, h4min, h4max);
        if (stats.firstElementChild.nextElementSibling) {
            stats.replaceChild(newdiv, stats.firstElementChild.nextElementSibling);
        } else {
            stats.appendChild(newdiv);
        }
}

//click add person => add unique person to array persons and add person to
// ordered list id='personslist'

//click getstats => add after <h2>Stats</h2>: average age, min age, max age.
