const arr = [1, 2, 3, 'four', 'five'];
console.log(typeof arr);
console.log(arr.length);
console.log(arr);
arr[arr.length] = 6;
console.log(arr);
console.log('===push===');
arr.push(6, 7, 8);
console.log(arr);
console.log('===pop===');
let res = arr.pop();
console.log(arr);
console.log(res);
console.log('===shift===');
res = arr.shift();
console.log(arr);
console.log(res);
console.log('===unshift===');
res = arr.unshift(0, 1);
console.log(arr);
console.log(res);
const arr1 = ['one', 'two', 'three'];
const arr2 = ['four', 'five'];
console.log('=====concat=====');
const arr3 = arr1.concat(arr2);
console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log('=====slice=====');
res = arr.slice(2, 6);
console.log(arr);
console.log(res);
console.log('=====sPlice====');
// res = arr.splice(2,2);
// res = arr.splice(1,2,10)
// res = arr.splice(arr.length/2, 0, -42) //unshift
// res = arr.splice(0,1); //shift
// res = arr.splice(arr.length -1,1); // //pop
// res = arr.splice(arr.length,0,100500); //push
console.log(arr);
console.log(res);