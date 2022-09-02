class Person {
    constructor(id, firstName, lastName, bDate) {
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
        this._bdate = new Date(bDate);
    }
    get id() {
        return this._id;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(lastName) {
        this._lastName = lastName;
    }
    get bDate() {
        return this._bdate;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(firstName) {
        this._firstName = firstName;
    }
    get age() {
        const ageDiffMs = (new Date()) - this.birthDate;
        const ageDate = new Date(ageDiffMs);
        return (ageDate.getUTCFullYear() - 1970);
    }
    fullName() {
        return `First Name: ${this._firstName} Last Name: ${this._lastName}`
    }
}

class Employee extends Person {
    constructor(id, firstName, lastName, bDate, salary) {
        super(id, firstName, lastName, bDate);
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
}

class Company {
    constructor() {
        this._employees = [];
    }

    get employees() {
        return this._employees;
    }
    addEmployee(employee) {
        if (this._employees.findIndex(e => e.id === employee.id) < 0) {
            this._employees.push(employee);
        }
    }
    removeEmployee(id) {
        const index = this._employees.findIndex(e => e.id === id);
        if (index >= 0) {
            this._employees.splice(index, 1)
        }
        return index >= 0;
    }
}

const john = new Person(1000, 'John', 'Smith', '2011-05-08');
console.log(john);
console.log(john._bdate.getFullYear());
john.lastName = 'Jackson';
console.log(john.lastName);
console.log(john.age);
console.log(john.fullName());

const peter = new Employee(2000, 'Peter', 'Koper', '2010-08-08', 7000);
console.log(peter);
peter.salary = 9000;
console.log(peter.salary);
const firm1 = new Company();
firm1.addEmployee(peter);
firm1.addEmployee(new Employee(3000,'Mary','Smith','2003-07-11',20000));
console.log('--------------------------');
firm1.employees.forEach(element => {
    console.log(element);
});