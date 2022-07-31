const arr = [1, 2, 3, 'four', 'five', true];
console.log(typeof (arr));
console.log(arr[0] + arr[3]);
console.log(arr.length);
arr[3] = 4;
console.log(arr[3]);
console.log('=====end=====');
arr[10] = 100500;
printArray(arr);

function printArray(arr) {
    for (let index = 0; index < arr.length; index++) {
        console.log(arr[index])
    }
    console.log('=====end=====');
}