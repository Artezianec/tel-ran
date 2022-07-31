const primes = [2, 3, 5, 7, 11, 13, 17, 19];
printArray(primes);
reverseArray(primes);
printArray(primes); //19,17,13,11,7,5,3,2
let index = search(primes, 13);
console.log(index); //2
index = search(primes, 1);
console.log(index); //-1

function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

function reverseArray(arr) {
    for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
        let value = arr[i];
        arr[i] = arr[j];
        arr[j] = value;
    }
}

function search(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == value) {
            return i;
        }
    }
    return -1;
}