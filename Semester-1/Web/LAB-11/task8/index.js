// Створити функцію generateListOfNumberWithStep, яка буде приймати три параметра: початок, кінець відрізку, крок. 
// Функція повинна створити на сторінці список з числовими значеннями з відрізку з заданим кроком.
// Якщо передані іислові значення не є відрізком(перший аргумент є більший за дургий),
// функція повинна стоврити на сторінці елемент <p> з текстом: "Wrong interval".
// У випадку якщо крок задається 0 або менеше, необхідно створити елемент span з текстом: "Interval must be positive number"

let generateListOfNumberWithStep = (a , b , c) => {
    if(b > a && c > 0){
        for(let i = a; i <= b; i += c){
            document.write("<li>$i</li>".replace('$i', i));
        }
    }else if(c < 0){
        document.write("Interval must be positive number");
    }else{
        document.write("Wrong interval");
    }
};

generateListOfNumberWithStep(3,12,3);
