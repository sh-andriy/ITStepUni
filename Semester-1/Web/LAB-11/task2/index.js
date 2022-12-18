// Створити функцію getNextNumber яка буде приймати один аргумент та повертати:

// - наступне число, якщо аргумент є додатній
// - попереднє число, якщо аргумент є від'ємний
// - при передачі значення 0, повертати 0

let a = 5;
let b = 0;
let c = -16;

let  getNextNumber = (a) => {
    if(a > 0){
        return a += 1;
    }else if(a < 0){
        return a -= 1;
    }else{
        return 0;
    }
};

console.log(getNextNumber(a));
console.log(getNextNumber(b));
console.log(getNextNumber(c));