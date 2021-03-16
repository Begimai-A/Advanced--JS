//"use strict";

// ENCAPSULATION-сокрытие информации. В ООП это означает,что объект хранит свои значенияв приватном порядке
// и только методы объекта имеют доступ для его изменении

function User(name, age) {
    this.name = name;
    let userAge = age; // создали переменную, которая доступна толко внутри этой функции

    this.say = function () {
        console.log(`User's name ${this.name}, User's age ${userAge}`);
    };

    this.getAge = function () { // для того, чтобы взять доступ до переменной userAge мы используем геттеры и сеттеры
        return userAge;
    };
    this.setAge = function (age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            userAge = age;
        } else {
            console.log('Недопустимое значение');
        }
    };
}

const ivan = new User('Ivan', 27); // Создаем новый объект при помощи создания новых потомков
console.log(ivan.name); // обращаемся к объекту ivan и его свойству name
console.log(ivan.getAge()); // обращаемся к объекту ivan и через геттер получаем возраст

ivan.name = 'Alex'; // также можно изменить его свойства напрямую
ivan.setAge(30); // через сеттер мы устанавливаем новое значение объекту
ivan.setAge(300); // через сеттер мы устанавливаем недопустимое значение объекту, чтобы проверить условие
console.log(ivan.getAge());

ivan.say(); // вызов функции у метода ivan