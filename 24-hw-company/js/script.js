const btnAddPerson = document.getElementById('addPerson').addEventListener('click', addPerson);
const calcstats = document.getElementById('calcStats').addEventListener('click', addStats);
const stats = document.getElementById('stats');
const company = new Company();

function addPerson() {
    const employee = new Employee(personid.value.trim(), fname.value.trim(), lname.value.trim(), age.value, salary.value.trim());
    if (company.addEmployee(employee) && personid.value.trim() && fname.value.trim() && lname.value.trim() && age.value && salary.value) {
        clean();
        const li = document.createElement('li');
        li.append(employee.toString());
        const buttonDel = document.createElement('button');
        buttonDel.appendChild(document.createTextNode('X'));
        buttonDel.classList.add('del');
        buttonDel.onclick = function (e) {
            e.target.parentElement.remove();
            company.removeEmployee(employee.id);
            clean()
        }
        li.append(buttonDel);
        personsList.append(li);
    } else {
        alert(`Employee = ${employee.id} is exists`);
    }
    clean()
};

function clean() {
    personid.value = '';
    fname.value = '';
    lname.value = '';
    age.value = '';
    salary.value = '';
    if (stats.firstElementChild.nextElementSibling) {
        stats.removeChild(stats.firstElementChild.nextElementSibling);
    }
}

function addStats() {
    const newdiv = document.createElement('div');
    newdiv.append(`Average age: ` + company.ages , ` Total Salary: ` + company.totalSalary, ` Min age: ` + company.minage, ` Max age: ` + company.maxage, ` Average salary: ` + company.avesalary);
    if (stats.firstElementChild.nextElementSibling) {
        stats.replaceChild(newdiv, stats.firstElementChild.nextElementSibling);
    } else {
        stats.appendChild(newdiv);
    }
}