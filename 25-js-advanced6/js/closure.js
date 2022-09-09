let nickName = 'John';
function greeting() {
    let nickName = 'Peter';
    return function () {
        let nickName = 'Tigran';
        console.log(`Hello ${nickName}`);
    }
}

const hello = greeting();
hello();