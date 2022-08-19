const arr = ['one', 'two', 'Three', 'eight', 'thREe', 'thrEE', 'six'];
let res = arr.indexOf('three');
console.log(res);
console.log('===========');
res = arr.lastIndexOf('three');
console.log(res);
console.log('===========');
res = findAll(arr, 'three');
console.log(res);
console.log('===========');
res = arr.includes('three');
console.log(res);
console.log('===========');
res = arr.findIndex((item, index) => item.toLowerCase() === 'three' && index > 2);
console.log(res);
console.log('===========');
const persons = [
    {
        name: 'Peter',
        age: 23
    },
    {
        name: 'John',
        age: 28
    },
    {
        name: 'Tigran',
        age: 26
    },
    {
        name: `Mary`,
        age: 18
    },
    {
        name: 'Rabindronat',
        age: 30
    }
]
res = persons.findIndex((p, i) => p.age > 25);
console.log(res);
console.log(persons[res]);
console.log('===========');
persons.forEach((p, i) => console.log(`${i + 1} : ${p.name}, age = ${p.age}`));
console.log('===========');
res = persons.filter((p, i) => p.age > 25);
console.log(res);
console.log('===========');
res = persons.map((p, i) => `${i + 1} : ${p.name}, age = ${p.age}`);
console.log(res);
console.log('===========');
res = persons.map(p => {
    const li = document.createElement('li');
    li.append(document.createTextNode(`${p.name}, age = ${p.age}`));
    return li;
});
console.log(res);
console.log('===========');
res.forEach(item => items.append(item));

const numbers = [5,9,11,2,7,13,2];
res = numbers.reduce((accum,item) => accum + item, 0);
console.log(res);
console.log('============');
res = persons.reduce((accum,p) => accum + p.age, 0) / persons.length;
console.log(res);




function findAll(arr, value) {
    const res = [];
    let index = arr.indexOf(value);
    while (index !== -1) {
        res.push(index);
        index = arr.indexOf(value, index + 1);
    }
    return res;
}