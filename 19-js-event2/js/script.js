const todolist = document.getElementById('todolist');
// const clear = document.createElement('button');
// clear.append(document.createTextNode('Clear'));
// document.body.insertBefore(clear,todolist);
additem.addEventListener('click', add);
item.onkeyup = function (e) {
    if (e.key === 'Enter') {
        add();
    }
}
function add() {
    const text = item.value.trim();
    if (text) {
        const li = document.createElement('li');
        const content = document.createTextNode(text);
        const btndel = createButtonDelete();
        li.append(content, btndel);
        todolist.appendChild(li);
    }
    else {
        alert('empty!');
    }
    item.value = '';
}
btnclear.addEventListener('click', function () {
    while (todolist.firstElementChild) {
        todolist.firstElementChild.remove();
    }
    // console.log(todolist.children.length);
    // for (let i = 0; i < todolist.children.length; i++) {
    //     todolist.children[i].remove();
    // }
})