const persons = [];
const dateNow = new Date();

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
        buttonDel.classList.add('del');
        li.append(buttonDel);
        personsList.append(li);
    }
    personId.value = firstName.value = lastName.value = age.value = '';
};

calcStats.onclick = function () {
    const divStats = document.createElement('div');
    try {
        let age = persons.reduce((accum, p) => accum + p.age, 0) / persons.length;
        const h3avg = createInfoElement(`Average age: ${age}`, 'h3');
        age = persons.reduce((min, p) => p.age < min ? p.age: min, persons[0].age);
        const h3min = createInfoElement(`Min age: ${age}`, 'h3');
        age = persons.reduce((max, p) => p.age > max ? p.age : max, persons[0].age);
        const h3max = createInfoElement(`Max age: ${age}`, 'h3');
        divStats.append(h3avg, h3min, h3max);
    } catch (e) {
        const h3error = createInfoElement(`No data for processing`, 'h3');
        divStats.append(h3error);
    }
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
    const bday = new Date(age);
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = dateNow.getMonth() < bday.getMonth() ? dateNow.getFullYear() - bday.getFullYear() : dateNow.getFullYear() - bday.getFullYear() + 1 ;
    this.toString = function () {
        return `ID: ${this.id}, First Name: ${this.firstName}, Last Name: ${this.lastName}, Age: ${this.age}`;
    }
}
