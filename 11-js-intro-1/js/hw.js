let res = sumDigits(5329);
console.log(`res = ${res}`);
res = luckyNumber(123871); // 1 + 3 + 7 === 2 + 8 + 1
//console.log(res);
console.log(res ? 'lucky' : 'unlucky');
res = luckyNumber1(123871); // 1 + 3 + 7 === 2 + 8 + 1
//console.log(res);
console.log(res ? 'lucky' : 'unlucky');
res = luckyNumber2(123871); // 1 + 3 + 7 === 2 + 8 + 1
//console.log(res);
console.log(res ? 'lucky' : 'unlucky');

function sumDigits(num) {
    // let arr = num.toString().split('');
    // let sum = arr.reduce((a, b) => Number(a) + Number(b));
    // return sum;
    let sum = 0;
    while (num) {
        sum += num % 10;
        num = (num - num % 10) / 10;
    }
    return sum;
}

function luckyNumber(num) {
    // let res = 0;
    // while (num) {
    //     res = num % 10 - res;
    //     num = (num - num % 10) / 10;
    // }
    // return !res; 
    ///////////
    // let arr = num.toString();
    // let val1 = '', val2 = '';
    // for (i = 0; i < arr.length; i++) {
    //     if (i % 2 == 0) {
    //         val1 += arr[i];
    //     }
    //     else {
    //         val2 += arr[i];
    //     }
    // }
    // val1 = sumDigits(val1)
    // val2 = sumDigits(val2)
    // return val1 === val2
    /////////////
    let sum1 = 0, sum2 = 0, pos = 1;
    while (num) {
        if (pos % 2 === 0) {
            sum1 += num % 10;
        }
        else {
            sum2 += num % 10;
        }
        num = (num - num % 10) / 10;
        pos++;
    }
    return sum1 === sum2;
}

function luckyNumber1(params) {
    let sum1 = 0, sum2 = 0;
    while (params) {
        sum1 += params % 10;
        params = (params - params % 10) / 10;
        sum2 += params % 10
        params = (params - params % 10) / 10;
    }
    return sum1 === sum2
}

function luckyNumber2(params) {
    let sum = 0;
    while (params) {
        sum = params % 10 - sum;
        params = (params - params % 10) / 10;
    }
    return !sum;
}
// console.log(oper(6));
// function oper(params) {
//     return 5 == params? !params : params;
// }