// Створити функцію getSeconds, яка буде повертати кількість секунд, в залежності від того що їй передадуть. Функція має два аргументи:

// - value - аргумент, який вказує кількість
// - type - аргумент, який вказує в яких одиницях передається значення і може набувати наступних значень: seconds, minutes, hours.
// У випадку, якщо передається тип, який не є описаний, результату має бути -1


let a = 10;
let b = 'hours';

let  getSeconds = (a , b) => {
    if(b == 'minutes'){
        return a * 60;
    }else if(b == 'hours'){
        return a * 3600;
    }else{
        return -1;
    } 
};

console.log(getSeconds(a , b));
console.log(getSeconds(7 , 'minutes'));
console.log(getSeconds(1 , 'r534534fre'));