let t = setInterval(move, 3);
const height = container.offsetHeight - box.offsetWidth;
const width = container.offsetWidth - box.offsetWidth;
let size = (height < width) ? height : width;
let pos = 0;
let flag = 1;
function move() {
    box.style.left = pos + 'px';
    box.style.top = pos + 'px';
    pos += flag;
    if (pos === size) {
        flag = -1;
    }
    if (pos === 0) {
        flag = 1;
    }

}