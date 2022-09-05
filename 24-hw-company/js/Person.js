class Person {
    constructor(id, firstName, lastName, date) {
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
        this._birthDate = new Date(date);
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(firstName) {
        this._firstName = firstName;
    }

    get id() {
        return this._id;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        this._lastName = value;
    }

    get birthDate() {
        return this._birthDate;
    }

    get age() {
        const ageDiffMs = (new Date()) - this._birthDate;
        const ageDate = new Date(ageDiffMs);
        return (ageDate.getUTCFullYear() - 1970);
    }

    fullName = function () {
        return `${this._firstName} ${this._lastName}`;
    }

    toString() {
        return `id = ${this._id}, First Name = ${this._firstName}, Last Name = ${this._lastName}, Age = ${this.age}`
    }
}
