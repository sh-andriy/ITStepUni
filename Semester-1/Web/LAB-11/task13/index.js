// Всім елементам з CSS класом `random-color` задати функцію,
// яка буде викликатися при кліку на елемент та випадковим чином міняти колір.
// Використати функцію з Task 11

let elems = document.querySelectorAll('.random-color');

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

for (const elem of elems){
    elem.addEventListener('click', () => {
    elem.style.backgroundColor = 'rgb(' + randomIntFromInterval(0 , 255) + ',' + randomIntFromInterval(0 , 255) + ',' + randomIntFromInterval(0 , 255) + ')';
    });
}
