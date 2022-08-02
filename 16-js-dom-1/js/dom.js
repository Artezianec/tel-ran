// // console.log(document.body.innerHTML);
// document.body.innerHTML = '<h1>Hello World</h1>'
const div1 = document.querySelector('#div1');
// console.log(div1.title);
div1.style.border = '1px solid black';
// const rem = document.getElementsByTagName('p');
// console.log(rem.length);
const pdiv1 = document.querySelectorAll('#div1 > p');
for (let i = 0; i < pdiv1.length; i++) {
    pdiv1[i].innerHTML = `<span>new text ${i + 1}</span>`;
}
// const children = div1.childNodes;
const children = div1.children;
console.log(children.length);
for (let i = 0; i < children.length; i++) {
    children[i].style.color = 'red';
}
div1.firstElementChild.innerHTML = '<h1>Hello</h1>';
const newP1 = document.createElement('p');
const newText = document.createTextNode('New text for test');
newP1.appendChild(newText);
div1.appendChild(newP1);
// div1.insertBefore(newP1,div1.firstElementChild);
// div1.insertBefore(newP1,div1.lastElementChild);
// document.body.insertBefore(newP1, div1.nextElementSibling);
const newP2 = document.createElement('p');
const new2text = document.createTextNode('this is p2 text');
newP2.append(new2text);
div1.replaceChild(newP2,div1.firstElementChild);
// div1.removeChild(children[1]);
div1.removeChild(div1.firstElementChild.nextElementSibling);