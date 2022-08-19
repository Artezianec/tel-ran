const images = [
    './images/Rouen_Cathedral_1.jpg',
    './images/Rouen_Cathedral_2.jpg',
    './images/Rouen_Cathedral_3.jpg',
    './images/Rouen_Cathedral_4.jpg',
    './images/Rouen_Cathedral_5.jpg',
    './images/Rouen_Cathedral_6.jpg'
]
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const picture = document.getElementById('picture');
let i = 0;
prev.onclick = function Prev() {
    i--
    if (i < 0) {
        i = images.length - 1;
    }
    picture.src = images[i];
}
next.onclick = function Next() {
    i++
    if (i >= images.length) {
        i = 0;
    }
    picture.src = images[i];
}