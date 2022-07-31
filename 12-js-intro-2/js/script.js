let x = 5;
console.log(`x = ${x}` + ` typeOf = ${typeof (x)}`);
x = String(x);
console.log(`x = ${x}` + ` typeOf = ${typeof (x)}`);
x = '42';
console.log(`x = ${x}` + ` typeOf = ${typeof (x)}`);
x = +x;
console.log(`x = ${x}` + ` typeOf = ${typeof (x)}`);
let res = true / 2;
console.log(`res = ${res}` + ` typeOf = ${typeof (res)}`);
x = '3';
res = true + 2 + +x + 4;
console.log(`res = ${res}` + ` typeOf = ${typeof (res)}`);
res = 5 / 0;
console.log(`res = ${res}` + ` typeOf = ${typeof (res)}`);
if (!isFinite(res)) {
    console.log(';)');
}
x = '';
x = Boolean(x);
console.log(`x = ${x}` + ` typeOf = ${typeof (x)}`);
let str;
//let nickName = str || 'Anonymous';
let nickName = str ?? 'Anonymous';
console.log(`NickName: ${nickName}`);

greeting();

function greeting(name = 'Rabin') {
    //name = name ?? 'rabin';
    console.log(`Hello : ${name}`);
}