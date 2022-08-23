const sum = (a, b, ...rest) => {
    // console.log(arguments);
    let res = 0;
    for (let i = 0; i < rest.length; i++) {
        const element = rest[i];
        res += element;
    }
    return res;
}
const res = sum(3, 5, 7, 9, 1, 2, 3, 4, 5, 6, 7, 8, 8, 5, 3, 5, 6, 7, 5, 5, 4)
console.log(res);

