// function createButtonDelete() {
//     const btndel = document.createElement('button');
//     btndel.append(document.createTextNode('X'));
//     btndel.classList.add('del');
//     btndel.onclick = function (e) {
//         e.target.parentElement.remove();
//         const element = persons.findIndex(item => item.id === e.target);
//         persons.splice(element, 1);
//         console.log(e.target);
//         console.log(persons);
//     }
//     return btndel;
// }