class User {
    constructor(nickName) {
        this.nickName = nickName;
    }

    infoFunc = function () {
        console.log(`NickName: ${this.nickName}`);
    }

    infoArrow = () => {
        console.log(`NickName: ${this.nickName}`);

    }
}
const john = new User('John');
console.log('==== func ====');
john.infoFunc();
console.log('==== arrow ====');
john.infoArrow();
console.log('==== Context Lost ====');
fn(john.infoArrow);

fn(john.infoFunc.bind({ nickName: 'peter' }))
const mary = {
    nickName: 'Mary'
}
function fn(callBack) {
    console.log(callBack);
    callBack();
}
john.infoFunc.apply(mary);
john.infoFunc.call({ nickName: 'Peter' })