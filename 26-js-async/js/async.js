console.log('One');
setTimeout(function(){
    console.log('Two');
}, 2000);

setTimeout(function(){
    console.log('Two 1\2');
    setTimeout(function () {
        console.log('0-o-o-o-ps');
    }, 1)
}, 1);

console.log('Three');