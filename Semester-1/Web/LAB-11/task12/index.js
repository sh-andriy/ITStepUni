// Створити функцію getRandomColor, яка в якості аргумента приймає спосіб задання кольору:
// hex, rgb. Якщо у функцію передадуть тип, який не підтримується, функція повертає -1.
// Для rgb кольору є обмеження, що кожне число має бути в діапазоні від 0 до 255.
// Для hex кольору необхідно сформувати послідовність з літер(ABCDEF) і чисел довжиною в 6 символів.
// Для генерації випадкової літери використати принцип з Task 10 для отримання рандомного шрифта.

const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

let getRandomColor = (a) => {
    if(a == 'hex'){
        return "#"
        + hex[Math.floor(Math.random() * hex.length)]
        + hex[Math.floor(Math.random() * hex.length)]
        + hex[Math.floor(Math.random() * hex.length)]
        + hex[Math.floor(Math.random() * hex.length)]
        + hex[Math.floor(Math.random() * hex.length)]
        + hex[Math.floor(Math.random() * hex.length)]
    }else if (a == 'rgb'){
        return "rgb(" + randomIntFromInterval(0 , 255) + "," + randomIntFromInterval(0 , 255) + "," + randomIntFromInterval(0 , 255) + ")";
    }else{
        console.log("wrong parameter !")
        return - 1;
    }
};

console.log(getRandomColor('hex'));
