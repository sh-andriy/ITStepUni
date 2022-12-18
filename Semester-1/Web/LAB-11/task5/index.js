// Створити функцію getCountOfByClassName, яка в якості аргумента, приймає назву CSS класу,
//  а резульаттом функції є повернення кількості елементів з таким класом на сторінці.

let getCountOfByClassName = (a) => {
    return document.getElementsByClassName(a).length;
};

// item => 5
// elem => 2
console.log(getCountOfByClassName('item'));
console.log(getCountOfByClassName('elem'));
