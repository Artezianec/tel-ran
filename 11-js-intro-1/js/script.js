/* console.log("Hello world");
let x;
console.log(x);
x = 10;
console.log(x);
x = "bye";
console.log(x);
let pi = 3.14;
console.log("pi" + pi);
//pi = 10;
let y = x;
console.log("y");
const exp = 2.718281828;
let z = 'exp = ' + exp;
console.log(z);
y = null;
console.log(y);
y = 7%3;
console.log(y);
*/
let res = 'five' - 2 + true;
console.log(res);
res = 5 + "2";
console.log(res);
console.log(typeof res);
res = 3;
console.log(res);
res = false;
console.log(typeof res);
res = undefined;
console.log(typeof res);
res = null;
console.log(typeof res);
if (3 === "3") {
    console.log('true');
}
else {
    console.log('false');
}
let age = 15;
let vol = age >= 18 ? 42 : 1.5;
console.log(); ('vol. = ' + vol);
res = 5;
switch (res) {
    case 5:
        console.log('number' + (res));
        break;
    case '5':
        console.log('strung' + (res));
        break;
    default:
        console.log('not a five');
        break;
}
for (let index = 0; index <= 5; index++) {
    console.log("index = " + index);
}