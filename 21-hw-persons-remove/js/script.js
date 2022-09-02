const persons = [];

addPerson.onclick = function () {
    const person = new Person(personId.value.trim(), firstName.value.trim(), lastName.value.trim(), age.value);
    if (persons.findIndex(item => item.id === person.id) >= 0) {
        alert(`Person with id = ${person.id} exists`);
    } else {
        clearStats();
        persons.push(person);
        const li = createInfoElement(person.toString(), 'li');
        const buttonDel = createButtonDelete(function () {
            const index = persons.findIndex(item => item.id === person.id);
            persons.splice(index, 1);
            clearStats();
        });
        //      buttonDel.addEventListener('click', clearStats);
        buttonDel.classList.add('del');
        li.append(buttonDel);
        personsList.append(li);
    }
    personId.value = firstName.value = lastName.value = age.value = '';
};

calcStats.onclick = function () {
    const divStats = document.createElement('div');
    let age = persons.reduce((accum, p) => accum + p.age, 0) / persons.length;
    const h3avg = createInfoElement(`Average age: ${age.toFixed(1)}`, 'h3');
    age = persons.reduce((min, p) => p.age < min ? p.age : min, persons[0].age);
    const h3min = createInfoElement(`Min age: ${age}`, 'h3');
    age = persons.reduce((max, p) => p.age > max ? p.age : max, persons[0].age);
    const h3max = createInfoElement(`Max age: ${age}`, 'h3');
    divStats.append(h3avg, h3min, h3max);
    if (stats.firstElementChild.nextElementSibling) {
        stats.replaceChild(divStats, stats.firstElementChild.nextElementSibling);
    } else {
        stats.appendChild(divStats);
    }
};

function clearStats() {
    if (stats.firstElementChild.nextElementSibling) {
        stats.removeChild(stats.firstElementChild.nextElementSibling);
    }
}

function Person(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = +age;
    this.toString = function () {
        return `ID: ${this.id}, ${this.firstName}, ${this.lastName}, age: ${this.age}`;
    }
}