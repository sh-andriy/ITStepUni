// Створити функцію generateListOfNumber, яка буде приймати два параметра: початок і кінець відрізку.
// Функція повинна стоврити на сторінці список з числовими значеннями з відрізку.
// Якщо передані іислові значення не є відрізком(перший аргумент є більший за дургий),
// функція повинна стоврити на сторінці елемент <p> з текстом: "Wrong interval"

let generateListOfNumber = (a , b) => {
    if(b > a ){
        for(let i = a; i <= b; i++){
            document.write("<li>$i</li>".replace('$i', i));
        }
    }else{
        document.write("Wrong interval");
    }
};

generateListOfNumber(4,10);
