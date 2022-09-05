class Employee extends Person {
    constructor(id, firstName, lastName, date, salary) {
        super(id, firstName, lastName, date);
        this._salary = +salary;
    }

    get salary() {
        return this._salary;
    }

    set salary(salary) {
        if (salary > this._salary) {
            this._salary = +salary;
        }
    }

    toString() {
        return super.toString() + `, salary: ${this._salary}`;
    }

}