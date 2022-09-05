class Company {
    constructor() {
        this._employees = [];
    }

    addEmployee(employee) {
        const index = this._employees.findIndex(empl => empl.id === employee.id);
        if (index < 0) {
            this._employees.push(employee);
        }
        return index < 0;
    }

    get employees() {
        return [...this._employees];
    }

    removeEmployee(id) {
        const index = this._employees.findIndex(empl => empl.id === id);
        if (index >= 0) {
            this._employees.splice(index, 1);
        }
        return index >= 0;
    }

    get totalSalary() {
        return this._employees.reduce((salary, p) => salary + p.salary, 0);
    }

    get ages() {
        return this._employees.reduce((ages, p) => ages + p.age, 0) / this._employees.length;
    }

    get minage() {
        return this._employees.reduce((minages, p) => p.age < minages ? p.age : minages, this._employees[0].age)
    }
    get maxage() {
        return this._employees.reduce((maxages, p) => p.age > maxages ? p.age : maxages, this._employees[0].age);
    }

    get avesalary() {
        return this.totalSalary / this.employees.length;
    }

}