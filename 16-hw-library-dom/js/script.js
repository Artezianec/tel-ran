const library = [];
const root = document.getElementById('root');
let inputData = prompt('Enter book data separate by ";"');
while (inputData) {
    const values = inputData.split(';');
    const book = new Book(values[0], values[1], values[2], values[3]);
    if (findBook(library, book.isbn) < 0) {
        library.push(book);
    }
    else {
        alert(`Book = ${book.isbn} is exist`);
    }
    inputData = prompt('Enter book data separate by ";"');
}
printLibrary(library);

function findBook(library, isbn) {
    for (let i = 0; i < library.length; i++) {
        if (library[i].isbn === isbn) {
            return i;
        }
    }
    return -1;
}

function printLibrary(library) {
    const newOl = document.createElement('ol');
    root.append(newOl);
    for (let i = 0; i < library.length; i++) {
        newOl.innerHTML += (`<li>${library[i].toString()}</li>`);
    }
}

// function printLibrary(library) {
//     const newOl = document.createElement('ol');
//     root.append(newOl);
//     for (let i = 0; i < library.length; i++) {
//         const newLi = document.createElement('li');
//         newLi.append(document.createTextNode(library[i].toString()));
//         newOl.append(newLi);
//     }
// }
function Book(isbn, title, author, year) {
    this.isbn = isbn;
    this.title = title;
    this.author = author;
    this.year = +year;
    this.toString = function () {
        return `ISBN: ${this.isbn}, Title: ${this.title}, 
        Author: ${this.author}, Year of publishing: ${this.year}`
    }
}