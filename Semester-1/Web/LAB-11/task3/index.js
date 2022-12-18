// Створити функцію getTriangleSquare, яка буде рахувати площу трикутника за формулою 
// Герона(https://uk.wikipedia.org/wiki/%D0%A4%D0%BE%D1%80%D0%BC%D1%83%D0%BB%D0%B0_%D0%93%D0%B5%D1%80%D0%BE%D0%BD%D0%B0).
// Функція приймає в якості аргументів довжини сторін трикутника

let a = 13;
let b = 11;
let c = 16;

let  getTriangleSquare = (a , b , c ) => {
    let p = (a+b+c)/2;
    let s = Math.sqrt(p*(p-a)*(p-b)*(p-c));
    // return Math.round(s);
    return s;
};

console.log(getTriangleSquare(a,b,c));