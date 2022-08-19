function createButtonDelete() {
    const btndel = document.createElement('button');
    btndel.append(document.createTextNode('X'));
    btndel.classList.add('del');
    btndel.onclick = function (e) {
        e.target.parentElement.remove();
    }
    return btndel;
}