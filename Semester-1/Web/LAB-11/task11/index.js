// Стоврити код, який буде всім елементам з CSS класом `random-font`
// додавати функцію кліку, яка буде змінювати властивість `font-family` на випадковий шрифт.
// Послідовність шрифтів має бути попередньо заданою.


const fontFamilies = [
    'Arial', 'Times New Roman',
    'Verdana', 'Brush Script MT',
    'Tahoma', 'Garamond',
];

let elems = document.querySelectorAll('.random-font');

for (const elem of elems){
    elem.addEventListener('click', () => {
    font = fontFamilies[Math.floor(Math.random() * fontFamilies.length)];
    elem.style.fontFamily = font;
    });
}