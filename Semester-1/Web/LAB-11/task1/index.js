// Створити функцію sumOfTwo яка буде приймати два аргументи, та повертати квадрат їх суми

let a = 12;
let b = 14;

// console.log(Math.pow(a+b,2));

let sumOfTwo = (a, b) => {
    return Math.pow(a+b,2);
};

console.log(sumOfTwo(a,b)); // => 676 

