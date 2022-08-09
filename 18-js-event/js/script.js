console.log(button.fan);
button.addEventListener('click', show);
button.addEventListener('click', event => console.log(event.timeStamp));
// button.onclick = event => console.log(event.timeStamp);
const names = [name1, name2, name3];
names.forEach(element => {
    element.onkeyup = valueToUpperCase;
});
function show() {
    names.forEach(element => {
        const p = document.createElement('p');
        const text = document.createTextNode(element.value);
        p.append(text);
        document.body.append(p);
        element.value = '';
    });
}
function valueToUpperCase(e) {
    e.target.value = e.target.value.toUpperCase();
}

// for (let i = 0; i < names.length; i++) {
//     names[i].onkeyup = valueToUpperCase;
// }
// name1.onkeyup = valueToUpperCase;
// name2.onkeyup = valueToUpperCase;
// function show(event) {
//     // console.log(event.target);
//     alert(` hello ${name1.value}`);
//     name1.value = '';
// }