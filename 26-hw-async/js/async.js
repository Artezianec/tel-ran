//Problem -> console 10 times 10
// for(var i = 0; i < 10; i++){
//     setTimeout(function(){
//         console.log(i);
//     }, 1000)
// }

for(var i = 0; i < 10; i++){
    setTimeout(function (param) {
        console.log(param);
    },1000,i);
}
