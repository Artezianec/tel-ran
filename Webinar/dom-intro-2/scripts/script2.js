let i = 1;
let flag = true;
const adding = setInterval(() => {
  if (i > 10) flag = false;

  if (flag) {
    const item = document.createElement("li");
    const name = document.createTextNode(`item ${i}`);
    item.appendChild(name);
    list.appendChild(item);
    list.style.opacity = i * 0.1;
    i++;
  } else {
    list.style.opacity = i * 0.1;
    list.removeChild(list.lastChild);
    i--;
    if (i === 1) {
      clearInterval(adding);
    }
  }
}, 100);
