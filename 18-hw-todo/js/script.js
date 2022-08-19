const additem = document.getElementById('additem');
const todolist = document.getElementById('todolist');
additem.onclick = addItemToList;
// additem.onkeyup = function (e) {
//     if (e.key === 'Enter') {
//         addItemToList;
//     }
// }
function addItemToList() {
    if (item.value) {
        const li = document.createElement('li');
        const text = document.createTextNode(item.value);
        li.append(text);
        todolist.append(li);
        item.value = '';
    }
    else {
        alert('Empty!');
    }
}