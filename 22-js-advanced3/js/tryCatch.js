let person = {
    name: 'Peter'
};
person = null;
printName(person);

console.log('=========');
try {
    let res = solution(0, 0);
    console.log(res);
} catch (e) {
    console.log(e.name);
    console.log(e.message);
}

function solution(a, b) {
    if (a !== 0) {
        return b / a;
    } else {
        if (b === 0) {
            throw new Error('Message!!!');
        }
    }
    throw new Error('No solution');
}
console.log(res);

function printName(obj) {
    try {
        console.log(obj.name);
        return;
    } catch (error) {
        console.log(error.name);
        console.log(error.message);
        console.log('Error');
    } finally {
        console.log('finally in printName');
    }
};