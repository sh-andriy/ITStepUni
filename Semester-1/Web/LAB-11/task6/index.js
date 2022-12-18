// Створити функцію setInnerText, яка буде міняти в елемента за його id текстову складову.
// Якщо елемента не існує, то функція має повернути значення false, якщо елемент існує, то функція повертає значення true


// a - id 
// b - value

let setInnerText = (a , b) => {
        document.getElementById(a).innerText = b;
        return true;
};

setInnerText('item1',"hello it's item1");

